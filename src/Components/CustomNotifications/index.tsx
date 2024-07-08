import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useEffect} from "react";
import notifee ,{ AndroidImportance }from "@notifee/react-native";
import { SIZES } from "../../Constants/commonStyles";
import { IMAGES } from "../../Constants/images";

const CustomNotification = () => {
  useEffect(() => {
    async function requestPermissions() {
      await notifee.requestPermission();
    }

    async function createChannel() {
      await notifee.createChannel({
        id: "default",
        name: "Default Channel",
        importance: AndroidImportance.HIGH,
      });
    }

    requestPermissions();
    createChannel();
  }, []);
  async function onTriggerHandler() {
    await notifee.displayNotification({
      id: "1234",
      title: `New notification`,
      body: "here the new notiifcations",
    });
  }

  return (
    <View >
    <View style={styles.container}>
    <View style={styles.row}>
      <Image source={IMAGES.LANDING_PAGE} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          <Text style={{fontWeight:'bold'}}>She </Text>left 2 comments on your post She left 2 comments on your post
        </Text>
        <Text style={styles.timeText}>6 Minutes</Text>
      </View>
    </View>
    
  </View>
  <View style={styles.border}></View>
  </View>
  );
};

export default CustomNotification;

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    padding: '6%',
    marginBottom:'-0.5%'
 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 40, // adjust size as needed
    height: 40, // adjust size as needed
    borderRadius:50,
    bottom:'6.5%'
  },
  textContainer: {
    flex: 1,
    marginHorizontal:'5%',
  },
  mainText: {
    fontSize:SIZES.font13,
    fontWeight:'400'
  },
  timeText: {
    marginTop:'10%',
    color: 'grey',
    fontSize:SIZES.font13
  },
  border:{
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginHorizontal:'5%'
  }
});