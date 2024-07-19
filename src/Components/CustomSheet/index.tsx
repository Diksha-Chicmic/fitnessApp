import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ActionSheet, { ActionSheetRef, SheetProps } from 'react-native-actions-sheet';
import { useNetInfo } from '@react-native-community/netinfo';
import { useRealm } from '@realm/react';
import '../../Constants/sheet';
import { styles } from './style';
import { sendNotification, storePost } from '../../utils/userhandle';
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../Redux/Store';
import { Timestamp } from '@react-native-firebase/firestore';
import { PostDb } from '../../DbModels /post';
import CustomButton from '../CustomButton';
 
const screenWidth=Dimensions.get('screen').width;
const CustomSheet = (props: SheetProps<"commnet-sheet">) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [caption, setCaption] = useState<string>('');
  const realm = useRealm();
  const netInfo= useNetInfo();

  const {firstName,lastName,id,photo:user_Photo} = useAppSelector((state)=> state.User.data)
  const storeDataInRealmDb = (postPhoto: string, postCaption: string) => {
    realm.write(() => {
      realm.create(PostDb, {
        caption: postCaption,
        photo: postPhoto,
      });
    });
  };
  const handlePress = async () => {
    actionSheetRef.current?.hide();
    if (props.payload?.onPost) {
      const newPost = {
        postId: uuidv4(),
        photo: selectedImage,
        caption: caption,
        userId: id!,
        userName: firstName + " " + lastName,
        createdOn:Timestamp.fromDate(new Date()),
        likedByUsersId: [],
        comments: [],
        userPhoto:user_Photo
      };
      if(netInfo.isConnected){
      try{
        await storePost(newPost);
        const notification = {
          userId: id!, 
          message: 'your post posted successfully',
          isUnread: true,
          isShownViaPushNotification: false
        };
  
        await sendNotification(notification, id!);
      }
      catch(e){
        console.log('eee',e)
      }}else{
        storeDataInRealmDb(selectedImage, caption);
        actionSheetRef.current?.hide();
      }
    }
    if (props.payload?.onComment) {
      props.payload.onComment(caption);
    }
    setSelectedImage('');
    setCaption('');
   
  };

  const handleImageSelection = (uri: string) => {
    setSelectedImage(uri);
  };

  return (
    <KeyboardAwareScrollView>
    <ActionSheet
      id={props.sheetId}
      ref={actionSheetRef}
      containerStyle={styles.actionSheetContainer}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}>
       
      <View style={styles.commentBox}>
        <Text style={styles.title}>{props.payload?.title}</Text>
          
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <Image source={{uri:user_Photo}} style={{height:screenWidth/6,width:screenWidth/6, borderRadius:50}}/>
    <TextInput
          multiline
          editable
          style={styles.input}
          placeholder={selectedImage ? "Write a caption..." : props.payload?.placeholderText}
          value={caption}
          onChangeText={setCaption}
          numberOfLines={2}
        />
    </View>
      
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        )}
        <View style={styles.container}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => props.payload?.icon1Press(handleImageSelection)} style={styles.icon}>{props.payload?.icon1}</TouchableOpacity>
            <TouchableOpacity onPress={() => props.payload?.icon2Press(handleImageSelection)} style={styles.icon}>{props.payload?.icon2}</TouchableOpacity>
            <TouchableOpacity onPress={props.payload?.icon3Press} style={styles.icon}>{props.payload?.icon3}</TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.butText}>Post</Text>
            </TouchableOpacity>
        
          </View>
        </View>
      </View>
     
    </ActionSheet>
    </KeyboardAwareScrollView>
  );
};

export default CustomSheet;