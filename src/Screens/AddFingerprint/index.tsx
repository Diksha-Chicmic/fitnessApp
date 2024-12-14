import React,{useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { AddFingerprintProps, NAVIGATION } from "../../Constants/navigation";
import { ICONS } from "../../Constants/icons";
import { STRINGS } from "../../Constants/strings";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser"
import { styles } from "./style";

const iconStyle = {
    width: 75,
    height: 75,
};

function AddFingerprint({ navigation }: AddFingerprintProps) {
   // const [fingerprint,setFingerPrint]= useState<boolean>(false)
   // const dispatch= useAppDispatch()
    function handleClick() {
        console.log('rggth');
       // dispatch(updateUser({finger}))
        navigation.navigate(NAVIGATION.ADDPROFILE);
    }

    return (
        <View>
            <View style={styles.iconContainer}>{ICONS.FINGERPRINT(iconStyle)}</View>
            <Text style={styles.heading}>{STRINGS.FINGERPRINT.HEADING}</Text>
            <Text style={styles.text}>{STRINGS.FINGERPRINT.TEXT}</Text>
            <CustomButton title={STRINGS.BUTTON.TITLE} onPress={handleClick} />
            <TouchableOpacity>
                <Text style={styles.text2}>{STRINGS.FINGERPRINT.TEXT2}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddFingerprint;
