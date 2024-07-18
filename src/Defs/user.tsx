import { Timestamp } from "@react-native-firebase/firestore";

export interface User {
  id: string;
  firstName: string ;
  lastName: string ;
  email: string;
  finger: boolean | null;
  photo: string ;
  gender: "male" | "female" | null;
  preferences: Array<{ text: string; selected: boolean }> ;
  interests: Array<{title:string,selected:boolean}> ;
  healthData:Array<any> |null;
  notifications: NotificationsData;
}

export interface Health {
  hasPremission: boolean,
  totalSteps: number,
  dailyGlass: number,
  nutrition: number,
  currentTime: any,
  currentDate:string,
  goals: {
    totalGlasses: number,
    stepsGoal: number,
    totalNutrition: number,
  }

};


export type Post = {
  photo: string  ;
  caption: string;
  createdOn: Timestamp;
  userId: string;
  userName: string;
  userPhoto: string;
  likedByUsersId: Array<string>;
  comments: Array<Comment>;
  postId?: string;
};

export type Comment = {
 // id:string
  userName: string;
  Photo: string | null;
  comment: string;
  createdOn: Timestamp;
};


export type StoryData = {
  stories: [{ storyUrl: string; storyType: string }];
  userName: string;
  userPhoto: string;
  storyByUserId: string;
};


export type NotificationsData = Array<NotificationData>;
export type NotificationData = {
  userId: string;
  message: string;
  createdOn: string;
  isUnread: boolean;
  isShownViaPushNotification: boolean;
};
export type Meal = {
  name: string;
  carbs: number;
  fat: number;
  protein: number;
  calories: number;
  serving_size_g: number;
};