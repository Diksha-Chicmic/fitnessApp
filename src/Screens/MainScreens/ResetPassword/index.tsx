import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import { ResetScreenProps } from '../../../Constants/navigation';
import { useAppSelector } from '../../../Redux/Store';
import auth from '@react-native-firebase/auth';
import {useNetInfo} from '@react-native-community/netinfo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { isValidPassword } from '../../../utils/passValidity';
import { styles } from './style';

const ResetPassword: React.FC<ResetScreenProps> = ({navigation}) => {
   const [password, setPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const netInfo = useNetInfo();


  const {email} = useAppSelector(state => state.User.data);


   const handleSubmit = async () => {
     if (!netInfo.isConnected) {
      Alert.alert('Network Error', 'Internet connection is disabled');
       return;
     }
    if (password === '') {
       Alert.alert('Error', "Password can't be empty");
       return;
     }
     if (newPassword === '') {
       Alert.alert('Error', "New password can't be empty");
       return;
     }
     if (newPassword === password) {
       Alert.alert(
         'Error',
         'Entered new password is the same as the current password',
      );
       return;
     }
     if (!isValidPassword.checkAll(newPassword)) {
       Alert.alert(
         'Error',
         'Invalid new password entered make sure entered password includes 1 Capital character , 1 digit and the password is 8 characters long',
       );
       return;
     }
     setIsLoading(true);
     const user = auth().currentUser;

    const credential = auth.EmailAuthProvider.credential(email, password);
     if (user) {
      user
         .reauthenticateWithCredential(credential)
         .then(() => {
          // User re-authenticated.
         console.log('user authenticated');
          user
            .updatePassword(newPassword)
            .then(() => {
              Alert.alert('Success', 'Password changed successfully');
               navigation.goBack();
             })
            .catch(e => {
              console.log('error updating the password', e);
            });
        })
         .catch(error => {
           // An error happened.
           console.log('error', error);
           Alert.alert('Error', 'Wrong password entered');
         });
     }

     setIsLoading(false);
   };

  return (
    <KeyboardAwareScrollView style={styles.container}>
   
        <Text style={styles.heading}>Reset Password</Text>
        <View style={styles.box}>
        <CustomInput text='Enter Current Password' onChangeText={setPassword} value= {password} type='name' parentStyle={styles.input}/>
        <CustomInput text='Enter New Password' onChangeText={setNewPassword} value= {newPassword} type='name'parentStyle={styles.input}/>
        <CustomButton title='Continue' onPress={handleSubmit} parentStyle={styles.but}/>
        </View>
    </KeyboardAwareScrollView>
  );
 };

export default ResetPassword;