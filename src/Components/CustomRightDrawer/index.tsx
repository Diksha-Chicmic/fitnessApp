import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//import {useNetInfo} from '@react-native-community/netinfo';
//import CustomImage from '../CustomImage';
import { authNavigationList, homeStackParamList } from '../../Constants/navigation';
import { useAppSelector } from '../../Redux/Store';
import { styles } from './style';

const CustomDrawerRight: React.FC = () => {
  // state use
  const {photo} = useAppSelector(state => state.User.data);

  // net info
 // const {isConnected} = useNetInfo();

  // redux use
//  const {notifications} = useAppSelector(state => state.User.data);
//  const unreadNotifications = useCallback(
 //   () => notifications.filter(val => val.isUnread).length,
  //  [notifications],
  //);

  // navigation use
  const navigation =useNavigation< CompositeNavigationProp<DrawerNavigationProp<authNavigationList>,NativeStackNavigationProp<homeStackParamList>> >();

  // functions
//   const handlePress = () => {
//     if (unreadNotifications()) {
//       navigation.jumpTo('Notifications');
//     } else {
//       navigation.navigate('EditProfile');
//     }
//   };
  return (
    <TouchableOpacity style={styles.parent} >
      {/* <CustomImage source={{uri: photo ?? ''}} imageStyle={styles.image} /> */}
      {/* <View
        style={[
          styles.onlineStatus,
          !isConnected ? styles.onlineStatusNoInternet : null,
        ]}
      />
      {unreadNotifications() ? (
        <View style={styles.notificationCtr}>
          <Text style={styles.notificationText}>{unreadNotifications()}</Text>
        </View>
      ) : null} */}
    </TouchableOpacity>
  );
};

export default CustomDrawerRight;