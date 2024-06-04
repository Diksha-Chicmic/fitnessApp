import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { IMAGES } from "../../Constants/images";
import { styles } from "./style";
import { LandingPageProps, NAVIGATION } from "../../Constants/navigation";


function LandingPage({ navigation }: LandingPageProps) {
    const moveToSignIn = () => {
        navigation.navigate(NAVIGATION.SIGNIN)
    }
    const moveToEmail=()=>{
        navigation.navigate(NAVIGATION.ADDEMAIL)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.heading}> Welcome to Fitness App</Text>
                <Text style={styles.text}> The best UI kit for your next health and fitness project</Text>
                <Image source={IMAGES.LANDING_PAGE} style={styles.image} />
                <CustomButton title="Get Started" onPress={moveToEmail} />
                <TouchableOpacity onPress={moveToSignIn} >
                <Text style={styles.text1}>Already have an account? 
                <Text style={styles.text2}>Sign in</Text>
                </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LandingPage