// import { Text,View,TouchableOpacity ,StyleSheet} from "react-native";
// import BouncyCheckbox from "react-native-bouncy-checkbox";

// const SelectGender=({
//     text,
//     icon,
//     selected, 
//     onPress
// }:Readonly<{
//     text:string,
//     icon:any,
//     selected:boolean,
//     onPress:()=>void
// }>)=>{
//     return(
//         <TouchableOpacity onPress={onPress} style={styles.container}>

//         <View style={styles.iconContainer}>
//         <View style={styles.checkBox}>
//            <BouncyCheckbox
//           size={22}
//           fillColor='pink'
//           unFillColor='white'
//           innerIconStyle={{ borderColor: 'black',}}
//         //   onPress={toggleCheck}
//         //   isChecked={isSelected}
//         />
//         </View>
//            <View>
//             {icon}
//            </View>
//            <Text style={styles.text}>{text}</Text>
//         </View>
//         </TouchableOpacity>
//     )
// }

// const styles= StyleSheet.create({
//     container:{
//         // flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         flexDirection:'row'
//         //backgroundColor:'white',
        
//     },
//     iconContainer:{
//        backgroundColor:'white',
//        borderRadius:15,
//        paddingHorizontal:18,
//        paddingVertical:18,
//        justifyContent:'center',
//         alignItems:'center',
//         // flexDirection:'row'
//     },
//     checkBox:{
//         //flexDirection:'row',
//         width:10,
//         alignItems:'flex-start',
//         //flex:1,
        
        
    
//     },
//     text:{
//         //paddingHorizontal:10,
//         paddingVertical:10
//         //textAlign:'center'
//     }
// })

// export default SelectGender
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// const SelectGender = ({
//     text,
//     icon,
//     selected,
//     onPress
// }: Readonly<{
//     text: string,
//     icon: any,
//     selected: boolean,
//     onPress: () => void
// }>) => {
//     return (
//         <TouchableOpacity onPress={onPress} style={styles.container}>
//             <View style={styles.iconTextContainer}>
//                 <View style={styles.icon}>
//                     {icon}
//                 </View>
//                 <Text style={styles.text}>{text}</Text>
//             </View>
//             <View style={styles.checkboxContainer}>
//                 <BouncyCheckbox
//                     size={18}
//                     fillColor='pink'
//                     unFillColor='white'
//                     innerIconStyle={{ borderColor: 'black' }}
//                     // onPress={toggleCheck}
//                     // isChecked={isSelected}
//                 />
//             </View>
//         </TouchableOpacity>
//     )
// }
const SelectGender = ({
    text,
    icon,
    selected,
    onPress
}: Readonly<{
    text: string,
    icon: any,
    selected: boolean,
    onPress: () => void
}>) => {

    const handleContainerPress = () => {
        onPress(); // Call the onPress function to handle the state update
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
                    fillColor='pink'
                    unFillColor='white'
                    innerIconStyle={{ borderColor: 'black' }}
                    isChecked={selected} // Pass the selected state to the checkbox
                  // Disable built-in state management
                    onPress={handleContainerPress} // Handle press on the checkbox as well
                />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'row',
        alignSelf: 'flex-start', 
        shadowColor: 'pink',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.70,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal:13
    },
    iconTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    icon: {
        marginBottom: 10,
    },
    text: {
        textAlign: 'center',
       
        fontWeight:'bold'
    },
    checkboxContainer: {
        position: 'absolute',
        top: 9,
        right: -3,
    },
});

export default SelectGender;
