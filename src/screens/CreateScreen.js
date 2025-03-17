/**
 * CreateScreen Component
 * 
 * Provides functionality to create a new blog post with title and content.
 * Uses BlogPostForm component for the creation interface and handles the creation operation
 * through BlogContext.
 * 
 * Features:
 * - Empty form for new blog post creation
 * - Handles navigation to Index screen after successful creation
 * - Uses BlogContext to manage state updates
 */

import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(Context);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title,content, () => navigation.navigate('Index'))
    }} />
    
};


const styles = StyleSheet.create({

})

export default CreateScreen;
