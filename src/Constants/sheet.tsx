import CustomComment from "../Components/CustomSheet";
import {registerSheet,SheetDefinition} from 'react-native-actions-sheet';

registerSheet('comment-sheet', CustomComment);

declare module 'react-native-actions-sheet' {
    interface Sheets {
      'commnet-sheet': SheetDefinition<{
        payload: {
            icon1?:React.ReactNode,
            icon2?:React.ReactNode,
            icon3?:React.ReactNode,
            title:string,
            placeholderText:string,
            icon1Press:(h:any)=>void,
            icon2Press:(h:any)=>void,
            icon3Press:()=>void,
            onPost?:(image: string | null, caption: string)=>void,
            onComment? :(comment:string)=>void 
        };
      }>;
    }
  }
export {}