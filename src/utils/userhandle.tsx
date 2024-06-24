import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore, { Timestamp } from "@react-native-firebase/firestore";
// import "react-native-get-random-values";
import storage from "@react-native-firebase/storage";

import { User,Post,Comment } from "../Defs/user";

export const firebaseDB = {
  collections: {
    users: "users",
    posts:"posts"
  },
  documents: {
    users: {},
    post:{
      allIds:'allIds'
    }
  },
};

// user
export const createUser = async (email: string, password: string) => {
  try {
    const userCredential: FirebaseAuthTypes.UserCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    return userCredential;
  } catch (e) {
    console.log("error creating user", e);
  }
};

export const storeUserData = async (
    user: User,
    userCredential: FirebaseAuthTypes.UserCredential
  ) => {
    try {
      const userEmail:any  = user.email; // Assuming user has email field
  
      console.log(user, 'its a user detail out');
      await firestore()
        .collection(firebaseDB.collections.users)
        .doc(userCredential.user.uid)
        .set(
           user
        );
  
  
      console.log("New User");
    } catch (e) {
      console.log("Error storing User data - ", e);
    }
  };
  
  export const getUserData = async (uid: string) => {
    try {
      const snapshot = await firestore()
        .collection(firebaseDB.collections.users)
        .doc(uid)
        .get();
  
      const userData = snapshot.data();
      console.log(userData);
      return userData;
    } catch (e) {
      console.log("Error getting user data - ", e);
      return null;
    }
  };


  export const storePostComment = async (postId: string, comment: Comment) => {
    await firestore()
      .collection(firebaseDB.collections.posts)
      .doc(postId)
      .update({
        comments: firestore.FieldValue.arrayUnion(comment),
      });
  };
  
  export const getPost = async (postId: string) => {
    const snapshot = await firestore()
      .collection(firebaseDB.collections.posts)
      .doc(postId)
      .get();
    console.log("post data", snapshot.data());
    return snapshot.data();
  };




