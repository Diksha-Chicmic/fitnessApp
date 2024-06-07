import { TouchableOpacity, View } from "react-native";
import { ICONS } from "../../Constants/icons";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { styles } from "./style";
GoogleSignin.configure({
    webClientId: '578521058439-uo2jo7e2juttoh89dm93pd0fom1nrfhj.apps.googleusercontent.com',
});
const signInWithGoogle = async () => {
    try {
      // Sign in with Google
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);
     // navigation.navigate('setPins',{email})
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