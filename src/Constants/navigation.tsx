import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";


export const NAVIGATION: { LANDING: 'LandingPage', SIGNIN: 'SignIn' , ONBOARDING:'Onboarding' , ADDEMAIL:'AddEmail', ADDPASSWORD:'AddPassword', 
ADDFINGERPRINT:'AddFingerprint', ADDPROFILE: 'AddProfile', ADDPREFERENCES:'AddPreferences', ADDINTEREST:'AddInterest', ADDGENDER:'AddGender', READYTOGO:'ReadyToGo',}

 = 
{ LANDING: 'LandingPage', SIGNIN: 'SignIn',ONBOARDING:'Onboarding', ADDEMAIL:'AddEmail', ADDPASSWORD:'AddPassword', ADDFINGERPRINT:'AddFingerprint', 
ADDPROFILE:'AddProfile', ADDPREFERENCES:'AddPreferences', ADDINTEREST:'AddInterest', ADDGENDER:'AddGender',READYTOGO:'ReadyToGo' ,}


export type authNavigationList={
  Home:undefined,
  Notifications: undefined;
  Community: undefined;
  GetPremium: undefined;
  Settings: undefined;
  LogOut: undefined;

}
export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<homeStackParamList>,
  DrawerScreenProps<authNavigationList, "Home">
>;
export type NotificationProps = CompositeScreenProps<
  NativeStackScreenProps<homeStackParamList>,
  DrawerScreenProps<authNavigationList, "Notifications">
>;

export type CommunityProps = CompositeScreenProps<
NativeStackScreenProps<homeStackParamList>,
DrawerScreenProps<authNavigationList,"Community">
>;

export type GetPremiumProps = CompositeScreenProps<
NativeStackScreenProps<homeStackParamList>,
DrawerScreenProps<authNavigationList,"GetPremium">>

export type SettingProps = CompositeScreenProps<
NativeStackScreenProps<homeStackParamList>,
DrawerScreenProps<authNavigationList,"Settings">>

export type LogOutProps= CompositeScreenProps<
NativeStackScreenProps<homeStackParamList>,
DrawerScreenProps<authNavigationList,"LogOut">
>

export type rootStackParamList = {
    Onboarding: undefined;
  };
  export type OnboardingScreenProps = NativeStackScreenProps<
  rootStackParamList,
  "Onboarding"
>;

export type onboardingStackParamList = {
    LandingPage: undefined;
    SignIn: undefined;
    AddEmail:undefined
    AddPassword:undefined
    AddFingerprint:undefined
    AddProfile:undefined
    AddPreferences:undefined
    AddInterest:undefined
    AddGender:undefined
    ReadyToGo:undefined
};
export type LandingPageProps = NativeStackScreenProps<
onboardingStackParamList,
"LandingPage"
>;
export type SignInProps = NativeStackScreenProps<
  onboardingStackParamList,
  "SignIn"
>;

export type ADDEMAILInProps= NativeStackScreenProps<
onboardingStackParamList,
"AddEmail">

export type AddPasswordProps= NativeStackScreenProps<
onboardingStackParamList,
"AddPassword">

export type AddFingerprintProps= NativeStackScreenProps<
onboardingStackParamList,
"AddFingerprint">

export type AddProfileProps=NativeStackScreenProps<
onboardingStackParamList,
"AddProfile">

export type AddPrefencesProps= NativeStackScreenProps<
onboardingStackParamList,
"AddPreferences">

export type AddInterestProps= NativeStackScreenProps<
onboardingStackParamList,
"AddInterest">

export type AddGenderProps= NativeStackScreenProps<
onboardingStackParamList,
"AddGender">

export type ReadyToGoProps=NativeStackScreenProps<
onboardingStackParamList,
"ReadyToGo">

export type homeStackParamList = {
  HomeNavigator: undefined;
  Nutrition: undefined;
  WaterIntake: undefined;
  DailySteps: undefined;
  PostScreen: { postId: string };
};
export type NutritionProps = NativeStackScreenProps<
  homeStackParamList,
  "Nutrition"
>;
export type HomeNavigatorProps = NativeStackScreenProps<
  homeStackParamList,
  "HomeNavigator"
>;
export type WaterIntakeProps = NativeStackScreenProps<
  homeStackParamList,
  "WaterIntake"
>;
export type DailyStepsProps = NativeStackScreenProps<
  homeStackParamList,
  "DailySteps"
>;
export type PostScreenProps = NativeStackScreenProps<
  homeStackParamList,
  "PostScreen"
>;