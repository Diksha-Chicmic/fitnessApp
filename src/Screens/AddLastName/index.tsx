import React, { useState } from "react";
import { Text, View,Alert, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth';
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { EmailValidationError } from "../../Constants/errors";
import { NAVIGATION, LastNameProps } from "../../Constants/navigation";
import { STRINGS } from "../../Constants/strings";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { styles } from "./style";

const AddLastName = ({navigation}:LastNameProps) => {
    const [lname, setLname] = useState<string>('');
    const [form, setForm] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        setForm(true);
        if (!lname.trim()) {
           Alert.alert('Please select a gender to continue.');
            setLname(' ');
        } else {
            console.log('Form submitted');
            dispatch(updateUser({ lastName:lname }));
            navigation.navigate(NAVIGATION.ADDEMAIL);
        }
    }

    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.heading}>Write your last name</Text>
            <CustomInput
                text='Last Name'
                value={lname}
                onChangeText={setLname}
                type="name"
                parentStyle={styles.input}
            />
            </View>
            <CustomButton onPress={handleSubmit} title={STRINGS.BUTTON.TITLE} />
        </View>
    )
}



export default AddLastName;
