import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { EmailValidationError } from "../../Constants/errors";
import { NAVIGATION, ADDEMAILInProps } from "../../Constants/navigation";
import { STRINGS } from "../../Constants/strings";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { styles } from "./style";

const AddEmail = ({navigation}:ADDEMAILInProps) => {
    const [email, setEmail] = useState<string>('');
    const [form, setForm] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        setForm(true);
        if (!email.trim()) {
            // Email is empty or only contains spaces
            setEmail(' '); // This will trigger the empty email validation in EmailValidationError component
        } else {
            console.log('Form submitted');
            dispatch(updateUser({ email:email }));
            navigation.navigate(NAVIGATION.ADDPASSWORD);
        }
    }

    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.heading}>{STRINGS.EMAIL.HEADING}</Text>
            <CustomInput
                text={STRINGS.EMAIL.PLACEHOLDERTEXT}
                value={email}
                onChangeText={setEmail}
                type="email"
                parentStyle={styles.input}
            />
            <EmailValidationError email={email} formkey={form} />
            </View>
            <CustomButton onPress={handleSubmit} title={STRINGS.BUTTON.TITLE} />
        </View>
    )
}



export default AddEmail;
