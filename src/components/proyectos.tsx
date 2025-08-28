import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const proyectos = [
  {
    id: 1,
    title: "Item 1",
    img: "/path/to/image1.jpg",
    icon: "fas fa-star",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Item 2",
    img: "/path/to/image2.jpg",
    icon: "fas fa-heart",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Item 3",
    img: "/path/to/image3.jpg",
    icon: "fas fa-moon",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Item 4",
    img: "/path/to/image4.jpg",
    icon: "fas fa-sun",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Item 5",
    img: "/path/to/image5.jpg",
    icon: "fas fa-cloud",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    title: "Item 6",
    img: "/path/to/image6.jpg",
    icon: "fas fa-bolt",
    color: "bg-indigo-500",
  },
  {
    id: 7,
    title: "Item 7",
    img: "/path/to/image7.jpg",
    icon: "fas fa-leaf",
    color: "bg-pink-500",
  },
  {
    id: 8,
    title: "Item 8",
    img: "/path/to/image6.jpg",
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
            className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-white h-80 w-80 xl:w-75 xl:h-75 hover:scale-105 transition-transform duration-200`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full text-epix-500">
              <Image
                src={proyecto.img}
                alt={proyecto.title}
                width={100}
                height={100}
                className="bg-red-300"
              />

              <p className="p-3">{proyecto.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
