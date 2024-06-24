import { Timestamp } from "@react-native-firebase/firestore";

 export interface User{
    id: string | null;
   //  firstName: string | null;
   //  lastName: string | null;
    email: string | null;
    finger: boolean | null;
    photo: string | null;
    gender: "male" | "female" | null;
    preferences: Array<{ text: string; selected: boolean }> | null;
    interests: Array<string> | null;
 }

 export interface Health{
   hasPremission :boolean,
   totalSteps: number,
   dailyGlass:number,
   nutrition:number,
   currentTime:Timestamp,
   goals:{
      totalGlasses:number,
      stepsGoal:string,
      totalNutrition:number,
   }

 };


 export type Post = {
   photo: string;
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
   userName: string;
   userPhoto: string;
   comment: string;
   createdOn: Timestamp;
 };