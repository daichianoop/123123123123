import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {
  const {id , type , title , synopsis} = curElem.jawSummary;
  return (
      <>
        <div className="movie-card text-white bg-zinc-900 rounded-xl w-auto lg:w-2/5 p-4 mb-4">
          <div className="movie-card-image shadow-red-950 shadow-2xl">
            <Image src={curElem.jawSummary.backgroundImage.url} alt=" ...err.. Image not found." width={2000} height={1100} />
          </div>
          <div className="movie-card-title flex-row mt-2">
            <h2 className={"text-2xl"}><span className={"text-red-700 font-bold"}>{type}</span> | {title}
            </h2>
            <p className={"h-20"}>{synopsis.substring(0,122)} ...</p>
            <Link href={`/movie/${id}`}>
              <div className={"flex items-center justify-center"}>
                <button className={"active:translate-y-0.5 hover:bg-neutral-500 hover:text-black transition-all duration-500 bg-black text-red-700 font-bold py-3 px-5 mt-5 shadow-gray-600 shadow-2xl"}>
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </>
  );
};

export default MovieCard;