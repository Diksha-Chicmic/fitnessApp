import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useEffect} from "react";
import notifee ,{ AndroidImportance }from "@notifee/react-native";
import { COLORS, SIZES } from "../../../Constants/commonStyles";
import CustomNotification from "../../../Components/CustomNotifications";
const App = () => {
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
    <View style={{flex:1,backgroundColor:COLORS.PRIMARY.DIMGREY}}>
       <Text style={styles.heading}>Notifications</Text>
       <CustomNotification/>
       <CustomNotification/>
  </View>
  );
};

export default App;

const styles = StyleSheet.create({
  heading:{
    fontSize:SIZES.font24,
    fontWeight:'bold',
    marginLeft:'5%',
    marginVertical:'10%',
  
  },
});