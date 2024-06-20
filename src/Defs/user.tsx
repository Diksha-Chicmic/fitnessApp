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
   currentTime:any,
   goals:{
      totalGlasses:number,
      stepsGoal:string,
      totalNutrition:number,
   }

 };