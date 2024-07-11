import React from 'react';
import VideoOne from "@/app/components/V1";
import VideoTwo from "@/app/components/V2";
import VideoThree from "@/app/components/V3";
import Image from "next/image";
import WatchMoviesButton from "@/app/components/WatchMoviesButton";
import Footer from "@/app/components/Footer";
import Link from "next/link";
const Page = () => {
    return (
        <>
          <div className={"bg-[url('/bg-img.jpg')] bg-opacity-0 bg-cover h-screen w-screen"}>
            <div
                className={"text-white h-screen w-screen flex items-center justify-center px-10 md:px-20 lg:px-20 xl:px-32  border-b-4 border-zinc-900"}
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))',
                }}>
              <div>
                <div className={" text-center text-4xl xl:text-5xl md:text-5xl lg:text-5xl font-bold mt-24"}>
                  Unlimited movies , TV shows and more
                </div>
                <div className={"text-center text-2xl mt-5"}>
                  Select your favourites , Watch Anywhere.
                </div>
                <WatchMoviesButton />
                <div className={"text-center text-md md:text-lg lg:text-lg xl:text-xl mt-5 mb-4"}>
                  Ready to watch? <span className={"text-red-600 font-bold"}>Daichiflix</span> is the ultimate guide to discovering the best shows and movies on Netflix! Enter you Email to get started.
                </div>
                <div className={"grid content-center md:flex lg:flex xl:flex md:items-center md:justify-center "}>
                  <input placeholder={"Email address"}
                         className={"w- flex justify-items-center content-center md:w-1/3 h-12 bg-zinc-900 border px-5 border-gray-500 rounded-md bg-opacity-70"}/>

                    <button
                        className={"mt-5 text-center md:mt-0 lg:mt-0 xl:mt-0 w-2/3 bg-red-700 bg-opacity-80 hover:opacity-80 transition-all duration-300 md:w-1/5 md:ml-2 lg:ml-2 xl:ml-2 rounded-md h-12 font-bold text-xl"}>
                      <Link href={"/movie"}> Get Started </Link>
                    </button>

                </div>
              </div>
            </div>
          </div>

          <div
              className={"text-white w-screen flex items-center justify-center px-20 border-b-8 border-zinc-900 py-20"}>
            <div className={"centering-child flex-row md:flex lg:flex xl:flex items-center justify-center "}>
              <div className={"main-container-1 md:pr-10 lg:pr-10 xl:pr-10  w-auto"}>
                <div className={"text-4xl xl:text-6xl lg:text-5xl md:text-5xl  font-bold"}>Enjoy on your TV</div>
                <div className={"text-lg xl:text-2xl lg:text-xl md:text-xl mt-4"}>Watch on smart TVs, PlayStation, Xbox,
                  Chromecast, Apple TV, Blu-ray
                  players
                  and more.
                </div>
              </div>
              <div className={"main-container-2 mt-10 md:mt-0 lg:mt-0 xl:mt-0"}>
                <VideoOne/>
              </div>
            </div>
          </div>

          <div
              className={"text-white w-screen flex items-center justify-center px-20 border-b-8 border-zinc-900 py-20"}>
            <div className={"centering-child flex-row md:flex lg:flex xl:flex items-center justify-center"}>

              <div className={"main-container-2 mb-10 md:mb-0 lg:mb-0 xl:mb-0"}>
                <VideoTwo/>
              </div>
              <div className={"main-container-1 md:pr-10 lg:pr-10 xl:pr-10  w-auto"}>
                <div className={"text-5xl font-bold"}>Download your shows to watch offline</div>
                <div className={"text-xl mt-4"}>Save your favourites easily and always have something to watch.
                </div>
              </div>
            </div>
          </div>


          <div
              className={"text-white w-screen flex items-center justify-center px-20 border-b-8 border-zinc-900 py-20"}>
            <div className={"centering-child flex-row md:flex lg:flex xl:flex items-center justify-center"}>
              <div className={"main-container-1 md:pr-10 lg:pr-10 xl:pr-10  w-auto"}>
                <div className={"text-5xl font-bold"}>Watch everywhere</div>
                <div className={"text-xl mt-4"}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and
                  TV.
                </div>
              </div>
              <div className={"main-container-2 mt-10 md:mt-0 lg:mt-0 xl:mt-0"}>
                <VideoThree/>
              </div>
            </div>
          </div>

          <div
              className={"text-white w-screen flex items-center justify-center px-20 border-b-8 border-zinc-900 py-20"}>
            <div className={"centering-child flex-row md:flex lg:flex xl:flex items-center justify-center"}>

              <div
                  className={"main-container-2 flex items-center justify-center mb-10 md:mb-0 lg:mb-0 xl:mb-0 md:mr-10 lg:mr-10 xl:mr-10"}>
                <Image src="/home4.png" alt={"my logo"} width={450} height={300}/>
              </div>
              <div className={"main-container-1 md:pr-10 lg:pr-10 xl:pr-10  w-auto"}>
                <div className={"text-5xl font-bold"}>Download your shows to watch offline</div>
                <div className={"text-xl mt-4"}>Save your favourites easily and always have something to watch.
                </div>
              </div>
            </div>
          </div>
          <div className={"text-white w-screen flex items-center justify-center px-20 py-20"}>
            <div className={"centered-child w-screen"}>
              <details className={"bg-neutral-800 mb-2"}>
                <summary
                    className={"grid content-center text-md md:text-2xl lg:text-2xl cursor-pointer h-14 py-2 md:h-16 lg:h-16 bg-neutral-800 px-5  border-b border-black"}>
                  <div className="flex items-center justify-between">
                    <span>What is DaichiFlix ?</span>
                    <span className={"text-3xl"}>+</span>
                  </div>
                </summary>
                <p className={"p-5 md:text-lg lg:text-xl xl:text-xl"}>
                  Daichiflix is the ultimate archive of
                  information on a myriad of shows and movies available on Netflix, complete with direct links for
                  easy access.<br/><br/>
                  Powered by Netflix, which is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
                  documentaries and more – on thousands of internet-connected devices.
                  <br/><br/>
                  You can watch as much as you want, whenever you want, without a single ad – all for one low
                  monthly
                  price. There&#39;s always something new to discover, and new TV shows and movies are added every week!
                </p>
              </details>
              <details className={"bg-neutral-800 mb-2"}>
                <summary
                    className={"grid content-center text-md md:text-2xl lg:text-2xl cursor-pointer h-14 py-2 md:h-16 lg:h-16 bg-neutral-800 px-5  border-b border-black"}>
                  <div className="flex items-center justify-between">
                    <span>How much DaichiFlix costs ?</span>
                    <span className={"text-3xl"}>+</span>
                  </div>
                </summary>
                <p className={"p-5 md:text-lg lg:text-xl xl:text-xl"}>
                  Daichiflix is provided at no cost.<br/><br/>
                  However, to watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device,
                  all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs,
                  no contracts.
                </p>
              </details>
              <details className={"bg-neutral-800 mb-2"}>
                <summary
                    className={"grid content-center text-md md:text-2xl lg:text-2xl cursor-pointer h-14 py-2 md:h-16 lg:h-16 bg-neutral-800 px-5  border-b border-black"}>
                  <div className="flex items-center justify-between">
                    <span>Where can I watch ?</span>
                    <span className={"text-3xl"}>+</span>
                  </div>
                </summary>
                <p className={"p-5 md:text-lg lg:text-xl xl:text-xl"}>
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                  netflix.com from your personal computer or on any internet-connected device that offers the Netflix
                  app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                  <br/><br/> You can also download your favourite shows with the iOS or Android app. Use downloads to
                  watch while you&#39;re on the go and without an internet connection. Take Netflix with you anywhere.
                </p>
              </details>
              <details className={"bg-neutral-800 mb-2"}>
                <summary
                    className={"grid content-center text-md md:text-2xl lg:text-2xl cursor-pointer h-14 py-2 md:h-16 lg:h-16 bg-neutral-800 px-5  border-b border-black"}>
                  <div className="flex items-center justify-between">
                    <span>What can i watch ?</span>
                    <span className={"text-3xl"}>+</span>
                  </div>
                </summary>
                <p className={"p-5 md:text-lg lg:text-xl xl:text-xl"}>
                  Daichiflix offers a compilation of details and hyperlinks to various television shows and films available on Netflix. <br/> <br/>
                  Furthermore, Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals,
                  and more.<br/><br/> Watch as much as you want, anytime you want.
                </p>
              </details>
              <details className={"bg-neutral-800 mb-2"}>
                <summary
                    className={"grid content-center text-md md:text-2xl lg:text-2xl cursor-pointer h-14 py-2 md:h-16 lg:h-16 bg-neutral-800 px-5  border-b border-black"}>
                  <div className="flex items-center justify-between">
                    <span>Is it good for kids ?</span>
                    <span className={"text-3xl"}>+</span>
                  </div>
                </summary>
                <p className={"p-5 md:text-lg lg:text-xl xl:text-xl"}>
                  The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/><br/>
                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </p>
              </details>
            </div>
          </div>
          <Footer />
        </>
    );
};
export default Page;