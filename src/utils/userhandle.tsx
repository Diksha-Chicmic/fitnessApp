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
    console.log(user);
    await firestore()
      .collection("users")
      .doc("byEmail")
      .update({
        [userCredential.user.uid]: user,
      });
    await firestore()
      .collection(firebaseDB.collections.users)
      .doc(firebaseDB.documents.users.byEmails)
      .update({
        emails: firestore.FieldValue.arrayUnion(userCredential.user.uid),
      });
    console.log("New User");
  } catch (e) {
    console.log("error storing User data - ", e);
  }
};



export const getUserData = async (
  uid: FirebaseAuthTypes.UserCredential["user"]["uid"]
) => {
  const snapshot = await firestore()
    .collection(firebaseDB.collections.users)
    .doc(firebaseDB.documents.users.byEmail)
    .get();
  const userData = snapshot.get(uid);
  console.log(userData);
  return userData ;
};



