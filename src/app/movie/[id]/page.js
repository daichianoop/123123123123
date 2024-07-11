import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const Page = async ({params}) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '730b6136ddmshb6300b304345b18p11b810jsn98395d2982ab',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
      <>
        <div className={"text-white pt-16 px-2"}>
          <h2 className={"text-4xl text-red-700 font-bold mb-4"}>Netflix.<span
              className={"text-2xl text-white animate-pulse"}>{main_data.type}</span></h2>
          <div className={"image-centering-div flex items-center justify-center "}>
            <div className={"w-3/4 shadow-rose-950 shadow-2xl lg:w-1/2"}>
              <Image src={main_data.backgroundImage.url} alt={main_data.title} width={2000} height={1200}/>
            </div>
          </div>
            <div className={"px-2"}>
              <div className={"pt-4 flex items-center justify-center"}>
                <div>
                  <h1 className={"text-4xl mb-3"}>{main_data.title}</h1>
                  <p>{main_data.synopsis}</p>
                    <div className={"text-xl p-4 mt-4"}>
                      <div
                          className={"mt-2 md:text-2xl lg:text-2xl xl:text-2xl font-bold w-auto gap-x-1 flex items-center justify-center text-red-700 "}>
                        <div>{main_data.numSeasonsLabel} | </div>
                        <div>{main_data.episodeCount}</div>
                      </div>
                      <div className={"mt-2 text-sm md:text-2xl lg:text-2xl xl:text-2xl w-auto gap-x-5 flex items-center justify-center "}>
                        <div><span className={" text-red-700 font-bold"}>Released :</span> {main_data.releaseYear}</div>
                        <div><span className={" text-red-700 font-bold"}>Quality :</span> {main_data.delivery.quality}</div>
                        <div>{main_data.maturity.rating.value}</div>
                      </div>
                      <div className={"text-sm md:text-2xl lg:text-2xl xl:text-2xl mt-2 w-auto gap-x-5 flex items-center justify-center"}>
                        <span
                            className={" text-red-700 font-bold"}>Genre :</span> {main_data.genres[0].name} , {main_data.genres[1].name}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          <div className={" w-auto flex justify-center items-center"}>
            <Link href={`https://www.netflix.com/in/title/${id}`}>
              <button className={"active:translate-y-0.5 transition-all duration-500 hover:shadow-2xl hover:shadow-red-950 border-2 bg-cover bg-[url('/bg-img.jpg')] w-64 mt-7 mb-10 p-3 text-xl font-bold text-neutral-200 border-white rounded-lg "}>Watch on Netflix</button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Page;