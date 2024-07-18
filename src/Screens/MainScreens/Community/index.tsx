
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import notifee from "@notifee/react-native";
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
import CustomLoading from '../../../Components/CustomLoading';
import { FlatList } from 'react-native-gesture-handler';
import PostDetails from '../../../Components/PostDetails';
import { PostScreenProps } from '../../../Constants/navigation';
import { getTimePassed } from '../../../utils/common';


function Community({ navigation }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading,setIsLoading]= useState<boolean>(true);
  const {firstName,lastName,photo,id}= useAppSelector((state)=>state.User.data)
  console.log('khsg',id);
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
        setIsLoading(false)
      }, error => {
        console.log('Error getting posts: ', error);
        setIsLoading(false)
      });
    return () => unsubscribe();
  }, []);
  const handleStoryAdded = () => {
    setStoryUpdateTrigger(storyUpdateTrigger + 1); // Trigger to re-fetch stories
    console.log('story',storyUpdateTrigger);

  };
 

  const handlePost = async () => {
   
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
        onPost: (image, caption) => {} 
        
      }
    });
  };

  const handlePostPress = async (post: Post) => {
    navigation.navigate('PostDetails', { post });
   
  };
  return (
    <SafeAreaView style={styles.container}>
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
        {isLoading ? (
        <CustomLoading />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item: post, index }) => (
            <TouchableOpacity key={index} onPress={() => handlePostPress(post)}>
              <PostScreen
                profilePic={post.userPhoto}
                image={post.photo}
                postId={post.postId!}
                name={post.userName}
                time={getTimePassed(post.createdOn.seconds * 1000)}
                caption={post.caption}
                likes={0}
                comments={post.comments.length}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(post, index) => index.toString()}
        />
      )}
          
    </SafeAreaView>
  );
}



export default Community;









