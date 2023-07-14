import { app, auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// isAuthenticated returns a boolean value to check if the user is logged in or not

const isAuthenticated = () => {
  const user = auth.currentUser;
  return user !== null;
}

// getUser returns a auth.User object if signed in or null if not
// Please always use isAuthenticated first to check, or remember to handle null

const getUser = () => {
  const user = auth.currentUser;
  return user;
}

// Async function GoogleSignIn starts PopUp Sign in process
// Returns a auth.User object of the user if signed in or null if signed in process failed

const GoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    if (user === null) throw 'User null';
    return user;
  } catch(err){
    const error_msg = String(err);
    Error(`Error while Google Sign In : ${error_msg}`);
    return null;
  }
}

// Async function signOut starts signOut process
// Returns a boolean, true if sign out succeeded

const userSignOut = async () => {
  try{
    await signOut(auth);
    return true;
  } catch (err){
    const error_msg = String(err);
    Error(`Error while Google Sign In : ${error_msg}`);
    return false;
  }
}

export { isAuthenticated, getUser, GoogleSignIn, userSignOut }