import React from "react";
import { SafeAreaView, Text,ScrollView,StyleSheet,View, TouchableOpacity} from "react-native";
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import PostScreen from "../../../Components/CustomPost ";
import PostDetails from "../../../Components/PostDetails";
import { SIZES } from "../../../Constants/commonStyles";
import { ICONS } from "../../../Constants/icons";
import { SheetManager } from "react-native-actions-sheet";
import AddStory from "../../../Components/AddStory";
function Community(){
    const openImagePicker = async () => {
        const options: ImageLibraryOptions = {
          mediaType: 'photo',
        };
        let response = await launchImageLibrary(options);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          let imageUri = response.assets![0].uri;
          //setSelectedImage(imageUri);
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

    const handleCommentPress = () => {
        console.log('test');
        SheetManager.show('comment-sheet',{
          payload: { title: "Post" ,
                     placeholderText:'Share here...',
                    icon1:ICONS.ADDPHOTO({height:20,width:20,}),
                    icon2:ICONS.ADDIMAGE({height:20,width:20}),
                    icon3:ICONS.YELLOWSMILE({height:20,width:20}),
                  icon1Press:openCamera,
                  icon2Press: openImagePicker,
                  icon3Press: ()=>{console.log('ewjhd')},
        }
    
        });
      };
    return(
        
        <SafeAreaView>
            <ScrollView >
                <View style={styles.parent}>
                <View style={styles.direction}>
                <Text style={styles.heading}>Community</Text>
                <TouchableOpacity onPress={handleCommentPress}>
                {ICONS.FEMALE({height:20,width:20})}
                </TouchableOpacity>
                </View>
                <AddStory/>
                </View>
           <PostScreen/>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    heading:{
        fontSize:SIZES.font18,
        fontWeight:'bold'
    },
    direction:{
        flexDirection:'row',
        justifyContent:'space-between',
       
    },
    parent:{
         marginHorizontal:'6%',
        justifyContent:'center',
       
    }
})

export default Community