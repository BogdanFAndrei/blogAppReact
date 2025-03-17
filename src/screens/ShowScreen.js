/**
 * ShowScreen Component
 * 
 * Displays the details of a single blog post including its title and content.
 * Provides navigation to the Edit screen through a header button.
 * 
 * Features:
 * - Displays blog post title and content
 * - Edit button in header to modify the post
 * - Uses BlogContext to access post data
 */

import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context);

    // Find the specific blog post using the ID from navigation params
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

// Configure the header with an edit button
ShowScreen.navigationOptions =({ navigation }) =>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: navigation.getParam('id')})}>
            <EvilIcons style={styles.icon} name="pencil"  />
          </TouchableOpacity>
        ),
      };
    };

const styles = StyleSheet.create({
  icon: {
    size:35
  }
})

export default ShowScreen;
