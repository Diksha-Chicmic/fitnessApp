import { Text, View, StyleSheet } from "react-native";
import { styles } from "./style";
import React from "react";


interface DetailsProps{
  color:string,
  title:string,
  text:number,
  percentage:number,
  borderCheck?:boolean
}

const Details:React.FC<DetailsProps> =({
    color,
    title,
    text,
    percentage,
    borderCheck=true

})=>{
      
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