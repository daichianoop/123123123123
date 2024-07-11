'use client'

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/app/what-is-daichiflix/utiles";

const ParticleRing = () => {
  return (
      <div className="relative">
        <Canvas
            camera={{
              position: [10, -7.5, -5],
            }}
            style={{ height: "100vh" }}
            className="bg-black"
        >
          <OrbitControls maxDistance={20} minDistance={10} />
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <PointCircle />
        </Canvas>

        <h1 className="text-md md:text-lg lg:text-xl xl:text-3xl xl:mt-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-neutral-200 font-medium text-center pointer-events-none">
          <span className={"text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-red-600 bg-transparent backdrop-blur-sm font-bold"}>Daichiflix </span>is a fullstack project made using
          <span className={"animate-pulse text-2xl md:text-3xl lg:text-4xl xl:text-5xl "}> Next.js </span>and packages like tailwind, mongoose, yarn, dotenv, mongoDB and react-three. This project consists of both server and client components and uses advanced javascript coded on
          <span className={"animate-pulse text-2xl md:text-3xl lg:text-4xl xl:text-5xl  "}> WebStorm IDE.</span>
          <br/> <br/>
          This is my <span className={"text-red-600"}>first</span> Next application that I built while learning Next.js <br/> ....
        </h1>
      </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
      <group ref={ref}>
        {pointsInner.map((point) => (
            <Point key={point.idx} position={point.position} color={point.color} />
        ))}
        {pointsOuter.map((point) => (
            <Point key={point.idx} position={point.position} color={point.color} />
        ))}
      </group>
  );
};

const Point = ({ position, color }) => {
  return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.5}
            color={color}
        />
      </Sphere>
  );
};

export default ParticleRing;
