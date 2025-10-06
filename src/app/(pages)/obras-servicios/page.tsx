import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epix - Obras y Servicios",
};

const proyectos = [
  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },

  {
    titulo: "",
    img: "",
  },
];

export default function ObrasyServicios() {
  return (
    <>
      <div className="container mx-auto">
        <section className="p-4 flex flex-wrap gap-4 justify-center h-full">
          {proyectos.map((proyecto, idx) => (
            <article
              key={idx}
              className="bg-red-300 w-[90%] md:w-[40%] lg:w-[20%] h-80"
            ></article>
          ))}
        </section>
      </div>
    </>
  );
}
