import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import firestore, { Timestamp } from '@react-native-firebase/firestore';
import { useAppSelector } from '../../Redux/Store';
import { Comment } from '../../Defs/user';
import PostScreen from '../CustomPost ';
import { IMAGES } from '../../Constants/images';
import { styles } from './style';
import { ICONS } from '../../Constants/icons';
import { getPost, storePostComment } from '../../utils/userhandle';

const PostDetails = ({ route }) => {
  const { post } = route.params;
  const [comments, setComments] = React.useState<Comment[]>([]);
  const { id: userId, photo: userPhoto, firstName, lastName } = useAppSelector(
    (state) => state.User.data
  );

  React.useEffect(()=>{
      getPost(post.postId)
  },[])
 
  console.log('post is ',post);
  // Handle comment button press
  const handleCommentPress =  () => {
    SheetManager.show('comment-sheet', {
      payload: {
        title: 'Comment',
        placeholderText: 'Write Your comment...',
        icon1: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
        icon2: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
        icon3: ICONS.YELLOWSMILE({ height: 20, width: 20 }),
        icon1Press: () => console.log('icon1 press'),
        icon2Press: () => console.log('icon2 press'),
        icon3Press: () => console.log('icon3 press'),
        onComment: async (commentText: string) => {
          const newComment: Comment = {
            id: String(comments.length + 1), 
            userName: firstName+" "+lastName, 
            createdOn: Timestamp.fromDate(new Date()), 
            comment: commentText,
            Photo:userPhoto
          };
          try{
            await storePostComment(post.postId,newComment);
          }
          catch(e){
            console.log('eee',e)
          }
          setComments((prevComments) => [newComment, ...prevComments]);
       
          SheetManager.hide('comment-sheet'); 
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <PostScreen
        image={post.photo}
        name={firstName + " " + lastName}
        time="Just Now"
        caption={post.caption}
        likes={0}
        comments={comments.length}
        parentStyle={styles.parent} 
        postId={post.postId}        //profilePic={userPhoto}
      />

      <Text style={styles.heading}>Comments</Text>
      <ScrollView>
        <View style={styles.commentsList}>
          {comments.map((item) => (
            <View key={item.id} style={styles.commentContainer}>
              <View style={styles.direction}>
                <Image source={IMAGES.LANDING_PAGE} style={styles.profile} />
                <View>
                  <Text style={styles.name}>{item.userName}</Text>
                  <Text style={styles.time}>{item.createdOn.toDate().toLocaleString()}</Text>
                </View>
              </View>
              <Text style={styles.commentText}>{item.comment}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.input} onPress={handleCommentPress}>
        <Text style={styles.inputText}>Write a comment...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostDetails;
