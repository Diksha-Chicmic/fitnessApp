import React, {useEffect, useState} from 'react';
import {View, FlatList, Pressable, Text, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomNotification from '../../../Components/CustomNotifications';
import { firebaseDB, NotificationDataFirebaseDB, updateNotificationReadStatus, } from '../../../utils/userhandle';
import {useAppSelector} from '../../../Redux/Store';
import { getTimePassed } from '../../../utils/common';
import { styles } from './style';
const Notifications: React.FC = () => {
  
  const [notificationsData, setNotificationsData] = useState<Array<NotificationDataFirebaseDB>>();
  const {id} = useAppSelector(state => state.User.data);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection(firebaseDB.collections.users)
      .doc(id)
      .onSnapshot(snapshot => {
        const data: Array<NotificationDataFirebaseDB> = snapshot.get('notifications');
        console.log('uuuuu', data)
        setNotificationsData(data);
      });
    return () => unsubscribe();
   },[id]);

  return (
    <View
      style={styles.container}
      >
      <View style={styles.box}>
        <View>
          <Text style={styles.heading}> Notifications </Text>
          <Text style={styles.text}>{`${
              notificationsData?.filter(val => val.isUnread === true).length
            } unread Notifications`}</Text>
        </View>
      
      </View>

      <View style={styles.NotiCnt}>
        <FlatList
          data={notificationsData?.slice().reverse()}
          style={styles.list}
          renderItem={({item}) => (
            <CustomNotification
              check={item.isUnread}
              text={item.message}
              time={getTimePassed(item.createdOn.seconds * 1000)}
              userId={item.userId}
            />
          )}
        />
         
      </View>
    </View>
  );
};

export default Notifications;




