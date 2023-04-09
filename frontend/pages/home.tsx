import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="flex bg-gray-200 min-h-screen flex-col items-center">
      <Navbar />
      <div className="mt-5">
        <h1 className="text-2xl"> Home </h1>
      </div>
    </main>
  )
}