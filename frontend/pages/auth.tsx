import React from "react";
import firebase from "@/firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Image from 'next/image';
import Navbar from "@/components/Navbar";

export default function Login() {

  function handleSignIn(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(credential === null) throw 'Credential is null';
        const token = credential.accessToken;
        const user = result.user;
        console.log(String(user) + ' has signed in');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error ' + String(errorMessage));
      });
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Sign in with Google</h2>
        <button onClick={ handleSignIn } className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700">
          <Image
            src="../public/google-logo.png"
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </main>
  );
}