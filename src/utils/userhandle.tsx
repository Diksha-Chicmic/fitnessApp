import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore, { Timestamp } from "@react-native-firebase/firestore";
 import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
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
      const userEmail:any  = user.email;
  
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

  export const storePost = async (post: Post) => {
    try {
      console.log('wadawd wad awa wf')
      const newPostId = post.postId ?? uuidv4();
      const reference = storage().ref(
        "media/" + "posts/" + newPostId + "/" + "photo"
      );
      await reference.putFile(post.photo);
      const url = await reference.getDownloadURL();
      await firestore()
        .collection(firebaseDB.collections.posts)
        .doc(newPostId)
        .set({ ...post, postId: newPostId, photo: url });
    } catch (e) {
      console.log('error with storing post ',e);
    }
  };

 
  export const storePostComment = async (postId: string, comment: Comment) => {
    try{
      console.log('comments')
    await firestore()
      .collection(firebaseDB.collections.posts)
      .doc(postId)
      .update({
        comments: firestore.FieldValue.arrayUnion(comment),
      });
    }catch(e){
      console.log('error in storing comment',e)
    }

  };
  
  export const getPost = async (postId: string) => {
    const snapshot = await firestore()
      .collection(firebaseDB.collections.posts)
      .doc(postId)
      .get();
    console.log("post data", snapshot.data());
    return snapshot.data();
  };

  export const getAllPost = async () => {
    try {
      const snapshot = await firestore()
        .collection(firebaseDB.collections.posts)
        .get();
      const data = snapshot.docs;
      return data.map((val) => val.data()) as Post[];
    } catch (e) {
      console.log("error with getting posts ", e);
    }
  };

  export const addLikes = async (
    postId: string,
    likedByUsersId: Array<string>
  ) => {
    await firestore()
      .collection(firebaseDB.collections.posts)
      .doc(postId)
      .update({
        likedByUsersId: likedByUsersId,
      });
  };




