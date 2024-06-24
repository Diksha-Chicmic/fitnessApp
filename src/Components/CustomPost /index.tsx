import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../Constants/images';
import { ICONS } from '../../Constants/icons';
import { COLORS, SIZES } from '../../Constants/commonStyles';
import { PostScreenProps } from '../../Constants/navigation';
import { styles } from './style';

interface PostProps {
  image?: string;
  name?: string;
  time?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  parentStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const screenWidth = Dimensions.get('screen').width;

const PostScreen: React.FC<PostProps> = ({ image, name, time, caption, likes = 0, comments = 0, parentStyle, onPress }) => {
  const [iconColor, setIconColor] = useState(COLORS.PRIMARY.DARKGREY);
  const navigation = useNavigation<PostScreenProps['navigation']>();

  const handlePress = () => {
    setIconColor(prevColor =>
      prevColor === COLORS.PRIMARY.DARKGREY ? COLORS.PRIMARY.PURPLE : COLORS.PRIMARY.DARKGREY
    );
  };

  return (
    <View style={[styles.conatiner, parentStyle]}>
      <View style={styles.direction}>
        <Image source={IMAGES.LANDING_PAGE} style={styles.profile} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Text style={styles.cap}>{caption}</Text>
      {image && <Image source={{ uri: image }} style={styles.post} />}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.direction}>
            {ICONS.HEART({ height: 18, width: 18, color: iconColor })}
            <Text style={styles.text}>{likes}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.direction}>
            {ICONS.COMMENT({ height: 18, width: 18, color: COLORS.PRIMARY.DARKGREY })}
            <Text style={styles.text}>{comments}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;




// import React, { useState } from 'react';
// import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { ICONS } from '../../Constants/icons';
// import { COLORS } from '../../Constants/commonStyles';
// import { PostScreenProps } from '../../Constants/navigation';
// import { IMAGES } from '../../Constants/images';
// import { styles } from './style';

// interface PostProps {
//   image?: string | number; // Adjusted type for image prop
//   name?: string;
//   time?: string;
//   caption?: string;
//   likes?: number;
//   comments?: number;
//   parentStyle?: React.ViewStyle; // Updated to React.ViewStyle for clarity
// }

// const PostScreen: React.FC<PostProps> = ({ image, name, time, caption, likes, comments, parentStyle }) => {
//   const [iconColor, setIconColor] = useState(COLORS.PRIMARY.DARKGREY);
//   const navigation = useNavigation<PostScreenProps['navigation']>();

//   const handlePress = () => {
//     setIconColor(prevColor =>
//       prevColor === COLORS.PRIMARY.DARKGREY ? COLORS.PRIMARY.PURPLE : COLORS.PRIMARY.DARKGREY
//     );
//   };

//   const handleCommentPress = () => {
//     navigation.push('PostDetails');
//     console.log('Navigating to PostDetails screen...');
//   };

//   return (
//     <View style={[styles.container, parentStyle]}>
//       <View style={styles.direction}>
//         <Image source={IMAGES.LANDING_PAGE} style={styles.profile} />
//         <View style={styles.textContainer}>
//           <Text style={styles.name}>{name}</Text>
//           <Text style={styles.time}>{time}</Text>
//         </View>
//       </View>
//       <Text style={styles.caption}>{caption}</Text>
//       <Image source={{ uri: image }} style={styles.postImage} />
//       <View style={styles.iconContainer}>
//         <TouchableOpacity onPress={handlePress}>
//           <View style={styles.direction}>
//             {ICONS.HEART({ height: 18, width: 18, color: iconColor })}
//             <Text style={styles.text}>{likes}</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleCommentPress}>
//           <View style={styles.direction}>
//             {ICONS.COMMENT({ height: 18, width: 18, color: COLORS.PRIMARY.DARKGREY })}
//             <Text style={styles.text}>{comments}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default PostScreen;
