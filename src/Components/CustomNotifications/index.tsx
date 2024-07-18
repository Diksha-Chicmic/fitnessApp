import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Swipeable} from 'react-native-gesture-handler';
//import {NotificationProps} from './types';
//import {CustomImage, DescriptionText} from '../../Atoms';
import { styles } from './style';
import { firebaseDB } from '../../utils/userhandle';
import { User } from '../../Defs/user';
import { NotificationProps } from './types';
import { COLORS, SIZES } from '../../Constants/commonStyles';
// userId,
// notificationText,
// timeAgo,
// isUnread,
// handleDeletePressed,
// }) => {
// // state use
// const [userData, setUserData] = useState<User>();

// // effect use
// useEffect(() => {
//   const unsubscribe = firestore()
//     .collection(firebaseDB.collections.users)
//     .doc(userId)
//     .onSnapshot(snapshot => {
//       const data = snapshot.data() as User;
//       if (data) {
//         setUserData(data);
//       }
//     });
//   return () => unsubscribe();
// }, [userId]);

// // functions
// const rightSwipeActions = () => {
//   return (
//     <TouchableOpacity
//       style={{
//         flex: 1,
//         backgroundColor: COLORS.SECONDARY.RED,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 16,
//         width: 100,
//         marginHorizontal: 8,
//         marginVertical: 8,
//       }}
//       onPress={() => handleDeletePressed()}>
//       <Text
//         style={{
//           color: COLORS.SECONDARY.WHITE,
//           fontWeight: 'bold',
//           paddingHorizontal: 8,
//           fontFamily: FONT_FAMILY.REGULAR,
//           fontSize: SIZES.font14,
//         }}>
//         Delete
//       </Text>
//     </TouchableOpacity>
//   );
// };

// return (
//   <Swipeable renderRightActions={rightSwipeActions}>
//     <View style={styles.parent}>
//       <View style={styles.CustomImageCtr}>
//         {userData ? (
//           <CustomImage
//             source={{uri: userData.photo}}
//             parentStyle={styles.customImageParentStyle}
//             imageStyle={styles.customImageStyle}
//           />
//         ) : null}
//       </View>
//       <View style={styles.textCtr}>
//         <Text style={styles.notificationText}>
//           {userData && userData.firstName ? (
//             <Text style={styles.userNameText}>
//               {userData.firstName + ' ' + userData.lastName + ' '}
//             </Text>
//           ) : null}
//           {notificationText}
//         </Text>
//         <DescriptionText text={timeAgo} textStyle={styles.descriptionText} />
//       </View>
//       <View style={styles.isUnreadCtr}>
//         {isUnread ? <View style={styles.isUnreadDot} /> : null}
//       </View>
//     </View>
//   </Swipeable>
const CustomNotification: React.FC<NotificationProps> = ({userId,text, time,check,handleDeletePressed}) => {
 
  const [userData, setUserData] = useState<User>();
  useEffect(() => {
    const unsubscribe = firestore()
      .collection(firebaseDB.collections.users)
      .doc(userId)
      .onSnapshot(snapshot => {
        const data = snapshot.data() as User;
        console.log('user data ddddd',data)
        if (data) {
          setUserData(data);
        }
      });
    return () => unsubscribe();
  }, [userId]);
  console.log(userData?.photo,'iiiiiii')
  const rightSwipeActions = () => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: COLORS.SECONDARY.RED,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: 100,
        marginHorizontal: 8,
        marginVertical: 8,
      }}
      onPress={() => handleDeletePressed()}>
      <Text
        style={{
          color: COLORS.SECONDARY.WHITE,
          fontWeight: 'bold',
          paddingHorizontal: 8,
          //fontFamily: FONT_FAMILY.REGULAR,
          fontSize: SIZES.font14,
        }}>
        Delete
      </Text>
    </TouchableOpacity>
  );
};
  return (
    <Swipeable renderRightActions={rightSwipeActions}>
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        {userData?(
        <Image source={{uri:userData.photo}} style={styles.image}/>
         ):null}
      </View>
      <View style={styles.textContiner}>
        <Text style={styles.notificationText}>
          {userData ? (
            <Text style={styles.nameText}>
              {userData.firstName + ' ' + userData.lastName + ' '}
            </Text>
          ) : null}
          {text}
        </Text>
        <Text style={styles.text}> {time}</Text>
      </View>
      <View style={styles.box}>
        {check ? <View style={styles.dot} /> : null}
      </View>
    </View>
    </Swipeable>
  );
};

export default CustomNotification;