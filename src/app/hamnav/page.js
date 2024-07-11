import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
      <>
        <div className={"bg-[url('/bg-img.jpg')] bg-opacity-0 bg-cover h-screen w-screen"}>
          <div
              className={"text-white h-screen w-screen flex pt-24 justify-center px-10 md:px-20 lg:px-20 xl:px-32  border-b-4 border-zinc-900"}
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))',
              }}>
            <div className={"w-screen"}>
              <div className="text-center py-5 bg-transparent backdrop-blur-md bg-blend-luminosity w-auto rounded-xl"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(225, 225, 225, 0.1), rgba(5, 0, 0, 0.8))',
                  }}>
                <Link href={"/"}>
                  <div className={"text-2xl text-neutral-200 hover:bg-black hover:bg-opacity-30 hover:translate-y-0.5 active:translate-y-1 py-2 "}>Home</div>
                </Link>
                <Link href={"/about"}>
                  <div className={"text-2xl text-neutral-200 hover:bg-black hover:bg-opacity-30 hover:translate-y-0.5 active:translate-y-1 py-2 "}>About</div>
                </Link>
                <Link href={"/movie"}>
                  <div className={"text-2xl text-neutral-200 hover:bg-black hover:bg-opacity-30 hover:translate-y-0.5 active:translate-y-1 py-2 "}>Movies</div>
                </Link>
                <Link href={"/contact"}>
                  <div className={"text-2xl text-neutral-200 hover:bg-black hover:bg-opacity-30 hover:translate-y-0.5 active:translate-y-1 py-2 "}>Contact</div>
                </Link>
                <Link href={"/what-is-daichiflix"}>
                  <div className={"text-2xl text-neutral-200 hover:bg-black hover:bg-opacity-30 hover:translate-y-0.5 active:translate-y-1 py-2 "}>What is Daichiflix ?</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Page;