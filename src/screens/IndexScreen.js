import React, { useContext , useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);
    
    useEffect(() => {
            getBlogPosts()

            const listener = navigation.addListener('didFocus',()=> {
                getBlogPosts();
            })
    }, [] )

    return (
        <View>
           
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <View style= {styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash-2" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                );
            }}
            />
        </View>
    );
};

IndexScreen.navigationOptions =({ navigation }) =>{
    return{
        headerRight:  () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <AntDesign name="plus" size={30} />
            </TouchableOpacity>
          )
    }      
}   

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        paddingHorizontal: 20,
        borderColor: 'gray'

    },
    title: {
        fontSize: 18

    },
    icon: {
        fontSize: 24
    },
    header: {
        paddingHorizontal: 40,
    }
})

export default IndexScreen;
