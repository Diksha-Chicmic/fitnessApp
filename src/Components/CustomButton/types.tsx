import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps{

    onPress: () => void,
    title: string,
    colour?: string
    parentStyle?: StyleProp<ViewStyle>;

}