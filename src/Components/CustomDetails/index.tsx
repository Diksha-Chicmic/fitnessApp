import { Text, View, StyleSheet } from "react-native";
import { styles } from "./style";

const Details =({
    color,
    title,
    text,
    percentage,
    borderCheck=true

}:Readonly<{
    color:string,
    title:string,
    text:number,
    percentage:number,
    borderCheck?:boolean
}>)=>{
      
  return(
  <View style={[styles.container, borderCheck && styles.border]}>
    <View style={styles.box1}>
      <View style={[styles.box,{backgroundColor:color}]}></View>
      <Text style={styles.text}>{title}</Text>
    </View>
      <Text style={styles.text}>{text}g</Text>
      <Text style={[styles.text,{fontWeight:'bold'}]}>{percentage}%</Text>
  </View>
  )
}

export default Details