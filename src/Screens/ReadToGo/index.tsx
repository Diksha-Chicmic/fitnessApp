import { Text,View ,TouchableOpacity} from "react-native";
import { ICONS } from "../../Constants/icons";
import { STRINGS } from "../../Constants/strings";
import { NAVIGATION,ReadyToGoProps } from "../../Constants/navigation";
import { styles } from "./style";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";;
import { createUser, storeUserData } from "../../utils/userhandle";
import storage from "@react-native-firebase/storage";

const iconStyle={
    width:35,
    height:35,
    color:'white'
}
const ReadyToGo=({navigation}:ReadyToGoProps)=>{
    const { data: { password, ...user }, } = useAppSelector((state) => state.User);
    console.log(user);
    const dispatch = useAppDispatch();
    const handlePress=()=>{
        async () => {
                if (user.email !== null && password !== "") {
                  const userCredentials = await createUser(user.email, password);
            
                  const reference = storage().ref(
                    "media/" + userCredentials?.user.uid + "/" + "photo"
                  );

                  await reference.putFile(user.photo!);
      const url = await reference.getDownloadURL();
      console.log("the url is -", url);
      dispatch(updateUser({ photo: url }));
      if (userCredentials !== undefined) {
        user.id = userCredentials.user.uid;
        storeUserData(user, userCredentials);
      }
    }
  };
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

// const {
//     data: { password, ...user },
//   } = useAppSelector((state) => state.User);
//   const dispatch = useAppDispatch();
//   const handleSubmit = async () => {
//     if (user.email !== null && password !== "") {
//       const userCredentials = await createUser(user.email, password);

//       const reference = storage().ref(
//         "media/" + userCredentials?.user.uid + "/" + "photo"
//       );

//       await reference.putFile(user.photo!);
//       const url = await reference.getDownloadURL();
//       console.log("the url is -", url);
//       dispatch(updateUserData({ photo: url }));
//       if (userCredentials !== undefined) {
//         user.id = userCredentials.user.uid;
//         storeUserData(user, userCredentials);
//       }
//     }
//   };