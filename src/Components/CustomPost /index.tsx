import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import notifee from "@notifee/react-native";
import { IMAGES } from '../../Constants/images';
import { ICONS } from '../../Constants/icons';
import { COLORS, SIZES } from '../../Constants/commonStyles';
import { addLikes } from '../../utils/userhandle';
import { styles } from './style';
import { useAppSelector } from '../../Redux/Store';
import { SheetManager } from 'react-native-actions-sheet';
import { Comment } from '../../Defs/user';
import { getPost, storePostComment } from '../../utils/userhandle';
import "react-native-get-random-values";
import { Timestamp } from '@react-native-firebase/firestore';
interface PostProps {
  image?: string;  
  profilePic?: string | null;  
  name?: string;
  time?: any;
  caption?: string;
  likes?: number;
  comments?: number;
  parentStyle?: StyleProp<ViewStyle>;
  postId:string;
  onPress?: () => void;
}

const PostScreen: React.FC<PostProps> = ({ image, profilePic, name, time, caption, likes, comments, parentStyle, onPress,postId }) => {
//   const [iconColor, setIconColor] = useState(COLORS.PRIMARY.DARKGREY);
//   const [likesCount, setLikesCount] = useState<number>(likes || 0);
//   const {firstName,lastName}= useAppSelector((state)=>state.User.data)
//  // const [comments, setComments] = useState<Comment[]>(post.comments || []);
//   const {photo:userPhoto }= useAppSelector((state)=>state.User.data)

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const postData = await getPost(post.postId);
  
//         //setComments(post.comments);
//       } catch (error) {
//         console.log('Error fetching post:', error);
//       }
//     };
//     fetchPost();
//   }, [post.postId]);
//   const handlePress = async () => {
//     await notifee.displayNotification({
//       id: "1234",
//       title: `New notification`,
//       body: "Greetings! How are you faring today?",
//     });
//     setIconColor(prevColor =>
//       prevColor === COLORS.PRIMARY.DARKGREY ? COLORS.PRIMARY.PURPLE : COLORS.PRIMARY.DARKGREY
//     );
//     setLikesCount(prevCount =>
//       iconColor === COLORS.PRIMARY.DARKGREY ? prevCount + 1 : prevCount - 1
//     );
    
//   };
//   const handleCommentPress = () => {
//     SheetManager.show('comment-sheet', {
//       payload: {
//         title: 'Comment',
//         placeholderText: 'Write Your comment...',
//         icon1: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
//         icon2: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
//         icon3: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
//         icon1Press: () => console.log('icon1 press'),
//         icon2Press: () => console.log('icon2 press'),
//         icon3Press: () => console.log('icon3 press'),
//         onComment: async (commentText: string) => {
//           const newComment: Comment = {
//            // id: uuidv4(),
//             userName: `${firstName} ${lastName}`,
//             createdOn: Timestamp.fromDate(new Date()),
//             comment: commentText,
//             Photo: userPhoto
//           };
//           try {
//             await storePostComment(post.postId, newComment);
//           //  setComments((prevComments) => [newComment, ...prevComments]);
//           } catch (e) {
//             console.log('Error storing comment:', e);
//           }
//           SheetManager.hide('comment-sheet');
//         },
//       },
//     });
//   };
const [iconColor, setIconColor] = useState(COLORS.PRIMARY.DARKGREY);
const [likesCount, setLikesCount] = useState<number>(likes || 0);
const { firstName, lastName, photo: userPhoto } = useAppSelector((state) => state.User.data);
const [postComments, setPostComments] = useState<Comment[]>([]);

useEffect(() => {
  const fetchPost = async () => {
    try {
      const postData = await getPost(postId);
      console.log(postData,'postdata')
      setPostComments(postData.comments || []);
    } catch (error) {
      console.log('Error fetching post:', error);
    }
  };
  fetchPost();
}, [postId]);

const handlePress = async () => {
  await notifee.displayNotification({
    id: "1234",
    title: `New notification`,
    body: "Greetings! How are you faring today?",
  });
  setIconColor(prevColor =>
    prevColor === COLORS.PRIMARY.DARKGREY ? COLORS.PRIMARY.PURPLE : COLORS.PRIMARY.DARKGREY
  );
  setLikesCount(prevCount =>
    iconColor === COLORS.PRIMARY.DARKGREY ? prevCount + 1 : prevCount - 1
  );
};

const handleCommentPress = () => {
  SheetManager.show('comment-sheet', {
    payload: {
      title: 'Comment',
      placeholderText: 'Write your comment...',
      icon1: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
      icon2: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
      icon3: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
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
        try {
          await storePostComment(postId, newComment);
          setPostComments((prevComments) => [newComment, ...prevComments]);
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
        <Image source={profilePic ? { uri: profilePic } : null} style={styles.profile} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Text style={styles.cap}>{caption}</Text>
      <Image source={{ uri: image }} style={styles.post} />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.direction}>
            {ICONS.HEART({ height: 18, width: 18, color: iconColor })}
            <Text style={styles.text}>{likesCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCommentPress}>
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
