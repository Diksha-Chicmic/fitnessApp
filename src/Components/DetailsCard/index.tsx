import React from 'react'
import {StyleSheet, Text,View} from 'react-native'
import { COLORS, SIZES } from '../../Constants/commonStyles'

interface detailsProps{
    calNum:string,
    goalNum:string,
    calText:string,
    goalText:string
}
const DetailsCard:React.FC<detailsProps> =({calNum,goalNum,calText,goalText})=>{
    return(
        <View style={styles.container}>
            <View style={styles.box}>
           <Text style={styles.title}>{calNum}</Text>
           <Text style={styles.text}>{calText}</Text>
           </View>
           <View style={styles.itemSeparator}></View>
           <View style={styles.box}>
           <Text style={styles.title}>{goalNum}</Text>
           <Text style={styles.text}>{goalText}</Text>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
    paddingVertical:18
        
    },
    box:{
      
       marginHorizontal:60,
    
    },
    itemSeparator:{
        borderRightWidth:1,
        borderRightColor:COLORS.SECONDARY.GREY

    },
    title:{
        fontSize:SIZES.font14
    },
    text:{
        fontSize:SIZES.font11,
        color:COLORS.SECONDARY.GREY
    }
})
export default DetailsCard