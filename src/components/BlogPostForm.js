/**
 * BlogPostForm Component
 * 
 * A reusable form component for creating and editing blog posts.
 * Handles input state management and form submission for both new posts
 * and editing existing ones.
 * 
 * Features:
 * - Title and content input fields
 * - Form submission handling
 * - Pre-filled values support for editing
 * - Consistent styling
 */

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
 
/**
 * BlogPostForm Component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Callback function called with title and content on form submission
 * @param {Object} props.initialValues - Initial values for the form fields
 * @param {string} props.initialValues.title - Initial title value
 * @param {string} props.initialValues.content - Initial content value
 */
const BlogPostForm = ({
  onSubmit,
  initialValues = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
 
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
 
export default BlogPostForm;