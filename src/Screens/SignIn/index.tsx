import React, { useState } from "react";
import { View, SafeAreaView, Text,Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { FirestoreError } from "@react-native-firebase/firestore";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";
import { ICONS } from "../../Constants/icons";
import SocialLogins from "../../Components/SocialLogins";
import { STRINGS } from "../../Constants/strings";
import { EmailValidationError,PassEmptyError } from "../../Constants/errors";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { getUserData } from "../../utils/userhandle";
import { SignInProps } from "../../Constants/navigation";
import { styles } from "./styles";
import { User } from "../../Defs/user";

function SignIn({navigation}:SignInProps) {
   
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [form,setForm]= useState<boolean>(false)
    const dispatch = useAppDispatch()

   async function handlePress() {
        setForm(true);

        if (!email.trim() || !password.trim()) {
        
            // Email or password is empty
            setEmail(' ')
            setPassword(' ')
        } else {
            const creds=  await auth().signInWithEmailAndPassword(email,password)
            const user=  await getUserData(creds.user.uid);
            console.log(user)
            if(user){
                dispatch(updateUser(user));
            }else{
                throw Error('unvalid user')
            }
            
        }
    }
    

    
    return (
    
        <SafeAreaView style={styles.conatiner}>
            <CustomInput
                text='EMAIL'
                icon={ICONS.User({ width: 18, height: 18 })}
                value={email}
                type="email"
                onChangeText={setEmail}
            />
            <EmailValidationError email={email} formkey={form}/> 
            
            <CustomInput
                text='PASSWORD'
                icon={ICONS.Lock({ width: 18, height: 18 })}
                value={password}
                type="name"
                onChangeText={setPassword}
            />
            <PassEmptyError pass={password} formKey={form}/>
            <Text style={[styles.text, styles.customButtonParent]}>{STRINGS.SIGNIN.TEXT}</Text>
            <SocialLogins />
            <CustomButton title='Continue' onPress={handlePress} />
        </SafeAreaView>
    )
}

export default SignIn;




    