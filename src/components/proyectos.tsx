import Link from "next/link";

const proyectos = [
  {
    id: 1,
    title: "Ingenierías y auditorias",
    img: "/home/proyectos/",
    icon: "fas fa-star",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Servicios de mantenimiento",
    img: "/home/proyectos/",
    icon: "fas fa-heart",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Shelters sala de bombas",
    img: "/home/proyectos/shelter-icon.webp",
    icon: "fas fa-moon",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Skids sala de bombas",
    img: "/home/proyectos/skids-icon.webp",
    icon: "fas fa-sun",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Sistemas de extinción por agua",
    img: "/home/proyectos/",
    icon: "fas fa-cloud",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    title: "Sistemas de extinción por espuma",
    img: "/home/proyectos/",
    icon: "fas fa-bolt",
    color: "bg-indigo-500",
  },
  {
    id: 7,
    title: "Sistemas de detección y aviso de incendio",
    img: "/home/proyectos/detection-icon.webp",
    icon: "fas fa-leaf",
    color: "bg-pink-500",
  },
  {
    id: 8,
    title: "Sistemas de extinción por gases",
    img: "/home/proyectos/co2-icon.webp",
    icon: "fas fa-gem",
    color: "bg-teal-500",
  },
];

export default function Proyectos() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-8 justify-items-center xl:gap-6">
        {proyectos.map((proyecto) => (
          <Link
            href={`/proyectos/${proyecto.id}`}
            key={proyecto.id}
            className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-white h-80 w-80 xl:w-60 xl:h-60 hover:scale-105 transition-transform duration-200`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full text-epix-500">
              <div className="flex items-center justify-center border-2 border-epix-300 rounded-full w-20 h-20 bg-red-100 p-3">
                <img
                  src={proyecto.img}
                  alt={proyecto.title}
                  className="w-10 h-auto max-h-9"
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
