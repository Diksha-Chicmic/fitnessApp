import { StyleProp,ViewStyle } from "react-native";

export interface PostProps {
    image?: string;  
    profilePic?: string | null;  
    name?: string;
    time?: any;
    caption?: string;
    likes?: number;
    comments?: number;
    parentStyle?: StyleProp<ViewStyle>;
    postId:string;
    onPress?: () => void;
  }