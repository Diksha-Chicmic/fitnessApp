import React from 'react'
import {Text,View} from 'react-native'
import { styles } from './style'

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


export default DetailsCard