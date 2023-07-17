import Navbar from "@/components/Navbar"
import { CreateForm } from '@/components/ProjectForm'
import { auth } from "@/firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Upload() {
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <div className="mt-5">
          <h1 className="text-2xl mb-5"> Upload Initializing...</h1>
        </div>
      </main>
    )
  } else if (user) {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <div className="mt-5 p-6 w-full">
          <CreateForm />
        </div>
      </main>
    )
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <div className="mt-5">
          <h1 className="text-2xl mb-5">Please Login First</h1>
        </div>
      </main>
    )
  }
}