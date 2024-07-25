import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import notifee from "@notifee/react-native";
import { IMAGES } from '../../Constants/images';
import { ICONS } from '../../Constants/icons';
import { COLORS, SIZES } from '../../Constants/commonStyles';
import { addLikes, sendNotification } from '../../utils/userhandle';
import { styles } from './style';
import { useAppSelector } from '../../Redux/Store';
import { SheetManager } from 'react-native-actions-sheet';
import { Comment } from '../../Defs/user';
import { getPost, storePostComment } from '../../utils/userhandle';
import "react-native-get-random-values";
import { Timestamp } from '@react-native-firebase/firestore';
import { PostProps } from './types';
import CustomLoading from '../CustomLoading';

const PostScreen: React.FC<PostProps> = ({ image, profilePic, name, time, caption, likes, comments, parentStyle, onPress,postId }) => {


const [iconColor, setIconColor] = useState(COLORS.SECONDARY.GREY);
//const [likesCount, setLikesCount] = useState<number>(likes || 0);
const { firstName, lastName, photo: userPhoto , id} = useAppSelector((state) => state.User.data);
const [likesCount, setLikesCount] = useState<number>(0);
const [postComments, setPostComments] = useState<Comment[]>([]);
const [post,setPost]=useState<string>('');
const [likedByUsersId, setLikedByUsersId] = useState<string[]>([]);
const [profilePicLoading, setProfilePicLoading] = useState<boolean>(true);
const [imageLoading, setImageLoading] = useState<boolean>(true);

useEffect(() => {
  const fetchPost = async () => {
    try {
      const postData = await getPost(postId);
      console.log('fetching ',postData,'postdata')
      setPostComments(postData!.comments || []);
      //setPost(postData);
      setLikesCount(postData!.likedByUsersId.length || 0)
      setLikedByUsersId(postData!.likedByUsersId || []);
      setPost(postData!.userId)
    } catch (error) {
      console.log('Error fetching post:', error);
    }
  };
  fetchPost();
}, [postId]);
console.log(post);

const handleLikePress = async () => {
  try {
    let updatedLikedByUsersId;
    let updatedLikesCount = likesCount;

    if (likedByUsersId.includes(id)) {
      // User already liked the post, so remove the like
      updatedLikedByUsersId = likedByUsersId.filter(userId => userId !== id);
      updatedLikesCount -= 1;
      setIconColor(COLORS.SECONDARY.GREY);
    } else {
      // User has not liked the post, so add the like
      updatedLikedByUsersId = [...likedByUsersId, id];
      updatedLikesCount += 1;
      setIconColor(COLORS.PRIMARY.PURPLE);

     const notification = {
        userId: id!,
        message: `liked your post`,
        isUnread: true,
        isShownViaPushNotification:false,
      };
      await sendNotification(notification,post);  // Function to send notification
    }

    setLikedByUsersId(updatedLikedByUsersId);
    setLikesCount(updatedLikesCount);

    await addLikes(postId, updatedLikedByUsersId);  // F
  } catch (error) {
    console.error('Error handling like:', error);
  }
};


const handleCommentPress = () => {
  SheetManager.show('comment-sheet', {
    payload: {
      title: 'Create Comment',
      placeholderText: 'Write your comment...',
      icon1: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
      // icon2: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
      // icon3: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
       icon1Press: () => console.log('icon1 press'),
      icon2Press: () => console.log('icon2 press'),
      icon3Press: () => console.log('icon3 press'),
      onComment: async (commentText: string) => {
        const newComment: Comment = {
          userName: `${firstName} ${lastName}`,
          createdOn: Timestamp.fromDate(new Date()),
          comment: commentText,
          Photo: userPhoto
  };
        const notification = {
          userId:id, 
          message: `commented on your post`,
          isUnread: true,
          isShownViaPushNotification: true
        };
        try {
          await storePostComment(postId, newComment);
          await sendNotification(notification,post);
          setPostComments((prevComments) => [newComment, ...prevComments]);
          console.log(notification,'nnnnnnnnn')
        } catch (e) {
          console.log('Error storing comment:', e);
        }
        SheetManager.hide('comment-sheet');
      },
    },
  });
};
  return (
    <View style={[styles.conatiner, parentStyle]}>
      <View style={styles.direction}>
      {profilePicLoading && <CustomLoading size='small'/>}
       {profilePic? <Image source={ { uri: profilePic! }} style={styles.profile} 
        onLoadStart={() => setProfilePicLoading(true)}
          onLoad={() => setProfilePicLoading(false)}
          onError={() => setProfilePicLoading(false)}/>:null}
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Text style={styles.cap}>{caption}</Text>
      {imageLoading && <CustomLoading size='large'/>}
      <Image source={{ uri: image }} style={styles.post} 
      onLoadStart={() => setImageLoading(true)}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}/>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleLikePress}>
          <View style={styles.direction}>
            {ICONS.HEART({ height: 20, width: 20, color: iconColor })}
            <Text style={styles.text}>{likesCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCommentPress}>
          <View style={styles.direction}>
            {ICONS.COMMENT({ height: 20, width: 20, color: COLORS.SECONDARY.GREY })}
            <Text style={styles.text}>{comments}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;
