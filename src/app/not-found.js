import React from 'react';
import Link from "next/link";

const NotFound = () => {
  return (
      <div>
        <div className={"bg-[url('/bg-img.jpg')] bg-opacity-0 bg-cover h-screen w-screen"}>
          <div className={"text-white h-screen w-screen flex items-center justify-center px-20"}
               style={{
                 backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
               }}>
            <div>
              <p className={" text-center text-6xl font-bold"}>Page not found. <br/>
                <span className={"text-3xl"}>Error 404</span>
              </p>
              <div  className={"flex mt-5 py-20 bg bg-black items-center justify-center"}>
                <Link href="/">
                  <button
                      className="group cursor-pointer w-32 h-32 bg-red-600 active:bg-black group-active:bg-black rounded-full border-4 border-black flex relative items-center justify-center duration-300 transition-all hover:w-[8.4rem] hover:h-[8.4rem] ease-in-out">
                    <div
                        className="absolute border-b-4 border-black w-full group-active:border-red-600 group-active:border-[2px]"></div>
                    <div
                        className="absolute border-b-4 border-black w-full rotate-45 group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-b-4 border-black w-full rotate-90 group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-b-4 border-black w-full -rotate-45 group-active:border-red-600 group-active:border-[1px]"></div>

                    <div
                        className="absolute border-4 border-black w-4 h-4 bg-red-500 rounded-full group-active:bg-black"></div>
                    <div
                        className="absolute border-[.2rem] border-black w-8 h-8 bg-transparent rounded-full group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-[.2rem] border-black w-12 h-12 bg-transparent rounded-full group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-[.2rem] border-black w-16 h-16 bg-transparent rounded-full group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-[.2rem] border-black w-20 h-20 bg-transparent rounded-full group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-[.2rem] border-black w-24 h-24 bg-transparent rounded-full group-active:border-red-600 group-active:border-[1px]"></div>
                    <div
                        className="absolute border-[.2rem] border-black w-28 h-28 bg-transparent rounded-full group-active:border-red-600 group-active:border-[1px]"></div>
                    <div className="flex space-x-4 z-0">
                      <div
                          className="bg-white w-12 h-12 rotate-45 border-t-[.6rem] border-b-[.4rem] border-l-8 border-r-2 border-black after:border-3 after:border-black rounded-full group-hover:border-t-[1rem] group-hover:border-b-[.6rem] group-active:border-red-600 group-active:border-y-[.4rem] group-active:border-x-[.1rem]">
                        <div className="border-b-3 border-black"></div>
                      </div>
                      <div
                          className="bg-white w-12 h-12 -rotate-45  border-t-[.6rem] border-b-[.4rem] border-l-[.1rem] border-r-8 border-black after:border-3 after:border-black rounded-full group-hover:border-t-[1rem] group-hover:border-b-[.6rem] group-active:border-red-600 group-active:border-y-[.4rem] group-active:border-x-[.1rem]">
                        <div className="border-b-3 border-black"></div>
                      </div>
                    </div>

                    <div className="invisible absolute -top-14 group-hover:visible transition-all duration-200 delay-400">
                      <div
                          className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 w-12 h-12 rotate-[25deg] left-4 top-2">
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -left-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -left-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -left-2  top-8"></div>
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -right-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -right-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -right-2  top-8"></div>
                      </div>

                      <div
                          className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 w-12 h-12 -rotate-[25deg] -left-16 top-2">
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -left-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -left-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -left-2  top-8"></div>
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -right-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -right-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -right-2  top-8"></div>
                      </div>

                      <div
                          className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 w-12 h-12 -rotate-[60deg] -left-[6.7rem] top-[3rem]">
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -left-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -left-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -left-2  top-8"></div>
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -right-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -right-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -right-2  top-8"></div>
                      </div>

                      <div
                          className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 w-12 h-12 rotate-[60deg] left-[3.6rem] top-[3rem]">
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -left-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -left-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -left-2  top-8"></div>
                        <div className="absolute w-10 h-10 bg-black rounded-sm animate-spin -right-4 -top-4"></div>
                        <div className="absolute w-8 h-8 bg-black rounded-sm animate-spin -right-4 top-2"></div>
                        <div className="absolute w-4 h-4 bg-black rounded-sm animate-spin -right-2  top-8"></div>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NotFound;