import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, Text, TouchableOpacity } from 'react-native';
import firestore, { Timestamp } from '@react-native-firebase/firestore';
import CustomNotification from '../../../Components/CustomNotifications';
import { firebaseDB, NotificationDataFirebaseDB, updateNotificationReadStatus, } from '../../../utils/userhandle';
import { useAppSelector } from '../../../Redux/Store';
import { getTimePassed } from '../../../utils/common';
import { styles } from './style';
const Notifications: React.FC = () => {

  const [notificationsData, setNotificationsData] = useState<Array<NotificationDataFirebaseDB>>();
  const [showMenu, setShowMenu] = useState(false);
  const { id } = useAppSelector(state => state.User.data);
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
  }, [id]);


  const markAllRead = () => {
    if (notificationsData) {
      updateNotificationReadStatus(
        id!,
        notificationsData?.map(val => ({ ...val, isUnread: false })),
      );
    }
    setShowMenu(false);
  };

  const markAllUnread = () => {
    if (notificationsData) {
      updateNotificationReadStatus(
        id!,
        notificationsData.map(val => ({ ...val, isUnread: true })),
      );
    }
    setShowMenu(false);
  };

  const clearAllNotifications = () => {
    updateNotificationReadStatus(id!, []);
    setShowMenu(false);
  };
  const handleDeleteNotification = (createdOn: Timestamp) => {
    updateNotificationReadStatus(
      id!,
      notificationsData!.filter(
        val => createdOn.seconds * 1000 !== val.createdOn.seconds * 1000,
      ),
    );
  };
  return (

    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={1}
      disabled={!showMenu}
      onPress={() => setShowMenu(false)}>
      <View style={styles.container}>
        <View style={styles.menuCtr}>
          {showMenu ? (
            <View style={styles.activeMenuCtr}>
              <Pressable onPress={markAllRead} style={styles.menuTextCtr}>
                <Text style={styles.menuText}>Mark all as read</Text>
              </Pressable>
              <Pressable onPress={markAllUnread} style={styles.menuTextCtr}>
                <Text style={styles.menuText}>Mark all as unread</Text>
              </Pressable>
              <Pressable
                onPress={clearAllNotifications}
                style={styles.menuTextCtrLast}>
                <Text style={styles.menuText}>Clear all</Text>
              </Pressable>
            </View>
          ) : null}
                 <View style={styles.box}>
            <View>
              <Text style={styles.heading}> Notifications </Text>
              <Text style={styles.text}>{`${notificationsData?.filter(val => val.isUnread === true).length
                } unread Notifications`}</Text>
            </View>

          </View>
          {notificationsData?.length ? (
            <Pressable
              onPress={() => setShowMenu(!showMenu)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <View style={styles.dots} />
              <View style={styles.dots} />
              <View style={styles.dots} />
            </Pressable>
          ) : null}
        </View>

        <View style={styles.notificationsCtr}>
          {notificationsData?.length ? (
            <FlatList
              scrollEnabled
              data={notificationsData?.slice().reverse()}
              style={styles.flatList}
              renderItem={({ item }) => (
                <CustomNotification
                key={item.createdOn.toString()}
                check={item.isUnread}
                text={item.message}
                time={getTimePassed(item.createdOn.seconds * 1000)}
                userId={item.userId}
                handleDeletePressed={()=>
                handleDeleteNotification(item.createdOn)}
              />
              )}
            />
          ) : (
            <View style={styles.noNotificationTextCtr}>
              <Text>NO NOTIFICATIONS</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Notifications;