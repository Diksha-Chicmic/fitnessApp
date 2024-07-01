
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import firestore from "@react-native-firebase/firestore";
import PostScreen from '../../../Components/CustomPost ';
import { SIZES } from '../../../Constants/commonStyles';
import { CommunityProps } from '../../../Constants/navigation';
import { ICONS } from '../../../Constants/icons';
import { SheetManager } from 'react-native-actions-sheet';
import AddStory from '../../../Components/AddStory';
import { styles } from './style';
import { useAppSelector } from '../../../Redux/Store';
import Story from '../../../Components/CustomStory ';
import { Post } from '../../../Defs/user';
import { FlatList } from 'react-native-gesture-handler';


function Community({ navigation }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const {firstName,lastName,photo}= useAppSelector((state)=>state.User.data)
  const [storyUpdateTrigger, setStoryUpdateTrigger] = useState<number>(0);
  const openImagePicker = async (callback: (uri: string) => void) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    let response:any = await launchImageLibrary(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      callback(response.assets[0].uri);
    }
  };

  const openCamera = async (callback: (uri: string) => void) => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    let response:any= await launchCamera(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      callback(response.assets[0].uri);
    }
  };


  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => doc.data() as Post);
        setPosts(data);
      }, error => {
        console.log('Error getting posts: ', error);
      });
    return () => unsubscribe();
  }, []);
  const handleStoryAdded = () => {
    setStoryUpdateTrigger(storyUpdateTrigger + 1); // Trigger to re-fetch stories
    console.log('story',storyUpdateTrigger);

  };

  const handlePost = () => {
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
        }
        
      }
    });
  };

  const handlePostPress = (post: Post) => {
    navigation.navigate('PostDetails', { post });
  };
  return (
    <SafeAreaView>
         <View style={styles.parent}>
          <View style={[styles.direction,]}>
            <Text style={styles.heading}>Community</Text>
            <TouchableOpacity onPress={handlePost}>
              {ICONS.FEMALE({ height: 20, width: 20 })}
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginVertical:'5%'}}> 
          <AddStory onStoryAdded={handleStoryAdded} />
            <Story key={storyUpdateTrigger} />
          </View>
         
        </View>
        <FlatList data={posts} renderItem={({item: post,index}) => {
        return  <PostScreen
            key={index}
            image={post.photo}
            postId={post.postId!}
            name={post.userName}
            time={post.createdOn.toDate().toLocaleString()}
            caption={post.caption}
            likes={0}
            comments={post.comments.length}
            onPress={() => handlePostPress(post)}
          />}} />
    </SafeAreaView>
  );
}



export default Community;









