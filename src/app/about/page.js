import React from 'react';
import Footer from "@/app/components/Footer";
import WatchMoviesButton from "@/app/components/WatchMoviesButton";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className={"bg-[url('/bg-img.jpg')] bg-opacity-0 bg-cover h-screen w-screen"}>
                <div  className={"text-white h-screen w-screen flex items-center justify-center px-8"}
                      style={{
                        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))',
                      }}>
                  <div className={"centered-div  bg-transparent rounded-xl backdrop-blur-sm bg-blend-luminosity px-2 py-5"}  style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(225, 225, 225, 0.1), rgba(5, 0, 0, 0.8))',
                  }}>
                    <p className={" text-center text-6xl font-bold"}>About Us</p>
                    <div className={"text-sm mt-5 text-center text-neutral-200 md:text-lg lg:text-xl xl:text-2xl"}>
                      Introducing <span className={"text-red-600"}>Daichiflix Archives</span> - your ultimate archive of
                      information on a myriad of shows and movies available on Netflix, complete with direct links for
                      easy access.<br/><br/> Never find yourself at a loss for what to watch next with Daichiflix at
                      your fingertips.
                      Our comprehensive archives are here to confidently guide your viewing choices and ensure you
                      always find the perfect entertainment to suit your mood.<br/><br/> Let Daichiflix be your go-to
                      source for all things Netflix - because with us, indecision is a thing
                      of the past.
                    </div>
                    <WatchMoviesButton />
                    <div className={"flex mt-2 items-center justify-center"}>
                      <Link href={"/what-is-daichiflix"}>
                        <button className={"bg-transparent backdrop-blur-2xl border-2 border-gray-600 text-sm hover:text-red-600 font-bold transition-all duration-1000 px-2 py-3 rounded-lg "}>Why was Daichiflix built ?</button>
                      </Link>
                    </div>
                  </div>
                </div>

            </div>
          <Footer />
        </>
    );
};

export default Page;