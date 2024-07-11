import { StyleProp,ViewStyle } from "react-native"

export interface InputProps{
    text: string,
    icon?: any,
    hasError?: boolean,
    onChangeText: (text: string) => void,
    maxLength?: number,
    type: 'name' | 'email',
    value?: string
    placeholderTextColor?: string,
    parentStyle?:StyleProp<ViewStyle>,
    secureText?:boolean,
    editable?:boolean,
    mulitline?:boolean,
    lines?:number
    
}