import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNetInfo} from '@react-native-community/netinfo';
import { authNavigationList, homeStackParamList } from '../../Constants/navigation';
import { useAppSelector } from '../../Redux/Store';
import { styles } from './style';

const CustomDrawerRight: React.FC = () => {
  const {photo,notifications} = useAppSelector(state => state.User.data);
  const {isConnected} = useNetInfo();
  const unreadNotifications = useCallback(() => notifications.filter(val => val.isUnread).length,[notifications]);

  
  const navigation =useNavigation< CompositeNavigationProp<DrawerNavigationProp<authNavigationList>,NativeStackNavigationProp<homeStackParamList>> >();


 const handlePress = () => {
     if (unreadNotifications()) {
      navigation.jumpTo('Notifications');
     } else {
       navigation.navigate('EditProfile');
     }
   };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source ={{uri:photo ?? ''}} style={styles.image}/>
      { <View
        style={[styles.onlineStatus,!isConnected ? styles.offlineStatus : null,]}
      /> }
      {unreadNotifications() ? (
        <View style={styles.notificationCtr}>
          <Text style={styles.notificationText}>{unreadNotifications()}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomDrawerRight;