import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import ActionSheet, { ActionSheetRef, SheetProps } from 'react-native-actions-sheet';
import '../../Constants/sheet';
import { styles } from './style';

const CustomComment = (props: SheetProps<"commnet-sheet">) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');

  const handlePress = () => {
    if (props.payload?.onPost) {
      props.payload.onPost(selectedImage, caption);
    }
    if (props.payload?.onComment) {
      props.payload.onComment(caption);
    }
    console.log(selectedImage,caption)
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

export default CustomComment;




// import React, { useRef } from 'react';
// import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions} from 'react-native';
// import ActionSheet, { ActionSheetRef, SheetProps } from 'react-native-actions-sheet';
// import '../../Constants/sheet'
// import { ICONS } from '../../Constants/icons';
// import { styles } from './style';

// const iconSize={
//   height:20,
//   width:20
// }
// export interface CommentProps{
//   icon1?:React.ReactNode,
//   icon2?:React.ReactNode,
//   icon3?:React.ReactNode,
//   title:string,
//   placeholderText:string,
  
// }
// const CustomComment = (props: SheetProps<"commnet-sheet">) => {
//   const actionSheetRef = useRef<ActionSheetRef>(null);
//   const handlePress=()=>{
//     console.log('press');
//   }
//   return (
//     <ActionSheet
//       id={props.sheetId}
//       ref={actionSheetRef}
//       containerStyle={styles.actionSheetContainer}
//       indicatorStyle={styles.indicator}
//       gestureEnabled={true}
//     >
//       <View style={styles.commentBox}>
//         <Text style={styles.title}>{props.payload?.title}</Text>
//         <TextInput style={styles.input} placeholder={props.payload?.placeholderText} />
//         <View style={styles.container}>
//         <View style={styles.box}>
//           <TouchableOpacity onPress={props.payload?.icon1Press} style={styles.icon}>{props.payload?.icon1}</TouchableOpacity>
//           <TouchableOpacity onPress={props.payload?.icon2Press}style={styles.icon}>{props.payload?.icon2}</TouchableOpacity>
//           <TouchableOpacity onPress={props.payload?.icon3Press} style={styles.icon}>{props.payload?.icon3}</TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={handlePress}> 
//                 <Text style={styles.butText}>Post</Text>
//             </TouchableOpacity>
//         </View>
//         </View>
//       </View>
//     </ActionSheet>
//   );
// };



// export default CustomComment;


