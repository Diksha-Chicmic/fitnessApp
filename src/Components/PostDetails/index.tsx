import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, FlatList, TextInput,ScrollView } from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import PostScreen from '../CustomPost ';
import { IMAGES } from '../../Constants/images';
import { styles } from './style';
import { ICONS } from '../../Constants/icons';
const commentsData = [
    { id: '1', name: 'Diksha', time: '6 minutes', text: 'Nice' },
    { id: '2', name: 'Amit', time: '10 minutes', text: 'Great post!' },
    { id: '3', name: 'Ravi', time: '15 minutes', text: 'Very informative.' },
    { id: '4', name: 'Priya', time: '20 minutes', text: 'Loved it!' },
    { id: '5', name: 'Kiran', time: '25 minutes', text: 'Thanks for sharing.' },
    { id: '6', name: 'Sonia', time: '30 minutes', text: 'Interesting read.' },
    { id: '7', name: 'Rohit', time: '35 minutes', text: 'Awesome!' },
    { id: '8', name: 'Anjali', time: '40 minutes', text: 'Well written.' },
    { id: '9', name: 'Neha', time: '45 minutes', text: 'Good job!' },
    { id: '10', name: 'Arjun', time: '50 minutes', text: 'Nice article.' },
    { id: '11', name: 'Suresh', time: '55 minutes', text: 'I enjoyed this.' },
    { id: '12', name: 'Meena', time: '1 hour', text: 'Keep it up!' },
  ];
const PostDetails = () => {
  const [comments, setComments] = useState(commentsData);
  const handleIcon1=()=>{
    console.log('icon1 press')
  }
  const handleCommentPress = () => {
    console.log('test');
    SheetManager.show('comment-sheet',{
      payload: { title: "Comment" ,
                 placeholderText:'Write Your comment...',
                icon1:ICONS.YELLOWSMILE({height:20,width:20,}),
                icon2:ICONS.YELLOWSMILE({height:20,width:20}),
                icon3:ICONS.YELLOWSMILE({height:20,width:20}),
              icon1Press:handleIcon1,
              icon2Press: ()=>{console.log('ewjhd')},
              icon3Press: ()=>{console.log('ewjhd')},
    }

    });
  };

  return (
  
    <View style={styles.container}>
        
      <PostScreen parentStyle={styles.parent} />

      <Text style={styles.heading}>
        Comments
      </Text>
      <ScrollView>
      <View style={styles.commentsList}>
      {comments.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.commentContainer,
              index === comments.length - 1 ? null : styles.commentBorder,
            ]}
          >
            <View style={styles.direction}>
              <Image source={IMAGES.LANDING_PAGE} style={styles.profile} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        ))}
        </View>
    </ScrollView>
    <TouchableOpacity  style={styles.input} onPress={handleCommentPress}>
    <Text style={styles.inputText}>Write comment...</Text>
    </TouchableOpacity>
    </View>
    
   
  
  );
};



export default PostDetails;




