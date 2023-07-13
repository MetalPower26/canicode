import firebase from "../firebase/firebase";

import Image from 'next/image';
import Navbar from "@/components/Navbar";

export default function Login() {

  const signInWithGoogle = async () => {
    const auth = firebase.auth();
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(GoogleAuthProvider);
      const user = result.user;
    } catch (err) {
      Error("Failed to log in");
    }
  };
  
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-4/5 bg-neutral-50 border border-neutral-300 rounded p-8">
        <h2 className="text-3xl font-bold mb-6">Sign in with Google</h2>
        <button
          onClick={ signInWithGoogle }
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
      </div>
    </main>
  );
}