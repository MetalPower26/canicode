import Navbar from "../../components/Navbar"
import TagSidebar from "../../components/TagSidebar"

export default function Projects () {
  return (
    <main className="flex bg-gray-200 min-h-screen flex-col place-items-center">
      <Navbar />
      <div className="flex flex-row my-12 w-4/5 lg:w-11/12 h-100 justify-items-start">
        <div className="flex mr-12 w-52">
          <TagSidebar />
        </div>
        <div className="flex w-72">
          <h1> Content </h1>
        </div>
      </div>
    </main>
  )
}