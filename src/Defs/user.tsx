import { Timestamp } from "@react-native-firebase/firestore";

export interface User {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  finger: boolean | null;
  photo: string | null;
  gender: "male" | "female" | null;
  preferences: Array<{ text: string; selected: boolean }> | null;
  interests: Array<string> | null;
}

export interface Health {
  hasPremission: boolean,
  totalSteps: number,
  dailyGlass: number,
  nutrition: number,
  currentTime: any,
  goals: {
    totalGlasses: number,
    stepsGoal: string,
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
  id:string
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