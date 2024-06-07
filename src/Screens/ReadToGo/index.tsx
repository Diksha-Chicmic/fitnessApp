import { Text,View ,TouchableOpacity} from "react-native";
import { ICONS } from "../../Constants/icons";
import { STRINGS } from "../../Constants/strings";
import { NAVIGATION,ReadyToGoProps } from "../../Constants/navigation";
import { styles } from "./style";
import LandingPage from "../LandingPage";

const iconStyle={
    width:35,
    height:35,
    color:'white'
}
const ReadyToGo=({navigation}:ReadyToGoProps)=>{
    const handlePress=()=>{
        console.log('Details Completed');
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                {ICONS.Logo(iconStyle)}
            </View>
            <Text style={styles.heading}>{STRINGS.LAST.HEADING}</Text>
            <Text style={styles.text}>{STRINGS.LAST.TEXT} </Text>
            <TouchableOpacity onPress={handlePress}>
            <View style={styles.Arrow}>{ICONS.RIGHTARROW(iconStyle)}</View>
            </TouchableOpacity>
        </View>
    )
}

export default ReadyToGo