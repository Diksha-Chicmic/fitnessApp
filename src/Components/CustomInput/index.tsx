import { TextInput, View,StyleProp,TextStyle,ViewStyle } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { styles } from "./style";
const CustomInput = ({
    text,
    icon,
    hasError,
    onChangeText,
    maxLength = 100,
    type,
    value,
    placeholderTextColor= '#B0B1C8',
    parentStyle,
    secureText= false
}: Readonly<{
    text: string,
    icon?: any,
    hasError?: boolean,
    onChangeText: (text: string) => void,
    maxLength?: number,
    type: 'name' | 'email',
    value: string
    placeholderTextColor?: string,
    parentStyle?:StyleProp<ViewStyle>,
    secureText?:boolean
}>) => {
    return (
        <View style={[styles.container,parentStyle]}>
            {icon ? (
                <View style={styles.icon}>{icon}</View>
            ) : null}
            <TextInput
                style={styles.textInput}
                placeholder={text}
                placeholderTextColor={placeholderTextColor}
                keyboardType={type === 'name' ? 'default' : 'email-address'}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                autoCapitalize={type === 'name' ? 'words' : 'none'}
                maxLength={maxLength}
                secureTextEntry={secureText}
                
            />
        </View>
    )
}

export default CustomInput