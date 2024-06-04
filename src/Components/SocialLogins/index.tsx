import { TouchableOpacity, View } from "react-native";
import { ICONS } from "../../Constants/icons";
import { styles } from "./style";
function SocialLogins() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                {ICONS.Twitter({ width: 18, height: 18 })}
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                {ICONS.Facebook({ width: 18, height: 18 })}
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                {ICONS.Google({ width: 18, height: 18, color: '#4E4BC7' })}
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogins