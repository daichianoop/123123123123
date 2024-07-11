import Link from "next/link";

const WatchMoviesButton = () => {
  return (
      <>
        <div className={"flex justify-center"}>
          <Link href={"/movie"}>
            <button
                className="mt-5 hover:bg-neutral-300 hover:text-black active:translate-y-0.5 bg-transparent rounded-lg backdrop-blur-xl bg-blend-luminosity py-2 px-3 border-2 border-zinc-600">
              Browse Entertainment
            </button>
          </Link>
        </div>
      </>
  );
};

export default WatchMoviesButton;