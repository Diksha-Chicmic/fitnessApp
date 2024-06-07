import { TouchableOpacity, View } from "react-native";
import { ICONS } from "../../Constants/icons";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { styles } from "./style";


const signInWithGoogle = async () => {
    try {
      // Sign in with Google
      const res=await GoogleSignin.hasPlayServices();
      console.log(res,'res');
      
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo,'user info ')
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);
     // navigation.navigate()
      console.log('Signed in with Google successfully');
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
}

function SocialLogins() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                {ICONS.Twitter({ width: 18, height: 18 })}
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                {ICONS.Facebook({ width: 18, height: 18 })}
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={signInWithGoogle}>
                {ICONS.Google({ width: 18, height: 18, color: '#4E4BC7' })}
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogins