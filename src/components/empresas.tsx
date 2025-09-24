"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const squares = [
  { img: "/home/clientes/arauco.webp" },
  { img: "/home/clientes/bunge.webp" },
  { img: "/home/clientes/cocacola.webp" },
  { img: "/home/clientes/gilera.webp" },
  { img: "/home/clientes/liliana.webp" },
  { img: "/home/clientes/lomaNegra.webp" },
  { img: "/home/clientes/p&g.webp" },
  { img: "/home/clientes/pepsico.webp" },
  { img: "/home/clientes/siderca.webp" },
  { img: "/home/clientes/tersuave.webp" },
  { img: "/home/clientes/ypf.webp" },

  { img: "/home/clientes/arauco.webp" },
  { img: "/home/clientes/bunge.webp" },
  { img: "/home/clientes/cocacola.webp" },
  { img: "/home/clientes/gilera.webp" },
  { img: "/home/clientes/liliana.webp" },
  { img: "/home/clientes/lomaNegra.webp" },
  { img: "/home/clientes/p&g.webp" },
  { img: "/home/clientes/pepsico.webp" },
  { img: "/home/clientes/siderca.webp" },
  { img: "/home/clientes/tersuave.webp" },
  { img: "/home/clientes/ypf.webp" },
];

export default function Empresas() {
  const [translateX, setTranslateX] = useState(0);
  const [squaresVisible, setSquaresVisible] = useState(5);
  const [squareWidth, setSquareWidth] = useState(20);
  const originalSquaresCount = 11;

  useEffect(() => {
    const updateSquaresCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSquaresVisible(3);
        setSquareWidth(34);
      } else if (width < 768) {
        setSquaresVisible(2);
        setSquareWidth(50);
      } else if (width < 1024) {
        setSquaresVisible(3);
        setSquareWidth(33.33);
      } else if (width < 1280) {
        setSquaresVisible(4);
        setSquareWidth(25);
      } else {
        setSquaresVisible(5);
        setSquareWidth(20);
      }
    };

    updateSquaresCount();
    window.addEventListener("resize", updateSquaresCount);
    return () => window.removeEventListener("resize", updateSquaresCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const moveDistance = squareWidth;
        const newTranslateX = prev - moveDistance;

        if (Math.abs(newTranslateX) >= originalSquaresCount * squareWidth) {
          return 0;
        }
        return newTranslateX;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [squareWidth, originalSquaresCount]);

  return (
    <>
      <hr className="bg-epix-300 h-0.5 w-[95%] mx-auto" />

      <article className="relative mx-auto overflow-hidden pb-8 px-4 w-[90%] md:w-[95%]">
        <h2 className="text-epix-400 text-center font-light text-xl md:text-2xl pt-6">
          Empresas que confian en nosotros
        </h2>
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {squares.map((square, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-1"
              style={{ width: `${squareWidth}%` }}
            >
              <div
                className={`w-full h-25 sm:h-32 md:h-40 lg:h-35 flex items-center justify-center text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-lg pt-4`}
              >
                <Image
                  src={square.img || "/placeholder.svg"}
                  alt={`Logo de ${square.img}`}
                  width={200}
                  height={100}
                  quality={90}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
