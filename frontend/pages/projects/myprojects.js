import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { getUserProjects } from "@/uploads/query";
import Link from 'next/link';

export default function MyProjects(){

  const [user, loading, error] = useAuthState(auth);
  const [list, setList] = useState({});

  useEffect(() => {
    if(!loading && user !== null){
      const getProjects = async () => {
        setList(await getUserProjects(user.uid));
      }
      getProjects();
    }
  }, [user, loading]);

  if (loading || user === null) {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <div className="mt-5">
          Please sign in first
        </div>
      </main>
    )
  } else {
    console.log("CHECK");
    console.log("List ", list);
    return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <div className="mt-5 p-6 w-full">
          <ul className="list-disc">
            {
              list.map((uid, entry) => 
                <li key={uid}><Link href={`detail/${uid}`}>{uid}</Link></li>
              )
            }
          </ul>
        </div>
      </main>
    )
  }
}