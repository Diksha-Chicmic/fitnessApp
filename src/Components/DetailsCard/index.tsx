import React from 'react'
import {Text,View} from 'react-native'
import { styles } from './style'
import { detailsProps } from './types'

const DetailsCard:React.FC<detailsProps> =({calNum,goalNum,calText,goalText,text,textStyles})=>{
    return(
        <View style={styles.container}>
            <View style={styles.box}>
           <Text style={[styles.title,textStyles]}>{calNum}</Text>
           <Text style={styles.text}>{calText}</Text>
           </View>
           <View style={styles.itemSeparator}></View>
           <View style={styles.box}>
           <Text style={[styles.title,textStyles]}>{goalNum} {text}</Text>
           <Text style={styles.text}>{goalText}</Text>
           </View>
        </View>
    )
}


export default DetailsCard