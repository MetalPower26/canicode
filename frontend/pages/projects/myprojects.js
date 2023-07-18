import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { getUserProjects } from "@/uploads/query";

export default function MyProjects(){

  const [user, loading, error] = useAuthState(auth);
  let list = [];

  useEffect(async () => {
    
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mt-5">
        
      </div>
    </main>
  )
}