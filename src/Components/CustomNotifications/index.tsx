import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import firestore from '@react-native-firebase/firestore';
//import {NotificationProps} from './types';
//import {CustomImage, DescriptionText} from '../../Atoms';
import { styles } from './style';
import { firebaseDB } from '../../utils/userhandle';
import { User } from '../../Defs/user';
import { NotificationProps } from './types';

const CustomNotification: React.FC<NotificationProps> = ({userId,text, time,check,}) => {
 
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
  return (
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
  );
};

export default CustomNotification;