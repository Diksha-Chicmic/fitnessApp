import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore, { Timestamp } from "@react-native-firebase/firestore";
// import "react-native-get-random-values";
import storage from "@react-native-firebase/storage";

import { User } from "../Defs/user";

export const firebaseDB = {
  collections: {
    users: "users",
  },
  documents: {
    users: {
      byEmail:'byEmail',
      byEmails: "byEmails",
    },
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
        .doc(firebaseDB.documents.users.byEmail)
        .set({
          [userEmail]: user,
        });
  
      await firestore()
        .collection(firebaseDB.collections.users)
        .doc(firebaseDB.documents.users.byEmails)
        .set({
          emails: firestore.FieldValue.arrayUnion(userEmail),
        });
  
      console.log("New User");
    } catch (e) {
      console.log("Error storing User data - ", e);
    }
  };
  
  export const getUserData = async (email: string) => {
    try {
      const snapshot = await firestore()
        .collection(firebaseDB.collections.users)
        .doc(firebaseDB.documents.users.byEmail)
        .get();
  
      const userData = snapshot.get(email);
      console.log(userData);
      return userData;
    } catch (e) {
      console.log("Error getting user data - ", e);
      return null;
    }
  };
  





