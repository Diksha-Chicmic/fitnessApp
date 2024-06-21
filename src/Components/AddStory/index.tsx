import React, {useState} from 'react'
import { Text, View, TouchableOpacity, Modal, StyleSheet,Dimensions} from "react-native";
import { launchCamera,launchImageLibrary,CameraOptions,ImageLibraryOptions } from 'react-native-image-picker';
import { ICONS } from "../../Constants/icons";
import { COLORS } from '../../Constants/commonStyles';
import { styles } from './style';

 const iconSize={
    height:40,
    width:40,
    color:COLORS.PRIMARY.PURPLE
 }
const AddStory =()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const openImagePicker = async () => {
        const options: ImageLibraryOptions = {
          mediaType: 'photo',
        };
        let response = await launchImageLibrary(options);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          let imageUri = response.assets![0].uri;
        //  setSelectedImage(imageUri);
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
         // setSelectedImage(imageUri);
          console.log(imageUri);
        }
      };
    
    return (
    <View>
        <TouchableOpacity style={styles.story} onPress={() => setModalVisible(true)}>
            <View style={styles.icon}>{ICONS.PLUS({height:20,width:20})}</View>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}>
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
    )
}


export default AddStory