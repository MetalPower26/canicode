import React from "react";
import firebase from "../firebase/firebase";

import Image from 'next/image';
import Navbar from "@/components/Navbar";

const auth = firebase.auth();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {

  const signInWithGoogle = async () => {
    try {
        await auth.signInWithPopup(GoogleAuthProvider);
        console.log("Success");
    } catch (err) {
        Error("Failed to log in");
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Sign in with Google</h2>
        <button onClick={ signInWithGoogle } className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700">
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