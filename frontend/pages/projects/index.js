import Navbar from '../../components/Navbar';

export default function Leaderboard() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mt-5">
        <h1 className="text-2xl"> Leaderboard </h1>
      </div>
    </main>
  )
}