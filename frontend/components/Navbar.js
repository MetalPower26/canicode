import { useState } from "react";
import Link from "next/link";
import UserButton from "./UserButton";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  const menuDiv = `${isOpen ? 'h-44' : 'h-0'} w-full transition-all ease-out duration-500 h-0 flex-grow lg:transition-none lg:h-8 lg:flex lg:items-center lg:w-auto`;
  const navList = `${isOpen ? 'block' : 'hidden'} mt-4 lg:mx-5 text-xl lg:inline-block lg:mt-0 text-teal-light hover:text-white mr-4`
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className="flex m-0 min-w-full items-center justify-between flex-wrap bg-teal p-5">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src="/canicode.png" alt="logo" width={40} height={40} />
        <span className="font-semibold text-2xl tracking-tight ml-2">Canicode</span>
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
          <Link href="/" className={navList}>
            Home
          </Link>
          <Link href="/projects" className={navList}>
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