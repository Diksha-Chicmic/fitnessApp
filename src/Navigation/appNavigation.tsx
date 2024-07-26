import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect,useState } from "react";
import { View,Modal, Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import AuthNavigator from "./authNavigation";
import { useAppSelector, useAppDispatch } from "../Redux/Store";
import Steps from "../Screens/MainScreens/Steps";
import Water from "../Screens/MainScreens/Water";
import Nutrition from "../Screens/MainScreens/Nutrition ";
import Home from "../Screens/MainScreens/Home";
import PostDetails from "../Components/PostDetails";
import { homeStackParamList } from "../Constants/navigation";
import { COLORS } from "../Constants/commonStyles";
import { ICONS } from "../Constants/icons";
import EditProfile from "../Screens/MainScreens/EditProfile";
import ChooseFood from "../Components/AddDishes";
import Feedback from "../Screens/MainScreens/Feeback";
import AboutUs from "../Screens/MainScreens/AboutUs";
import notifee ,{ AndroidImportance }from "@notifee/react-native";
import { updateHealthData,resetHealthData, setModalShown } from "../Redux/Reducers/userHealth";
import { updateUser } from "../Redux/Reducers/currentUser";
import { firebaseDB, storeUserHealthData } from "../utils/userhandle";
import { date } from "../utils/common";
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health'
import { Timestamp } from "@react-native-firebase/firestore";
import firestore from '@react-native-firebase/firestore';
import { getUserData,updateNotificationReadStatus } from "../utils/userhandle";
import ResetPassword from "../Screens/MainScreens/ResetPassword";
import WithModal from "../Components/WithModal";
import GoalAchieved from "../Components/GoalAchieved";
const Stack = createNativeStackNavigator<homeStackParamList>();



const AppNavigator = () => {
  console.log('reruin')
    const [isModalVisible, setModalVisible] = useState(false);
     const [stepsModal,setStepsModal]= useState(false);
    const openModal = () => {
      setModalVisible(true);
    };
    const closeModal = () => {
      setModalVisible(false);
    };
    const openStepsModal=()=>{
      setStepsModal(true)
    }
    const closeStepsModal=()=>{
      setStepsModal(false)
    }
    const {id} = useAppSelector(state => state.User.data);
    const {data:healthData} = useAppSelector(state => state.Health);
    const dispatch = useAppDispatch();
    async function onDisplayNotification(message: string) {
      // Request permissions (required for iOS)
      await notifee.requestPermission();
    
      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        vibration: true,
      });
    
      // Display a notification
      await notifee.displayNotification({
        title: 'Notification',
        body: message,
        android: {
          channelId,
          // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
      });
    }
    if (
      new Date().toDateString() !==
      new Date(healthData.currentDate).toDateString()
    ) {
      storeUserHealthData(healthData, id!);
      dispatch(resetHealthData());
    }
  
    useEffect(() => {
      
      if (Platform.OS === 'ios') {
        const startDate = date.getStartOfDay(new Date()).toISOString(); // Start of the current day
        const endDate = date.today().toISOString();
        AppleHealthKit.getActiveEnergyBurned(
          {
            startDate, // required
            endDate,
            includeManuallyAdded: true, // optional
          },
          (err, results) => {
            if (err || results.length === 0) {
              return;
            }
            dispatch(
              updateHealthData({
                nutrition: results.reduce((acc, val) => acc + val.value, 0),
              }),
            );
          },
        );
      }
    }, [dispatch]);
  
    // effect use
    useEffect(() => {
      if (id) {
        const unsubscribe = firestore()
          .collection(firebaseDB.collections.users)
          .doc(id)
          .onSnapshot((snapshot: { data: () => any; }) => {
            const userData = snapshot.data();
            if (userData) {
              //  updateNotificationReadStatus(
              //   id,
              //  userData.notifications.map(val => {
              //      if (val.isShownViaPushNotification === false) {
              //        getUserData(val.userId).then(uD=> {
              //         console.log(uD, 'udddd')
              //        setTimeout(
              //            onDisplayNotification,
              //          500,
              //            uD.firstName + ' ' + uD.lastName + ' ' + val.message,
              //          );
              //        });
              //       return {
              //          ...val,
              //         isShownViaPushNotification: true,
              //        };
              //     }
              //     return {
              //       ...val,
              //      };
              //    }),
              //  );
              dispatch(
                updateUser({
                  ...userData,
                  healthData: userData.healthData.map((val: { currentDate: { seconds: number; }; }) => ({
                    ...val,
                    // currentDate: Timestamp.fromMillis(
                    //   val.currentDate.seconds * 1000,
                    // )
                    //   .toDate()
                    //   .toISOString(),
                    currentDate: new Date(val.currentDate.seconds * 1000).toISOString(),
                  })),
                  notifications: userData.notifications.map((val: { createdOn: { seconds: number; }; }) => ({
                    ...val,
                    createdOn: Timestamp.fromMillis(val.createdOn.seconds * 1000)
                      .toDate()
                      .toISOString(),
                  })),
                }),
              );
            }
          });
        return () => unsubscribe();
      }
    }, [dispatch, id]);
  
    return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="HomeNavigator"
          screenOptions={{
            headerBackTitle: 'Back',
            headerShadowVisible: false,
            headerShown: true,
            headerTitle: "",
            headerStyle: { backgroundColor: COLORS.PRIMARY.GREY },
          }}
        >
          <Stack.Screen
            name="HomeNavigator"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Nutrition"
            component={Nutrition}
            options={{
              headerRight: () => (
                <TouchableOpacity onPress={openModal}>
                  {ICONS.PLUS({ height: 18, width: 18 })}
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="DailySteps" component={Steps} options={{
            headerRight:()=>(
               <TouchableOpacity onPress={openStepsModal}>
                  {ICONS.PLUS({ height: 18, width: 18 })}
                </TouchableOpacity>
            ),
          }} />
          <Stack.Screen name="WaterIntake" component={Water} />
          <Stack.Screen name="PostDetails" component={PostDetails} />
          <Stack.Screen name="EditProfile" component={EditProfile}/>
          <Stack.Screen name="Feedback" component={Feedback}/>
          <Stack.Screen name="AboutUs" component={AboutUs}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        </Stack.Navigator>
  
        <WithModal
          modalVisible={isModalVisible}

          // animationType="slide"
          setModalFalse={closeModal}
        >
          <ChooseFood setModalFalse={closeModal} />
        </WithModal>
       <WithModal 
       modalVisible={stepsModal}
        setModalFalse={closeStepsModal}>
          <GoalAchieved />
          </WithModal>
        
      </View>
    )
};

export default AppNavigator;


