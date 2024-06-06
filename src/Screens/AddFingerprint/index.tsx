import { View,Text, TouchableOpacity } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { styles } from "./style";
import { AddFingerprintProps,NAVIGATION } from "../../Constants/navigation";
function AddFingerprint({navigation}:AddFingerprintProps){
    function handleClick(){
        console.log('rggth')
        navigation.navigate(NAVIGATION.ADDPROFILE)
    }
    return(
        <View>
       <Text style={styles.heading}>Enable Fingerprint</Text>
       <Text style={styles.text}>if you enable touch ID, you don't need to enter your password when you login </Text>
       <CustomButton title='Continue' onPress={handleClick}/>
       <TouchableOpacity>
        <Text style={styles.text2}>Not Now</Text>

       </TouchableOpacity>
       </View>
    )
}
export default AddFingerprint