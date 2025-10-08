import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epix - Obras y Servicios",
};

const proyectos = [
  {
    title: "Ingenierías, auditorías y capacitaciones",
    img: "/proyectos/Ingenierias/ingenierias.png",
    url: "ingenieria",
  },

  {
    title: "Servicios de mantenimiento",
    img: "/proyectos/Mantenimiento/1-servicios.png",
    url: "mantenimiento",
  },

  {
    title: "Shelters sala de bombas",
    img: "/proyectos/Shelters/shelter1.png",
    url: "shelters",
  },

  {
    title: "Skids sala de bombas",
    img: "/proyectos/Skids/463-VenadoTuerto.png",
    url: "skids",
  },

  {
    title: "Sistemas de extinción por agua",
    img: "/proyectos/Agua/1-ecas.png",
    url: "agua",
  },

  {
    title: "Sistemas de extinción por espuma",
    img: "/proyectos/Espuma/1-camara-de-espuma.png",
    url: "espuma",
  },

  {
    title: "Sistemas de detección y aviso de incendio",
    img: "/proyectos/Deteccion/pulsador.png",
    url: "deteccion",
  },

  {
    title: "Sistemas de extinción por gases",
    img: "/proyectos/Gas/1-bateria-de-tubos.png",
    url: "gases",
  },
];

export default function ObrasyServicios() {
  return (
    <>
      <div className="w-full md:container mx-auto my-4">
        <section className="p-4 md:p-0 flex flex-wrap gap-4 justify-around">
          {proyectos.map((proyecto, idx) => (
            <Link
              key={idx}
              href={`/obras-servicios/${proyecto.url}`}
              className="bg-white w-84 h-60 rounded-lg flex items-center flex-col shadow-lg md:m-3 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-full h-[80%]">
                <Image
                  src={proyecto.img}
                  alt={proyecto.title}
                  width={400}
                  height={300}
                  quality={100}
                  className="rounded-t-lg w-full h-auto"
                />
              </div>

              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center w-full content-center text-lg text-epix-400 font-semibold z-10 bg-white ">
                  {proyecto.title}
                </p>
              </div>
            </Link>
          ))}
          <div className="hidden xl:block w-84 h-60 m-3 2xl:hidden"></div>
        </section>
      </div>
    </>
  );
}
