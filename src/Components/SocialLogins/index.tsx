import { TouchableOpacity, View } from "react-native";
import { ICONS } from "../../Constants/icons";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { styles } from "./style";
GoogleSignin.configure({
    webClientId: '578521058439-uo2jo7e2juttoh89dm93pd0fom1nrfhj.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
    // Get the user's ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
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
            <TouchableOpacity style={styles.item} onPress={onGoogleButtonPress}>
                {ICONS.Google({ width: 18, height: 18, color: '#4E4BC7' })}
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogins