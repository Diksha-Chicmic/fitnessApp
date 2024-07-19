import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Swipeable} from 'react-native-gesture-handler';
import { styles } from './style';
import { firebaseDB } from '../../utils/userhandle';
import { User } from '../../Defs/user';
import { NotificationProps } from './types';
import { COLORS, SIZES } from '../../Constants/commonStyles';


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
      style={styles.dltBut}
      onPress={() => handleDeletePressed()}>
      <Text style={styles.dltText}> Delete </Text>
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