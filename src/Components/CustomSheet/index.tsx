import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import ActionSheet, { ActionSheetRef, SheetProps } from 'react-native-actions-sheet';
import '../../Constants/sheet';
import { styles } from './style';
import { storePost } from '../../utils/userhandle';
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../Redux/Store';

const CustomSheet = (props: SheetProps<"commnet-sheet">) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');

  const {firstName,lastName,id,photo} = useAppSelector((state)=> state.User.data)

  const handlePress = async () => {

    if (props.payload?.onPost) {
      // props.payload.onPost(selectedImage, caption);
      const newPost = {
        postId: uuidv4(),
        photo: selectedImage,
        caption: caption,
        userId: id!,
        userName: firstName + " " + lastName,
        createdOn: new Date(),
        likedByUsersId: '',
        comments: '',
        //userPhoto:photo
      };
      try{
        await storePost(newPost);
      }
      catch(e){
        console.log('eee',e)
      }
    }
    if (props.payload?.onComment) {
      props.payload.onComment(caption);
    }
    setSelectedImage(null);
    setCaption('');
    actionSheetRef.current?.hide();
  };

  const handleImageSelection = (uri: string) => {
    setSelectedImage(uri);
  };

  return (
    <ActionSheet
      id={props.sheetId}
      ref={actionSheetRef}
      containerStyle={styles.actionSheetContainer}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}
    >
      <View style={styles.commentBox}>
        <Text style={styles.title}>{props.payload?.title}</Text>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        )}
        <TextInput
          style={styles.input}
          placeholder={selectedImage ? "Write a caption..." : props.payload?.placeholderText}
          value={caption}
          onChangeText={setCaption}
        />
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
  );
};

export default CustomSheet;









