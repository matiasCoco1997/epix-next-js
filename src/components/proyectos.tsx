import Link from "next/link";

const proyectos = [
  {
    id: 1,
    title: "Ingenierías y auditorias",
    img: "/home/proyectos/pencil.webp",
  },
  {
    id: 2,
    title: "Servicios de mantenimiento",
    img: "/home/proyectos/tool.webp",
  },
  {
    id: 3,
    title: "Shelters sala de bombas",
    img: "/home/proyectos/shelter-icon.webp",
  },
  {
    id: 4,
    title: "Skids sala de bombas",
    img: "/home/proyectos/skids-icon.webp",
  },
  {
    id: 5,
    title: "Sistemas de extinción por agua",
    img: "/home/proyectos/water.webp",
  },
  {
    id: 6,
    title: "Sistemas de extinción por espuma",
    img: "/home/proyectos/foam-icon.webp",
  },
  {
    id: 7,
    title: "Sistemas de detección y aviso de incendio",
    img: "/home/proyectos/detection-icon.webp",
  },
  {
    id: 8,
    title: "Sistemas de extinción por gases",
    img: "/home/proyectos/co2-icon.webp",
  },
];

export default function Proyectos() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-8 justify-items-center xl:gap-6">
        {proyectos.map((proyecto) => (
          <Link
            href={`/proyectos/${proyecto.id}`}
            key={proyecto.id}
            className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-white h-70 w-70 xl:w-70 xl:h-60 hover:scale-105 transition-transform duration-200`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full text-epix-500">
              <div className="flex items-center justify-center border-2 border-epix-300 rounded-full w-20 h-20 bg-red-100 p-3">
                <img
                  src={proyecto.img}
                  alt={proyecto.title}
                  className="w-auto h-7 max-w-9"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="p-3 font-semibold text-center text-xl">
                {proyecto.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
