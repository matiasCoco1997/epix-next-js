"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const date: number = new Date().getFullYear();

  const getLinkClassName = (itemPath: string) => {
    let isActive = false;

    if (itemPath === "/") {
      // Para la página de inicio, solo activa si es exactamente "/"
      isActive = pathname === "/";
    } else if (itemPath === "/obras-servicios") {
      // Para obras-servicios, activa para cualquier subruta
      isActive =
        pathname === itemPath || pathname.startsWith("/obras-servicios/");
    } else {
      // Para otras rutas, comparación exacta
      isActive = pathname === itemPath;
    }

    return `mr-4 cursor-pointer underline-offset-4 ${
      isActive ? "underline" : "hover:underline"
    }`;
  };

  return (
    <footer className="bg-black text-center content-center min-h-[10vh] text-gray-500">
      <div className="flex flex-col md:items-end justify-center gap-4 my-4 container mx-auto px-3 md:flex-row md:flex-wrap md:justify-between">
        <div className="w-auto text-start">
          <Image
            src="/shared/epix.png"
            alt="EPIX Logo"
            width={120}
            height={120}
            className="w-20 h-auto md:w-20 md:h-auto lg:w-26 lg:h-auto"
          />
        </div>
        <div className="text-start flex items-center text-sm w-auto">
          <Link href="/" className={getLinkClassName("/")}>
            Inicio
          </Link>

          <Link
            href="/obras-servicios"
            className={getLinkClassName("/obras-servicios")}
          >
            Obras y Servicios
          </Link>

          <Link href="/nosotros" className={getLinkClassName("/nosotros")}>
            Nosotros
          </Link>

          <Link href="/contacto" className={getLinkClassName("/contacto")}>
            Contacto
          </Link>
        </div>

        <div className="w-full flex md:justify-end items-center">
          <Link
            href="https://www.linkedin.com/company/epix-srl/posts/?feedView=all"
            className="cursor-pointer"
          >
            <svg
              className="w-8 h-8 fill-gray-500 hover:fill-gray-300 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
            </svg>
          </Link>

          <Link
            href="https://www.youtube.com/@epixsrl1884"
            className="cursor-pointer"
          >
            <svg
              className="w-8 h-8 fill-gray-500 hover:fill-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
            </svg>
          </Link>
        </div>

        <hr className="w-full border-t border-gray-500" />
        <p className="block text-sm text-center w-full">
          © {date} EPIX SRL - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
