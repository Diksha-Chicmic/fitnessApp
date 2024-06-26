
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import PostScreen from '../../../Components/CustomPost ';
import { SIZES } from '../../../Constants/commonStyles';
import { CommunityProps } from '../../../Constants/navigation';
import { ICONS } from '../../../Constants/icons';
import { SheetManager } from 'react-native-actions-sheet';
import AddStory from '../../../Components/AddStory';
import { styles } from './style';
import { useAppSelector } from '../../../Redux/Store';
import { getAllPost, getPost } from '../../../utils/userhandle';
import { Post } from '../../../Defs/user';


function Community({ navigation }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const {firstName,lastName,photo}= useAppSelector((state)=>state.User.data)
  const openImagePicker = async (callback: (uri: string) => void) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    let response = await launchImageLibrary(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      callback(response.assets[0].uri);
    }
  };

  const openCamera = async (callback: (uri: string) => void) => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    let response = await launchCamera(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      callback(response.assets[0].uri);
    }
  };

  useEffect(()=> {
getAllPost().then(val => setPosts(val));
  },[])

  const handleCommentPress = () => {
    SheetManager.show('comment-sheet', {
      payload: {
        title: 'Post',
        placeholderText: 'Share here...',
        icon1: ICONS.ADDPHOTO({ height: 20, width: 20 }),
        icon2: ICONS.ADDIMAGE({ height: 20, width: 20 }),
        icon3: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
        icon1Press: (callback) => openCamera(callback),
        icon2Press: (callback) => openImagePicker(callback),
        icon3Press: () => console.log('icon3 pressed'),
        onPost: (image, caption) => {
          if (image) {
            const newPost = { id: posts.length, image, caption };
            setPosts([...posts, newPost]);
          }
        }
        
      }
    });
  };

  const handlePostPress = (post: Post) => {
    navigation.navigate('PostDetails', { post });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.direction}>
            <Text style={styles.heading}>Community</Text>
            <TouchableOpacity onPress={handleCommentPress}>
              {ICONS.FEMALE({ height: 20, width: 20 })}
            </TouchableOpacity>
          </View>
          <AddStory />
        </View>
        {posts.map((post, index) => (
          <PostScreen
            key={index}
            image={post.photo}
            postId={post.postId!}
            name={firstName+" "+lastName}
            time="Just now"
            caption={post.caption}
            likes={0}
            comments={0}
            onPress={() => handlePostPress(post)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}



export default Community;






