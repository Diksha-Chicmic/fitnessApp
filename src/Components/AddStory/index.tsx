import React, { useState } from 'react';
import { View, TouchableOpacity, Modal } from "react-native";
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
import { ICONS } from "../../Constants/icons";
import { COLORS } from '../../Constants/commonStyles';
import { styles } from './style';
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import firestore, { Timestamp } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useAppSelector } from '../../Redux/Store';

const iconSize = {
  height: 40,
  width: 40,
  color: COLORS.PRIMARY.PURPLE,
};
interface AddStoryProps {
  onStoryAdded: () => void;
}
const AddStory:React.FC<AddStoryProps> = ({ onStoryAdded }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { id: userId, firstName, lastName, photo: userPhoto } = useAppSelector((state) => state.User.data);

  const uploadImageToStorage = async (imageUri:string) => {
    const imageName = uuidv4();
    const reference = storage().ref(`stories/${userId}/${imageName}`);
    await reference.putFile(imageUri);
    const url = await reference.getDownloadURL();
    return url;
  };

  const addStoryToFirestore = async (imageUri:string) => {
    try {
      const imageUrl = await uploadImageToStorage(imageUri);
      console.log('image url  is ',imageUrl, )
      const userDoc = await firestore().collection('stories').doc(userId!).get();
      const existingStories = userDoc.exists ? userDoc.data()?.stories || [] : [];

      const newStory = {
        story_id: uuidv4(),
        story_image: imageUrl,
        createdOn: Timestamp.fromDate(new Date()),
      };
     console.log('nnnn story', newStory)
      const updatedStories = [...existingStories, newStory];
 
      await firestore()
        .collection('stories')
        .doc(userId!)
        .set({
          userId,
          user_name: firstName + " " + lastName,
          user_image:userPhoto,
          stories: updatedStories,
        });

      onStoryAdded();
    } catch (error) {
      console.log('Error adding story: ', error);
    }
  };

  const openImagePicker = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    let response = await launchImageLibrary(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      addStoryToFirestore(response.assets[0].uri);
      setModalVisible(false);
    }
  };

  const openCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    let response = await launchCamera(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      addStoryToFirestore(response.assets[0].uri);
      setModalVisible(false);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.story} onPress={() => setModalVisible(true)}>
        <View style={styles.icon}>{ICONS.PLUS({ height: 20, width: 20 })}</View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={openImagePicker}>
              <View>{ICONS.ADDIMAGE(iconSize)}</View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
              <View>{ICONS.ADDPHOTO(iconSize)}</View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default AddStory;


