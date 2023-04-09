import Navbar from "../../components/Navbar"
import TagSidebar from "../../components/TagSidebar"

function Content () {
  return (
    <div className="flex flex-col bg-white rounded-md h-full w-full p-2 lg:border-r">
      <h1 className="font-2xl"> Content </h1>
    </div>
  )
}

export default function Projects () {
  return (
    <main className="flex bg-gray-200 min-h-screen flex-col place-items-center">
      <Navbar />
      <div className="flex flex-row my-6 lg:my-12 w-11/12 h-100 justify-items-start">
        <div className="flex mr-6 lg:mr-12 w-40">
          <TagSidebar />
        </div>
        <div className="flex grow">
          <Content />
        </div>
      </div>
    </main>
  )
}