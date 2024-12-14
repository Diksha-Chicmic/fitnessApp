import React, { useState } from "react";
import { Text, View,Alert, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth';
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { EmailValidationError } from "../../Constants/errors";
import { NAVIGATION, FirstNameProps } from "../../Constants/navigation";
import { STRINGS } from "../../Constants/strings";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { styles } from "./style";

const AddFirstName = ({navigation}:FirstNameProps) => {
    const [name, setName] = useState<string>('');
    const [form, setForm] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        setForm(true);
        if (!name.trim()) {
           Alert.alert('Please select a gender to continue.');
            setName(' ');
        } else {
            console.log('Form submitted');
            dispatch(updateUser({ firstName:name }));
            navigation.navigate(NAVIGATION.ADDLASTNAME);
        }
    }

    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.heading}>Write your first name</Text>
            <CustomInput
                text='First Name'
                value={name}
                onChangeText={setName}
                type="email"
                parentStyle={styles.input}
            />
            </View>
            <CustomButton onPress={handleSubmit} title={STRINGS.BUTTON.TITLE} />
        </View>
    )
}



export default AddFirstName;
