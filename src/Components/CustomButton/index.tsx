import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./style";
function CustomButton({
    onPress,
    title,
    colour,
    parentStyle

}: Readonly<{
    onPress: () => void,
    title: string,
    colour?: string
    parentStyle?: StyleProp<ViewStyle>;
}>) {

    return (
        <View style={[styles.container, parentStyle]}>
            <TouchableOpacity onPress={onPress} style={[styles.btn, parentStyle]}>
                <View style={parentStyle}>
                    <Text style={[styles.text]}>{title}</Text>
                </View>

            </TouchableOpacity>
        </View>

    )

}
export default CustomButton;