import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
// import ParticleBackground from "../components/particle/Particles";

const Main = () => {
  return (
    <>
      {/* <ParticleBackground /> */}
      <main>

        <div className="sm:px-8 mt-40 min-h-screen">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="max-w-2xl mx-auto lg:max-w-5xl">
                <div className="grid grid-cols-1 lg:gap-x-20 gap-0 lg:grid-cols-5 ">
                  <div className="max-w-2xl lg:col-span-3">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-400 dark:text-zinc-100 sm:text-5xl lg:text-5xl">
                      I help <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
                        companies 
                        </span> to 2x their achievement rates by developing {" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                        {" "}
                        quality software{" "}
                      </span>{" "}
                      with{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                        {" "}
                        appealing user interfaces
                      </span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose sm:text-xs text-zinc-600 dark:zinc-400">
                      Hi, I am Hassan Azhar, a software engineer with a passion
                      for creating innovative and user-centric applications.
                      With over five years of experience in developing web and
                      mobile applications, I specialize in building scalable and
                      high-performing software solutions that meet the unique
                      needs of clients and end-users.
                    </p>
                    <div>
                      <Link
                        href="https://www.linkedin.com/in/hassan-azhar-633b7434/"
                        target="_blank"
                        className="inline-flex items-center gap-2 mt-6 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 "
                      >
                        Hire me
                      </Link>
                    </div>
                    <div className="flex gap-6 mt-10 ">
                      <Link href="https://www.linkedin.com/in/hassan-azhar-633b7434/" target="_blank" className="p-1 -m-1 ">
                        <FaLinkedin className="w-6 h-6 transition text-zinc-500 hover:fill-teal-300 " />
                      </Link>
                      <Link target="_blank" href="https://twitter.com/hassanazharkhan" className="p-1 -m-1 ">
                        <FaTwitter className="w-6 h-6 transition fill-zinc-500 hover:fill-teal-300 " />
                      </Link>
                      <Link target="_blank" href="https://github.com/hassanazharkhan" className="p-1 -m-1 ">
                        <GrGithub className="w-6 h-6 transition fill-zinc-500 hover:fill-teal-300 " />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
};
export default Main;