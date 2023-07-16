import Navbar from "@/components/Navbar"
import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mt-5">
        <h1 className="text-2xl"> Detail : {router.query.id} </h1>
      </div>
    </main>
  )
}