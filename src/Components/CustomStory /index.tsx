// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import InstaStory,{IUserStory} from 'react-native-insta-story';
// import { COLORS } from "../../Constants/commonStyles";
import firestore from '@react-native-firebase/firestore';
// import { useAppSelector } from "../../Redux/Store";

// const Story = () => {
//   const [stories, setStories] = useState<IUserStory[]>([]);
//   const { id: userId } = useAppSelector((state) => state.User.data);
//   const data = [
//     {
//       user_id: 1,
//       userImage:
//       'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' ,
//       user_name: 'Ahmet Çağlar Durmuş',
//       stories: [
//         {
//           story_id: 1,
//           story_image:
//             'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
//           swipeText: 'Custom swipe text for this story',
//           onPress: () => console.log('story 1 swiped'),
//         },
//         {
//           story_id: 2,
//           story_image:
//             'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//         },
//       ],
//     },
//     {
//       user_id: 2,
//       user_image:
//         'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
//       user_name: 'Test User',
//       stories: [
//         {
//           story_id: 1,
//           story_image:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
//           swipeText: 'Custom swipe text for this story',
//           onPress: () => console.log('story 1 swiped'),
//         },
//         {
//           story_id: 2,
//           story_image:
//             'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
//           swipeText: 'Custom swipe text for this story',
//           onPress: () => console.log('story 2 swiped'),
//         },
//       ],
//     },
//   ];

//   const fetchStories = async () => {
//     try {
//       const snapshot = await firestore().collection('stories').get();
//       const storiesData = snapshot.docs.map(doc => doc.data());
//       setStories(storiesData);
//       console.log('Fetched stories:', storiesData);
//     } catch (error) {
//       console.error('Error fetching stories:', error);
//     }
//   };

//   useEffect(() => {
//     fetchStories();
//   }, []);
// console.log('adad',stories)

//   return (
//     <View >
//       <InstaStory
//         data={data}
//         duration={10}
//         avatarSize={55}
//         pressedBorderColor={COLORS.SECONDARY.GREY}
//         unPressedBorderColor={COLORS.PRIMARY.PURPLE}
//         avatarImageStyle={styles.avatarImage}
//       />
//    {stories? <Text>{stories[0].user_id}</Text>: null}
//     </View>

//   );
// };

// const styles = StyleSheet.create({

//   avatarImage: {
//     height: '90%',
//     width: '90%',
//   },
// });

// export default Story;




import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import InstaStory, { IUserStory } from 'react-native-insta-story';
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../Constants/commonStyles";
import { AppNavigationProps } from "../../Constants/navigation";
import { StoryData } from "../../utils/common";
import { IMAGES } from "../../Constants/images";
import { useAppSelector } from '../../Redux/Store';


export interface StoryProps {
  allStoryData?: Array<StoryData>
  index?: number
}
const data = [
  {
    useId: 1,
    userImage:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Ahmet Çağlar Durmuş',
    stories: [
      {
        storyId: 1,
        d:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
];

const Story: React.FC<StoryProps> = ({ allStoryData, index }) => {
  const navigation = useNavigation<AppNavigationProps>();

  // const goToStoriesScreen = () =>
  // navigation.push("StoriesScreen", { allStoryData, index });
  // console.log("storeii wat", storiesWatched);

  // --------------
  const [stories, setStories] = useState<IUserStory[]>([]);
  const { id: userId } = useAppSelector((state) => state.User.data);

  const fetchStories = async () => {
    try {
      const snapshot = await firestore().collection('stories').get();
      const storiesData = snapshot.docs.map(doc => doc.data());

      setStories([...storiesData]);
      console.log('Fetched stories:', storiesData);
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);
  console.log('adad', stories)

  return (
    <View>
      {
        stories.length > 0 &&
        <InstaStory
          data={stories}
          duration={10}
          avatarSize={55}
          pressedBorderColor={COLORS.SECONDARY.GREY}
          unPressedBorderColor={COLORS.PRIMARY.PURPLE}
          avatarImageStyle={styles.avatarImage}
        />
      }


    </View>
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    height: '90%',
    width: '90%'
  },


})
export default Story