import { NativeStackScreenProps } from "@react-navigation/native-stack";


export const NAVIGATION: { LANDING: 'LandingPage', SIGNIN: 'SignIn' , ONBOARDING:'Onboarding' , ADDEMAIL:'AddEmail', ADDPASSWORD:'AddPassword', ADDFINGERPRINT:'AddFingerprint', ADDPROFILE: 'AddProfile', ADDPREFERENCES:'AddPreferences'} = 
{ LANDING: 'LandingPage', SIGNIN: 'SignIn',ONBOARDING:'Onboarding', ADDEMAIL:'AddEmail', ADDPASSWORD:'AddPassword', ADDFINGERPRINT:'AddFingerprint', ADDPROFILE:'AddProfile', ADDPREFERENCES:'AddPreferences'}


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