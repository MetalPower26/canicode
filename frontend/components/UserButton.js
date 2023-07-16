import React from 'react';
import { app, auth } from '@/firebase/firebase';

import Image from 'next/image';
import { GoogleSignIn, userSignOut } from '@/users/users';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function UserButton() {
  const [user, loading, error] = useAuthState(auth);

  const handleSignInClick = async () => {
    const user = await GoogleSignIn();
    console.log(user);
  }

  const handleSignOutClick = async () => {
    const status = await userSignOut();
  }

  const loadingButton = (
    <button
      className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
    >
      <span>Initializing...</span>
    </button>
  )

  const signInButton = (
    <button
      onClick={ handleSignInClick }
      className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
    >
      <Image
        src="/google-logo.png"
        alt="Google Logo"
        width={20}
        height={20}
        className="mr-3"
      />
      <span>Sign in with Google</span>
    </button>
  );

  const signOutButton = (
    <button
      onClick={ handleSignOutClick }
      className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
    >
      <span>Sign out</span>
    </button>
  )

  if(!loading){
    if(user) {
      console.log("Logged in User := " + user.displayName);
    } else {
      console.log("Not logged in");
    }
  }
  
  return loading ? loadingButton : (user ? signOutButton : signInButton);
}