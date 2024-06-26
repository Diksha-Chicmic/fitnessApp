import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { IMAGES } from '../../Constants/images';
import { ICONS } from '../../Constants/icons';
import { COLORS, SIZES } from '../../Constants/commonStyles';
import { addLikes } from '../../utils/userhandle';
import { styles } from './style';

interface PostProps {
  image?: string;  // URL of the post image
  profilePic?: string | null;  // URL of the user's profile picture
  name?: string;
  time?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  parentStyle?: StyleProp<ViewStyle>;
  postId:string;
  onPress?: () => void;
}

const PostScreen: React.FC<PostProps> = ({ image, profilePic, name, time, caption, likes, comments, parentStyle, onPress }) => {
  const [iconColor, setIconColor] = useState(COLORS.PRIMARY.DARKGREY);
  const [likesCount, setLikesCount] = useState<number>(likes || 0);

  const handlePress = async () => {
    setIconColor(prevColor =>
      prevColor === COLORS.PRIMARY.DARKGREY ? COLORS.PRIMARY.PURPLE : COLORS.PRIMARY.DARKGREY
    );
    setLikesCount(prevCount =>
      iconColor === COLORS.PRIMARY.DARKGREY ? prevCount + 1 : prevCount - 1
    );
  };

  return (
    <View style={[styles.conatiner, parentStyle]}>
      <View style={styles.direction}>
        <Image source={profilePic ? { uri: profilePic } : IMAGES.LANDING_PAGE} style={styles.profile} />
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
            <Text style={styles.text}>{likesCount}</Text>
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
