import React from "react";

export default function Navbar() {
  return (
    <header className="p-4 fixed w-full top-0 left-0 bg-white dark:bg-[#181a1b]">
      <nav className="flex justify-between items-center max-w-2xl mx-auto ">
        <Logo />
        <ul className="flex gap-4 justify-center items-center">
          <MenuItem active>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Project</MenuItem>
          <MenuItem>Contact</MenuItem>
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
