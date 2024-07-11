import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import Footer from "@/app/components/Footer";
const  Page = async () => {

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=152&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '730b6136ddmshb6300b304345b18p11b810jsn98395d2982ab',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };
  await new Promise(resolve => setTimeout(resolve, 2000));

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  const main_data = data.titles;

    return (
        <>
          <div className={"bg-[url('/bg-img.jpg')] bg-opacity-0 bg-cover h-screen w-screen "}>
            <div  className={"text-white h-screen w-screen grid content-center  px-20 border-b-4 border-zinc-900  shadow-neutral-700 shadow-2xl"}
                  style={{
                    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))',
                  }}>
              <div>
                <p className={" text-center text-6xl font-bold"}>Movies and Shows</p>
                <div className={"text-center text-xl mt-5"}>
                  <span className={"text-red-600 font-bold"}>Unsure about</span> what to watch next ?
                  <br/>Below is an archive of <span className={"text-red-600 font-bold"}>movies and shows.</span>
                </div>
              </div>
            </div>
          </div>

          <section className={"px-10"} id={"selection-panel"}>
          <h1 className={"text-white text-5xl my-10 w-auto animate-pulse text-center"}>Daichiflix Archives</h1>
            <div className={"lg:flex lg:flex-wrap lg:justify-around "}>
              {
                main_data.map((curElem) => {
                  return <MovieCard key={curElem.id} {...curElem} />
                })
              }
            </div>
          </section>
          <Footer />
        </>
    );
};

export default Page;