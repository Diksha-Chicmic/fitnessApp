import React, { useState } from 'react';
import { View, TouchableOpacity, Modal } from "react-native";
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
import { ICONS } from "../../Constants/icons";
import { COLORS } from '../../Constants/commonStyles';
import { styles } from './style';
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import firestore, { Timestamp } from '@react-native-firebase/firestore';
import { useAppSelector } from '../../Redux/Store';

const iconSize = {
  height: 40,
  width: 40,
  color: COLORS.PRIMARY.PURPLE,
};

const AddStory = ({ onStoryAdded }:any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { id: userId, firstName, lastName, photo: userPhoto } = useAppSelector((state) => state.User.data);

  const addStoryToFirestore = async (imageUri: string | undefined) => {
    const storyData = {
      userId,
      userName: firstName + " " + lastName,
      userPhoto,
      stories: [
        {
          storyId: uuidv4(),
          storyImage: imageUri,
          createdOn: Timestamp.fromDate(new Date()),
        }
      ],
    };
 console.log(storyData);
    try {
      console.log('stored stories in firebase')
      await firestore()
        .collection('stories')
        .doc(userId!)
        .set(storyData, { merge: true });
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





// import React, {useState} from 'react'
// import { Text, View, TouchableOpacity, Modal, StyleSheet,Dimensions} from "react-native";
// import { launchCamera,launchImageLibrary,CameraOptions,ImageLibraryOptions } from 'react-native-image-picker';
// import { ICONS } from "../../Constants/icons";
// import { COLORS } from '../../Constants/commonStyles';
// import { styles } from './style';

//  const iconSize={
//     height:40,
//     width:40,
//     color:COLORS.PRIMARY.PURPLE
//  }
// const AddStory =()=>{
//     const [modalVisible, setModalVisible] = useState(false);
//     const openImagePicker = async () => {
//         const options: ImageLibraryOptions = {
//           mediaType: 'photo',
//         };
//         let response = await launchImageLibrary(options);
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else {
//           let imageUri = response.assets![0].uri;
//         //  setSelectedImage(imageUri);
//           console.log(imageUri);
//         }
//       };
    
//       const openCamera = async () => {
//         const options: CameraOptions = {
//           mediaType: 'photo',
//         };
//         let response = await launchCamera(options);
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else {
//           let imageUri = response.assets![0].uri;
//          // setSelectedImage(imageUri);
//           console.log(imageUri);
//         }
//       };
    
//     return (
//     <View>
//         <TouchableOpacity style={styles.story} onPress={() => setModalVisible(true)}>
//             <View style={styles.icon}>{ICONS.PLUS({height:20,width:20})}</View>
//         </TouchableOpacity>
//         <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//         setModalVisible(!modalVisible);
//         }}>
//             <TouchableOpacity
//           style={styles.modalBackground}
//           activeOpacity={1}
//           onPressOut={() => setModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <TouchableOpacity style={styles.modalButton} onPress={openImagePicker}>
             
//               <View>{ICONS.ADDIMAGE(iconSize)}</View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
//             <View>{ICONS.ADDPHOTO(iconSize)}</View>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//         </Modal>
//     </View>
//     )
// }


// export default AddStory