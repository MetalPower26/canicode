import React from 'react';

import Image from 'next/image';
import { isAuthenticated, GoogleSignIn, userSignOut } from '@/users/users';

export default function UserButton() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  // componentDidMount for functional React
  React.useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, [])

  const handleSignInClick = async () => {
    const user = await GoogleSignIn();
    if (user !== null) {
      setLoggedIn(true);
    } 
  }

  const handleSignOutClick = async () => {
    const status = await userSignOut();
    if (status === true) {
      setLoggedIn(false);
    }
  }

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
  
  return loggedIn ? signOutButton : signInButton;
}