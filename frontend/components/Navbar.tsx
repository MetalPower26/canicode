import { useState } from "react";
import Link from "next/link";
import UserButton from "./UserButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  const menuDiv = `${isOpen ? 'h-44' : 'h-0'} w-full transition-all ease-out duration-500 h-0 flex-grow lg:transition-none lg:h-8 lg:flex lg:items-center lg:w-auto`;
  const navList = `${isOpen ? 'block' : 'hidden'} mt-4 lg:mx-5 text-lg lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-4`
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className="flex m-0 min-w-full items-center justify-between flex-wrap bg-sky-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-2xl tracking-tight">Canicode</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={handleHamburger} className="flex flex-col h-11 w-11 my-0 border-2 border-sky-200 rounded justify-center items-center group">
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
      <div className={menuDiv}>
        <div className="text-sm lg:flex-grow">
          <Link href="#responsive-header" className={navList}>
            Home
          </Link>
          <Link href="#responsive-header" className={navList}>
            Projects
          </Link>
          <Link href="#responsive-header" className={navList}>
            Information
          </Link>
        </div>
        <div>
          <div className={`${isOpen ? 'inline-block' : 'hidden'} lg:inline-block`}>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  )
}