/**
 * BlogContext Module
 * 
 * Manages the global state for blog posts using Context API and Reducer pattern.
 * Provides actions for CRUD operations on blog posts and handles state updates.
 * 
 * Features:
 * - CRUD operations for blog posts (Create, Read, Update, Delete)
 * - Async operations with jsonServer API
 * - State management through reducer pattern
 */

import React, {  useReducer, createContext } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

/**
 * Reducer function to handle state updates based on action types
 * 
 * @param {Array} state - Current state array of blog posts
 * @param {Object} action - Action object containing type and payload
 * @returns {Array} Updated state array
 */
const blogReducer = (state, action) => {
    switch (action.type){
        case 'get_blogposts':
            return action.payload;
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
     
        default:
            return state;
    }
};

/**
 * Action creator to fetch all blog posts from the server
 * 
 * @param {Function} dispatch - Dispatch function from useReducer
 * @returns {Function} Async function to fetch and dispatch blog posts
 */
const getBlogPosts = dispatch => {
    return async () => {
         const response = await jsonServer.get('/blogposts');
         dispatch({type: 'get_blogposts', payload: response.data});
    };
};

/**
 * Action creator to add a new blog post
 * 
 * @param {Function} dispatch - Dispatch function from useReducer
 * @returns {Function} Async function to create and dispatch new blog post
 */
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content});
        if (callback) {
            callback()
        }
    };
};

/**
 * Action creator to delete a blog post
 * 
 * @param {Function} dispatch - Dispatch function from useReducer
 * @returns {Function} Async function to delete and dispatch blog post removal
 */
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id})
    };
};

/**
 * Action creator to edit an existing blog post
 * 
 * @param {Function} dispatch - Dispatch function from useReducer
 * @returns {Function} Async function to update and dispatch blog post changes
 */
const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatch({
            type: 'edit_blogpost',
            payload: {id, title, content}
        });
        if (callback) {
            callback()
        }
    };
};

// Create and export the context with all actions
export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    []
);