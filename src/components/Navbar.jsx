import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isopen, setisopen] = useState(true);
  return (
    <header className="p-4 fixed w-full top-0 left-0 bg-white dark:bg-[#181a1b]">
      <nav className="flex justify-between items-center max-w-2xl mx-auto ">
        <Logo />
        <div
          className="text-white sm:hidden dark:text-black text-xl p-2 bg-white dark:bg-white rounded-md"
          onClick={() => setisopen(true)}
        >
          <AiOutlineMenu />
        </div>
        <ul className="hidden sm:flex gap-4 justify-center items-center">
          <MenuItem active>
            <a href="#home">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="#about">About</a>
          </MenuItem>
          <MenuItem>
            <a href="#project">Project</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact">Contact</a>
          </MenuItem>
        </ul>
        <ul
          onClick={() => setisopen(false)}
          style={{
            transform: isopen ? "translateX(0)" : "translateX(100%)",
          }}
          className="fixed transition-transform left-0 p-4 bg-[#181a1b] h-screen w-screen top-0  sm:hidden gap-4 items-end flex flex-col"
        >
          <div
            className="text-white mb-8 dark:text-black text-xl p-2 bg-white w-fit dark:bg-white rounded-md"
            onClick={() => setisopen(false)}
          >
            <AiOutlineClose />
          </div>
          <div className=" flex flex-col flex-auto gap-4  items-start pr-8">
            <MenuItem active>
              <a href="#home">Home</a>
            </MenuItem>
            <MenuItem>
              <a href="#about">About</a>
            </MenuItem>
            <MenuItem>
              <a href="#projects">Projects</a>
            </MenuItem>
            <MenuItem>
              <a href="#contact">Contact</a>
            </MenuItem>
          </div>
        </ul>
      </nav>
    </header>
  );
}

function MenuItem({ children, active }) {
  return <li className={active ? "p-2 box w-fit " : "MenuItem"}>{children}</li>;
}

function Logo() {
  return (
    <div className="box p-2 font-bold ">
      <span>Mohamed ali</span>
    </div>
  );
}
