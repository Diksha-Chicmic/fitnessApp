import { TextInput, View,StyleProp,TextStyle,ViewStyle } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { styles } from "./style";
import React from "react";
import { InputProps } from "./types";

const CustomInput:React.FC<InputProps> = ({
    text,
    icon,
    hasError,
    onChangeText,
    maxLength = 100,
    type,
    value,
    placeholderTextColor= '#B0B1C8',
    parentStyle,
    secureText= false,
    mulitline,
    editable,
    lines
}) => {
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
                numberOfLines={lines}
                editable={editable}
                multiline={mulitline}
                

                
                
            />
        </View>
    )
}

export default CustomInput