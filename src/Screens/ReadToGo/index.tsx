import { Text,View ,TouchableOpacity} from "react-native";
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { ICONS } from "../../Constants/icons";
import { STRINGS } from "../../Constants/strings";
import { NAVIGATION,ReadyToGoProps } from "../../Constants/navigation";
import { styles } from "./style";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { createUser, storeUserData, sendNotification} from "../../utils/userhandle";
import storage from "@react-native-firebase/storage";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { resetHealthData } from "../../Redux/Reducers/userHealth";
import { resetMealData } from "../../Redux/Reducers/dishes";

const iconStyle={
    width:35,
    height:35,
    color:'white'
}
const ReadyToGo=({navigation}:ReadyToGoProps)=>{
    const { data: { password, ...user }, } = useAppSelector((state) => state.User);
    const dispatch = useAppDispatch();
    console.log(user);
    const handlePress = async () => {
        try {
          if (user.email !== null && password !== "") {
            dispatch(resetMealData())
            const userCredentials = await createUser(user.email, password);
            console.log(userCredentials, 'user Credentails');
             dispatch(resetHealthData())
            const reference = storage().ref(
              "media/" + userCredentials?.user.uid + "/" + "photo"
            );
            console.log(reference, 'reference ');
      
            await reference.putFile(user.photo!);
      
            const url = await storage().ref(
              "media/" + userCredentials?.user.uid + "/" + "photo"
            ).getDownloadURL();
            console.log(url, "the url is ");
      
            dispatch(updateUser({ photo: url }));
      
            if (userCredentials !== undefined) {
              user.id = userCredentials.user.uid;
              user.photo=url;
              user.healthData=[];
              user.notifications=[];
              
              
              await storeUserData(user, userCredentials);
              await sendNotification({
                message:'You have successfully registered on a FitnessApp!',
                userId:'App',
                isUnread: true,
                isShownViaPushNotification: false,
              }, userCredentials.user.uid)
              console.log(user, ' user details ')
            }
          }
        } catch (e) {
          console.log('error', e);
        }
      };
    
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

