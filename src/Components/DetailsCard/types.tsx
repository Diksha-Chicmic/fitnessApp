import { StyleProp,TextStyle,ViewStyle } from "react-native"

export interface detailsProps{
    calNum:number,
    goalNum:number,
    calText:string,
    goalText:string,
    text?:string
    textStyles?:StyleProp<TextStyle>
}