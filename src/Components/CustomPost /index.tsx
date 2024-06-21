import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity ,StyleProp,TextStyle,ViewStyle} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../Constants/images'
import { ICONS } from '../../Constants/icons'
import { COLORS, SIZES } from '../../Constants/commonStyles'
import { PostScreenProps } from '../../Constants/navigation'
import { styles } from './style';
interface PostProps {
    image?: any,
    name?: string,
    time?: string,
    caption?: string,
    likes?: number,
    comments?: number,
    parentStyle?:StyleProp<ViewStyle>,
}
const screenWidth = Dimensions.get('screen').width
const PostScreen: React.FC<PostProps> = ({ image, name, time, caption, likes, comments,parentStyle }) => {
    const [iconColor, setIconColor] = useState(COLORS.PRIMARY.DARKGREY);
    const navigation = useNavigation<PostScreenProps['navigation']>();
    const handlePress = () => {
        //setIconColor(COLORS.PRIMARY.PURPLE); 
        setIconColor(prevColor =>
            prevColor === COLORS.PRIMARY.DARKGREY ? COLORS.PRIMARY.PURPLE : COLORS.PRIMARY.DARKGREY
        );
    };
    const handleCommentPress=()=>{
           navigation.push('PostDetails');
           console.log('nav')
    }
    return (
        <View style={[styles.conatiner,parentStyle]}>
            <View style={styles.direction}>
                <Image source={IMAGES.LANDING_PAGE} style={styles.profile} />
                <View >
                    <Text style={styles.name}>Diksha</Text>
                    <Text style={styles.time}>6 minutes</Text>
                </View>
            </View>
            <Text style={styles.cap}>Yummy breakfast on weekend </Text>
            <Image source={IMAGES.LANDING_PAGE} style={styles.post} />
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.direction}>
                        {ICONS.HEART({ height: 18, width: 18, color: iconColor })}
                        <Text style={styles.text}>45</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCommentPress}>
                <View style={styles.direction}>{ICONS.COMMENT({ height: 18, width: 18, color: COLORS.PRIMARY.DARKGREY })}
                    <Text style={styles.text}>4</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}

  
export default PostScreen
