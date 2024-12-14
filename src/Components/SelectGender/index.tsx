import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "../../Constants/commonStyles";
import { styles } from "./style";
interface GenderProps{
    text: string,
    icon: any,
    selected: boolean,
    onPress: () => void
}
const SelectGender:React.FC<GenderProps> = ({
    text,
    icon,
    selected,
    onPress
}) => {

    const handleContainerPress = () => {
        onPress();
    };

    return (
        <TouchableOpacity onPress={handleContainerPress} style={styles.container}>
            <View style={styles.iconTextContainer}>
                <View style={styles.icon}>
                    {icon}
                </View>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    size={18}
                    fillColor={COLORS.PRIMARY.PURPLE}
                    unFillColor={COLORS.PRIMARY.GREY}
                    innerIconStyle={{ borderColor: COLORS.PRIMARY.GREY }}
                    isChecked={selected}
                    onPress={handleContainerPress}
                />
            </View>
        </TouchableOpacity>
    )
}



export default SelectGender;
