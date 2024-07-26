import React, {useState} from 'react';
import {Alert, View,Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import { ForgotPasswordProps } from '../../Constants/navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 import {useNetInfo} from '@react-native-community/netinfo';
 import { STRINGS, emailRegex } from '../../Constants/strings';
 import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import CustomInput from '../../Components/CustomInput';
import { EmailValidationError } from '../../Constants/errors';
import { styles } from './style';
import CustomButton from '../../Components/CustomButton';

function testInput(re:RegExp,str:string):boolean{
    return re.test(str)
}
const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
 const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formKey,setFormKey]= useState(false);

  const netInfo = useNetInfo();

  const handleSubmit = async () => {
    if (!netInfo.isConnected) {
      Alert.alert('Network Error', 'Internet connection is disabled');
      return;
    }
    if (email.trim() === '') {
       Alert.alert('Error', "Email address can't be empty");
     }
     if (!testInput(emailRegex,email)) {
  setFormKey(true);
       return;
     }
     setIsLoading(true)
     try {  
        console.log('Attempting to fetch user with email:', email);
        const userDetails = await firestore()
          .collection("users").where('email','==',email).get()
          
          // const usersCollection = firestore().collection('Users');

        console.log('Firestore query snapshot:', userDetails);
    
        if (userDetails.docs.length==0) {
            Alert.alert('Error', 'Email address is not registered with Fitness App.');
          return;
         }
  console.log('ajdjj');
         await auth().sendPasswordResetEmail(email);
         Alert.alert('Reset Email Sent', `A reset email has been sent to ${email}`, [
           { text: 'Ok', onPress: () => navigation.navigate('SignIn') },
         ]);
      } catch (e) {
        console.error('Error sending password reset email:', e);
        Alert.alert('Error', 'An error occurred while sending the reset email. Please try again later.');
      } finally {
        setIsLoading(false);
      }
   };

   return (
    <KeyboardAwareScrollView>
    <View style={styles.parent}>
    <Text style={styles.heading}> Write you email here </Text>
    <CustomInput
                text={STRINGS.EMAIL.PLACEHOLDERTEXT}
                value={email}
                onChangeText={setEmail}
                type="email"
                parentStyle={styles.input}
            />

           <View style={{marginLeft:'13%'}}> 
            <EmailValidationError email={email} formkey={formKey} /> 
            </View> 
        
        
     <CustomButton onPress={handleSubmit} title={STRINGS.BUTTON.TITLE} parentStyle={styles.but}/>
    </View>
    </KeyboardAwareScrollView>
   );
 };

 export default ForgotPassword;