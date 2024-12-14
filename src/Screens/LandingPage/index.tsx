import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { IMAGES } from "../../Constants/images";
import { LandingPageProps, NAVIGATION } from "../../Constants/navigation";
import { STRINGS } from "../../Constants/strings";
import { styles } from "./style";



function LandingPage({ navigation }: LandingPageProps) {
    const moveToSignIn = () => {
        navigation.navigate(NAVIGATION.SIGNIN)
    }
    const moveToEmail=()=>{
        navigation.navigate(NAVIGATION.ADDFIRSTNAME)
    }
    return (
        <SafeAreaView>
            
                <Text style={styles.heading}> {STRINGS.LANDING.HEADING}</Text>
                <Text style={styles.text}>{STRINGS.LANDING.TEXT}</Text>
                <Image source={IMAGES.LANDING_PAGE} style={styles.image} />
                <CustomButton title="Get Started" onPress={moveToEmail} />
                <TouchableOpacity onPress={moveToSignIn} >
                <Text style={styles.text1}>{STRINGS.LANDING.TEXT2}
                <Text style={styles.text2}>{STRINGS.LANDING.TEXT3}</Text>
                </Text>
                </TouchableOpacity>
    
        </SafeAreaView>
    )
}
export default LandingPage