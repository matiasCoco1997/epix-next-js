import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Epix - Obras y Servicios",
};

const proyectos = [
  {
    titulo: "Ingenierías, auditorías y capacitaciones",
    img: "/proyectos/Ingenierias/ingenierias.png",
  },

  {
    titulo: "Servicios de mantenimiento",
    img: "/proyectos/Mantenimiento/1-servicios.png",
  },

  {
    titulo: "Shelters sala de bombas",
    img: "/proyectos/Shelters/shelter1.png",
  },

  {
    titulo: "Skids sala de bombas",
    img: "/proyectos/Skids/463-VenadoTuerto.png",
  },

  {
    titulo: "Sistemas de extinción por agua",
    img: "/proyectos/Agua/1-ecas.png",
  },

  {
    titulo: "Sistemas de extinción por espuma",
    img: "/proyectos/Espuma/1-camara-de-espuma.png",
  },

  {
    titulo: "Sistemas de detección y aviso de incendio",
    img: "/proyectos/Deteccion/pulsador.png",
  },

  {
    titulo: "Sistemas de extinción por gases",
    img: "/proyectos/Gas/1-bateria-de-tubos.png",
  },
];

export default function ObrasyServicios() {
  return (
    <>
      <div className="w-full md:container mx-auto my-4">
        <section className="p-4 md:p-0 flex flex-wrap gap-4 justify-around">
          {proyectos.map((proyecto, idx) => (
            <article
              key={idx}
              className="bg-white w-84 h-60 rounded-lg flex items-center flex-col shadow-lg md:m-3 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-full h-[80%]">
                <Image
                  src={proyecto.img}
                  alt={proyecto.titulo}
                  width={400}
                  height={300}
                  quality={100}
                  className="rounded-t-lg w-full h-auto"
                />
              </div>

              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center w-full content-center text-lg text-epix-400 font-semibold z-10 bg-white ">
                  {proyecto.titulo}
                </p>
              </div>
            </article>
          ))}
          <div className="hidden xl:block w-84 h-60 m-3 2xl:hidden"></div>
        </section>
      </div>
    </>
  );
}
