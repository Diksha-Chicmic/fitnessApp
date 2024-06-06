import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Modal, Alert } from 'react-native';
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import AvatarSelector from '../../Components/AvatarSelection'
import CustomButton from '../../Components/CustomButton';
import { AvatarKey } from '../../Constants/icons';
import { NAVIGATION, AddProfileProps } from '../../Constants/navigation';
import { styles } from './style';


const AddProfile = ({ navigation }:AddProfileProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarKey | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null | undefined>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleAvatarSelect = (avatar: AvatarKey) => {
    setSelectedAvatar(avatar);
    console.log(`Selected Avatar: ${avatar}`);
  };

  const handleUpdateProfile = () => {
    if (selectedAvatar) {
      console.log(`Profile updated with avatar: ${selectedAvatar}`);
      // Add your update profile logic here
      navigation.navigate(NAVIGATION.ADDPREFERENCES);
    } else if (selectedImage) {
      console.log(`Profile updated with image: ${selectedImage}`);
      // Add your update profile with image logic here
      navigation.navigate(NAVIGATION.ADDPREFERENCES);
    } else {
      console.log('No avatar or image selected');
      Alert.alert(
        "Selection Required",
        "Please select an avatar or upload a custom photo before proceeding.",
        [{ text: "OK" }]
      );
    }
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
    <SafeAreaView>
      <AvatarSelector onSelect={handleAvatarSelect} />
      <Text style={styles.heading}>Profile Picture</Text>
      <Text style={styles.text}>
        You can select a photo from one of these emojis or add your own photo as a profile picture
      </Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.text2}>Add Custom Photo</Text>
      </TouchableOpacity>
      <CustomButton title="Continue" onPress={handleUpdateProfile} />
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
              <Text style={styles.modalButtonText}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
              <Text style={styles.modalButtonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default AddProfile;
