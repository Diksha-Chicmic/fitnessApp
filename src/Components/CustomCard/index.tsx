import React from 'react';
import { View, Text, TouchableOpacity ,Dimensions} from 'react-native';
import { styles } from './style';
import { COLORS } from '../../Constants/commonStyles';
import { CardProps } from './types';

const screenWidth= Dimensions.get('screen').width
const iconSize = { width: 24, height: 24 };


const CustomCard:React.FC<CardProps> = ({ title,onPress,percentage,icon,point,}) => {

    const button = {
        style: {
            backgroundColor: "#F4DCDC",
        },
        text: 'warning',
        textStyle: {
            color: "#F5797A",
        },
    };
    const pointer ={
        style:{
            left:screenWidth/6.5,
        }
    }
    
    if (percentage > 33 && percentage < 66) {
        button.style.backgroundColor = "#fad3b9";
        pointer.style.left= screenWidth/2
    } else if (percentage > 66) {
        button.style.backgroundColor = COLORS.PRIMARY.DIMPURPLE;
        button.text = 'on';
        button.textStyle.color = COLORS.PRIMARY.PURPLE;
        pointer.style.left=screenWidth/1.1
    }

  

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.Direction}>
                <View style={styles.iconContainer}>{icon(iconSize)}</View>
                <View style={styles.textContainer}>
                    <View >
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{point}</Text>
                    </View>
                    <View style={[styles.buttonContainer, button.style]}>
                        <Text style={[styles.buttonText, button.textStyle]}>
                            {button.text}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.cc}>
                <View style={styles.parentContainer}>
                    <View style={styles.redContainer}></View>
                    <View style={styles.yellowContainer}></View>
                    <View style={styles.greenContainer}></View>
                </View>
                <View style={[styles.pointer,pointer.style]}></View>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default CustomCard;




