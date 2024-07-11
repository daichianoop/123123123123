import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
      <>
        <div className={"text-white px-5 py-3 w-screen "}
             style={{
               backgroundImage: 'linear-gradient(180deg, rgba(225, 225,225, 0.1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1))',
             }}>
          <div className={" flex items-center justify-between"}>
            <div className={"text-2xl font-bold"}>
              Daichiflix Archives .
            </div>
            <div>
              <ul className={"flex items-center gap-x-3 justify-center"}>
                <li className={"size-6 "}>
                  <Link href={"https://www.instagram.com/daichi.anoop/"}>
                    <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"} src={"/instagram.svg"} alt={"1"} width={1000} height={1000}/>
                  </Link>
                </li>
                <li className={"size-6 "}>
                  <Link href={"https://www.linkedin.com/in/anoop-kumar-42b527285"}>
                    <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"} src={"/linkedin.svg"} alt={"1"} width={1000} height={1000}/>
                  </Link>
                </li>
                <li className={"size-6 "}>
                  <Link href={"https://github.com/daichianoop"}>
                    <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"} src={"/github.svg"} alt={"1"} width={1000} height={1000}/>
                  </Link>
                </li>
                <li className={"size-6 "}>
                  <Link href={"/dada"}>
                    <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"} src={"/gmail.svg"} alt={"1"} width={1000} height={1000}/>
                  </Link>
                </li>
                <li className={"size-6 "}>
                  <Link href={"/hbidhbasa"}>
                    <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"} src={"/troll.png"} alt={"1"} width={1000} height={1000}/>
                  </Link>
                </li>
                <li className={"size-6 "}>
                  <Link href={"/"}>
                    <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"} src={"/heart.png"} alt={"1"} width={1000} height={1000}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"text-xs animate-pulse"}>
            by Daichi.anoop
          </div>
          <div className={"text-xs mt-5 text-zinc-400 font-light"}>
            Copyright © 2024 Anoop2005. <span className={"ml-2"}>All Rights Reserved</span>
          </div>
        </div>
      </>
  );
};

export default Footer;