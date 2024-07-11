import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
      <>
       <nav className="flex h-14 justify-between pr-7 pl-3 bg-transparent backdrop-blur-md  text-stone-200 fixed z-10 left-0 right-0 bg-blend-luminosity shadow-zinc-900 shadow-lg"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(190, 0, 0, 0.3), rgba(5, 0, 0, 0.8))',
            }}>
         <div className={"flex items-center justify-center"}>
           <Link href={"/"}>
             <Image src="/flixbg.png" alt={"my logo"} width={143} height={30} />
           </Link>
         </div>
         <div className={"flex"}>
           <ul className={"flex gap-x-10 items-center justify-between "}>
             <li className={"hidden md:flex xl:flex lg:flex hover:animate-pulse hover:scale-x-105 transition-all duration-500"}>
               <Link href={"/"}>
                 Home
               </Link>
             </li>
             <li className={"hidden md:flex xl:flex lg:flex hover:animate-pulse hover:scale-x-105 transition-all duration-500"}>
               <Link href={"/about"}>
                 About
               </Link>
             </li>
             <li className={"hidden md:flex xl:flex lg:flex hover:animate-pulse hover:scale-x-105 transition-all duration-500"}>
               <Link href={"/movie"}>
                 Movies
               </Link>
             </li>
             <li className={"hidden md:flex xl:flex lg:flex hover:animate-pulse hover:scale-x-105 transition-all duration-500"}>
               <Link href={"/contact"}>
                 Contact
               </Link>
             </li>
             <li className={"hidden text-neutral-200 md:flex xl:flex lg:flex hover:animate-pulse hover:scale-x-105 transition-all duration-500"}>
               <Link href={"/what-is-daichiflix"}>
                 ?
               </Link>
             </li>
           </ul>
         </div>
         <div className={"flex items-center justify-center md:hidden lg:hidden xl:hidden"}>
           <Link href={"/hamnav"}>
             <Image src={"/ham.svg"} alt={""} height={28} width={28}/>
           </Link>
         </div>
       </nav>
      </>
  );
};

export default Navbar;