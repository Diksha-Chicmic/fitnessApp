import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { EmailValidationError } from "../../Constants/errors";
import { NAVIGATION, ADDEMAILInProps } from "../../Constants/navigation";
import styles from "./style";

const AddEmail = ({navigation}:ADDEMAILInProps) => {
    const [email, setEmail] = useState<string>('');
    const [form, setForm] = useState<boolean>(false);

    const handleSubmit = () => {
        setForm(true);
        if (!email.trim()) {
            // Email is empty or only contains spaces
            setEmail(' '); // This will trigger the empty email validation in EmailValidationError component
        } else {
            console.log('Form submitted');
            navigation.navigate(NAVIGATION.ADDPASSWORD);
        }
    }

    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.heading}>What is your Email address?</Text>
            <CustomInput
                text="Enter your email address"
                value={email}
                onChangeText={setEmail}
                type="email"
                parentStyle={styles.input}
            />
            <EmailValidationError email={email} formkey={form} />
            </View>
            <CustomButton onPress={handleSubmit} title="Continue" parentStyle={styles.but}/>
        </View>
    )
}



export default AddEmail;
