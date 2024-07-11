import React from 'react';
import style from './styles/common.module.css';
const Loading = () => {
  return (
      <>
        <div className={"flex items-center justify-center bg-[url('/bg-img.jpg')] bg-opacity-0 bg-cover h-screen w-screen"}>
          <div className={" h-screen w-screen flex items-center justify-center "}
               style={{
                 backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))',
               }}>
            <div className={style.wrapper}>
              <div className={style.circle}></div>
              <div className={style.circle}></div>
              <div className={style.circle}></div>
              <div className={style.shadow}></div>
              <div className={style.shadow}></div>
              <div className={style.shadow}></div>
            </div>
          </div>
        </div>

      </>
  );
};

export default Loading;