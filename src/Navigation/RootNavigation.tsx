import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health'
import { PERMISSIONS, check, request } from "react-native-permissions";
import GoogleFit, { Scopes } from 'react-native-google-fit'
import FirstNav from "./landing";
import AppNavigator from "./appNavigation";
import { date } from "../utils/common";
import { User } from "../Defs/user";
import { Platform } from "react-native";
import { useAppDispatch } from "../Redux/Store";
import { updateHealthData } from "../Redux/Reducers/userHealth";


// ios permissions 
const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.HeartRate,
    AppleHealthKit.Constants.Permissions.Steps,
    AppleHealthKit.Constants.Permissions.ActiveEnergyBurned],

    write: [],
  },
} as HealthKitPermissions

// android permissions
const options = {
  scopes: [Scopes.FITNESS_ACTIVITY_READ, Scopes.FITNESS_ACTIVITY_WRITE],
};






const RootNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const dispatch= useAppDispatch();

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  
const androidHealthSetup = async () => {
  try {
    const authority = await check(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION);
    if (authority === "denied") {
      await request(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION);
      console.log('auhtority denied')
    }
    console.log('accepted')
    if (!GoogleFit.isAuthorized) {
      await GoogleFit.authorize(options);
      console.log('not authorised')
      dispatch(updateHealthData({ hasPremission: true })); // check for if user denies the permissions later in settings
    }
    const today = date.today();
    const stepRes = await GoogleFit.getDailySteps(today);
    const startDate = date.getStartOfDay(today);
    const opt = {
      startDate: startDate.toISOString(), 
      endDate: today.toISOString(), 
    };
    const calories = await GoogleFit.getDailyCalorieSamples(opt);
    dispatch(updateHealthData({ nutrition: ~~calories[0].calorie}));
    dispatch(
      updateHealthData({
        totalSteps: stepRes.filter(
          (val) => val.source === "com.google.android.gms:estimated_steps"
        )[0].steps[0].value,
      })
    );
    console.log(stepRes)
    console.log(calories)
  } catch (e) {
    console.log("Error encountered - ", e);
  }
};
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    if(Platform.OS !== "ios"){
       androidHealthSetup();
    }else{
      AppleHealthKit.initHealthKit(permissions, (err) => {
        if (err) {
          console.log('[ERROR] Cannot grant permissions!')
          return;
        }
        console.log('done permisiion ')
        dispatch(updateHealthData({ hasPremission: true }));
        AppleHealthKit.getStepCount({}, (error, result) => {
          if (!error) {
            dispatch(updateHealthData({ totalSteps: result.value }));
            console.log(result.value,'result')
            return;
          }
          console.log("error encountered while getting steps data - ", error);
        });
      });
    }
    return subscriber; 
  }, []);

  if (initializing) return null; 
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      {/* <FirstNav/> */}
      {user ? <FirstNav/> : < AppNavigator/>}
    </NavigationContainer>
  );
};

export default RootNavigator;




