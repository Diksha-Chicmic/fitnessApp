import CustomComment from "../Components/CustomComment";
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
            icon1Press:()=>void,
            icon2Press:()=>void,
            icon3Press:()=>void
        };
      }>;
    }
  }
export {}