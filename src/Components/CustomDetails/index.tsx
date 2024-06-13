import { Text, View, StyleSheet } from "react-native";

const Details =({
    color,
    title,
    text,
    percentage

}:Readonly<{
    color:string,
    title:string,
    text:string,
    percentage:number
}>)=>{
      
  return(
  <View style={styles.container}>
      <View></View>
      <Text>{title}</Text>
      <Text>{text}</Text>
      <Text>{percentage}%</Text>
  </View>
  )
}
const styles= StyleSheet.create({
    container:{
      // flex:1,
       flexDirection:'row'
    },
})
export default Details