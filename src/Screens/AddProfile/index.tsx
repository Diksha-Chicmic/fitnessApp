import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import AvatarSelector from '../../Components/AvatarSelection'
import CustomButton from '../../Components/CustomButton';
import { AvatarKey } from '../../Constants/icons';
import {
    CameraOptions,
    ImageLibraryOptions,
    launchCamera,
    launchImageLibrary,
  } from 'react-native-image-picker';
import { NAVIGATION, AddProfileProps } from '../../Constants/navigation';
import { styles } from './style';

const AddProfile= ({navigation}:AddProfileProps) => {
    // const [selectedAvatar, setSelectedAvatar] = useState<AvatarKey | null>(null);

    // const handleAvatarSelect = (avatar: AvatarKey) => {
    //     setSelectedAvatar(avatar);
    //     console.log(`Selected Avatar: ${avatar}`);
    // };

    // const handleUpdateProfile = () => {
    //     if (selectedAvatar) {
    //         console.log(`Profile updated with avatar: ${selectedAvatar}`);
    //         // Add your update profile logic here
    //     } else {
    //         console.log('No avatar selected');
    //     }
    // };
    // const openImagePicker = async () => {
    //     const options: ImageLibraryOptions = {
    //       mediaType: 'photo',
    //     };
    //     let response = await launchImageLibrary(options);
    //     if (response.didCancel) {
    //       console.log('User cancelled image picker');
    //     } else {
    //       let imageUri = response.assets![0].uri;
    //       console.log(imageUri);
    //      // this.setState({image: imageUri, cameraSheet: false});
    //     }
    //   };
    //  const  openCamera = async () => {
    //     const options: CameraOptions = {
    //       mediaType: 'photo',
    //     };
    //     let response = await launchCamera(options);
    //     console.log(response);
    //     if (response.didCancel) {
    //       console.log('User cancelled image picker');
    //     } else {
    //       let imageUri = response.assets![0].uri;
    //       console.log(imageUri);
    //      // this.setState({image: imageUri, cameraSheet: false});
    //     }
    const [selectedAvatar, setSelectedAvatar] = useState<AvatarKey | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null | undefined>(null);
  const [modalVisible, setModalVisible]= useState<boolean>(false);

  const handleAvatarSelect = (avatar: AvatarKey) => {
    setSelectedAvatar(avatar);
    console.log(`Selected Avatar: ${avatar}`);
  };

  const handleUpdateProfile = () => {
    if (selectedAvatar) {
      console.log(`Profile updated with avatar: ${selectedAvatar}`);
      // Add your update profile logic here
    } else if (selectedImage) {
      console.log(`Profile updated with image: ${selectedImage}`);
      // Add your update profile with image logic here
    } else {
      console.log('No avatar or image selected');
    }
    navigation.navigate(NAVIGATION.ADDPREFERENCES)
  };

  const openImagePicker = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    let response = await launchImageLibrary(options);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else {
      let imageUri = response.assets![0].uri;
      setSelectedImage(imageUri);
      console.log(imageUri);
    }
  };

  const openCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    let response = await launchCamera(options);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else {
      let imageUri = response.assets![0].uri;
      setSelectedImage(imageUri);
      console.log(imageUri);
    }
  };
      

    return (
        <SafeAreaView >
            
            <AvatarSelector onSelect={handleAvatarSelect} />
            <Text style={styles.heading}>Profile Picture</Text>
            <Text style={styles.text}>You can select photo from one of this emoji or add your own photo as profile picture</Text>
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <Text style={styles.text2}>Add Custom Photo</Text>
            </TouchableOpacity>
            
            <CustomButton title="Continue" onPress={handleUpdateProfile} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.modalButton} onPress={openImagePicker}>
                        <Text style={styles.modalButtonText}>Choose from Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
                        <Text style={styles.modalButtonText}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
};


export default AddProfile;
