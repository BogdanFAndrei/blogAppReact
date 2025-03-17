/**
 * EditScreen Component
 * 
 * Provides functionality to edit an existing blog post's title and content.
 * Uses BlogPostForm component for the edit interface and handles the update operation
 * through BlogContext.
 * 
 * Features:
 * - Pre-fills form with existing blog post data
 * - Handles navigation back to previous screen after successful edit
 * - Uses BlogContext to manage state updates
 */

import React, {useState, useContext} from 'react';
import { StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
    // Get the blog post ID from navigation params
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);

    // Find the specific blog post to edit
    const blogPost = state.find((blogPost)=> blogPost.id === id);

    return (
        <BlogPostForm
            // Pre-fill the form with existing blog post data
            initialValues = {{title: blogPost.title, content: blogPost.content}}
            // Handle form submission with edit operation and navigation
            onSubmit={(title,content) => {
                editBlogPost(id, title, content, ()=> navigation.pop());
            }}
        />
    );
};

const styles = StyleSheet.create({})

export default EditScreen;

