/**
 * Main App Component
 * 
 * This is the root component of the blog application that sets up the navigation structure
 * and wraps the entire app with the BlogContext Provider.
 * 
 * Navigation Structure:
 * - Index: Main screen showing list of blog posts
 * - Show: Displays individual blog post details
 * - Create: Form to create new blog posts
 * - Edit: Form to edit existing blog posts
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider } from './src/context/BlogContext';

// Create stack navigator with all screens
const navigator = createStackNavigator(
  {
    Index: IndexScreen,    // Main screen showing list of posts
    Edit: EditScreen,      // Screen for editing existing posts
    Show: ShowScreen,      // Screen for viewing post details
    Create: CreateScreen,  // Screen for creating new posts
  },
  {
    initialRouteName: 'Index',  // Start at the index screen
    defaultNavigationOptions: {
      title: 'Blog',           // Default header title
    },
  }
);

// Create the app container with navigation
const App = createAppContainer(navigator);

/**
 * Root component that provides the BlogContext to all child components
 * and renders the main navigation container
 */
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
