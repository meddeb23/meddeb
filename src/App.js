import { useEffect, useRef, useState } from "react";
import { NavBar } from "./components";
import { FiExternalLink } from "react-icons/fi";
import projects from "./data/project.json";

function App() {
  // useEffect(() => {

  // })

  return (
    <div className="dark ">
      <div className="dark:bg-[#181a1b] dark:text-[#e8e6e3]">
        <main className="max-w-2xl mx-auto p-4 ">
          <Hero />
          <About />
          <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="xl-title">Projects</h1>
            <div
              className="flex flex-col gap-10
          "
            >
              {projects.map(
                ({ title, description, type, image, link }, idx) => (
                  <div
                    key={title + idx}
                    className="flex flex-col gap-4 sm:flex-row bg-slate-100 rounded-xl p-4 dark:bg-[#1e2021]"
                  >
                    {image && (
                      <img
                        src={image[0]}
                        className="object-cover sm:w-2/5"
                        alt=""
                      />
                    )}
                    <div>
                      <h1 className="font-bold text-3xl capitalize">{title}</h1>
                      <h2 className="capitalize font-normal text-lg">{type}</h2>
                      <p className="text-sm sm:pr-28 mt-4">{description}</p>
                      {link && (
                        <a
                          href={link.github}
                          className="flex justify-start items-center gap-1 w-fit hover:border-[#181a1b] dark:hover:border-white border-transparent border-b-2 capitalize mt-4 text-xl "
                        >
                          <span>github</span> <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <Contact />
        </main>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section>
      <NavBar />
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
        <h1 className="xl-title">👋 Hello,</h1>
        <h1 className="xl-title">I'm Mohamed ali</h1>
        <h1 className="xl-title">
          and I am a <span className="box px-2 py-1">fullstack web</span>{" "}
          developer
        </h1>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-4">
      <p className="font-semibold text-xl sm:text:3xl">
        I’m a software engineer student/freelancer specializing in building (and
        occasionally designing) exceptional digital experiences.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="">
      <h1 className="xl-title">ARE YOU MINDING A PROJECT?</h1>
      <a
        href="mailto:meddeb2468@gmail.com"
        className="box cursor- font-semibold p-2 block align text-xl"
      >
        Contact Me
      </a>
      <div className="flex gap-8 justify-center items-center mt-4">
        <a
          href="http://"
          className="font-bold text-xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="http://github.com/meddeb23"
          className="font-bold text-xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.fiverr.com/meddeb23"
          className="font-bold text-xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiverr
        </a>
      </div>
    </section>
  );
}

export default App;
