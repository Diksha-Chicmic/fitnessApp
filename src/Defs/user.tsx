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