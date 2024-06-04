import { Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";
import { useState } from "react";
import { PassValidationError ,PassEmptyError} from "../../Constants/errors";
import { isValidPassword } from "../../utils/passValidity";
import PassInputCheck from "../../Components/PassValidation";
import { AddPasswordProps, NAVIGATION } from "../../Constants/navigation";
import styles from "./style";
function AddPassword({navigation}:AddPasswordProps) {
    const [password, setPassword] = useState<string>('')
    const [form,setForm]= useState<boolean>(false)
    const handleClick = () => {
        setForm(true);

        if (!password.trim()) {
            // Password is empty or only contains spaces
            setPassword(' '); // This will trigger the empty password validation in PassEmptyError component
        } else if (isValidPassword.checkAll(password)) {
            navigation.navigate(NAVIGATION.ADDFINGERPRINT)
            console.log('password is okie');
        }
    };
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.heading}>Now let's set up your password</Text>
            <CustomInput text="password" value={password} type="name" onChangeText={setPassword} parentStyle={styles.input} secureText={true}/>
            <PassEmptyError pass={password} formKey={form}></PassEmptyError>
        </View>
            <PassInputCheck
                length={isValidPassword.lengthCheck(password)}
                uppercase={isValidPassword.caseCheck(password)}
                number={isValidPassword.numberCheck(password)} 
                />
            <CustomButton title="Continue" onPress={handleClick} />


    
        </View>
    )
}


export default AddPassword