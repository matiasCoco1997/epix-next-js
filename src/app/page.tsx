import Proyectos from "@/components/proyectos";
import Carousel from "@/components/ui/carousel";
import type { Metadata } from "next";
import Certificaciones from "@/components/certificaciones";
import Empresas from "@/components/empresas";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Epix - Home",
  description: "Conozca más sobre nuestra empresa",
};

export default function Home() {
  return (
    <>
      <section className="content-center text-center relative">
        <article className="absolute inset-0 flex items-center justify-center md:justify-end z-10 w-full md:w-[90%]">
          <div className="text-white text-start md:pr-10 w-[70%] md:w-[90%]">
            <Image
              src="/shared/epix.png"
              alt="EPIX Logo"
              width={120}
              height={120}
              className="w-20 h-auto md:w-30 md:h-auto lg:w-35 lg:h-auto"
            ></Image>

            <p className="text-base mt-2">
              Contamos con más de 30 años de experiencia en el rubro de sistemas
              de extinción y detección de incendios.
            </p>

            <p className="text-base mt-2">
              Proveemos un servicio profesional de alta calidad, respaldado por
              las certificaciones IRAM 3501 3 y 4 e IRAM 3546.
            </p>

            <p className="text-base mt-2">
              Somos un equipo especializado en todas las etapas: diseño,
              fabricación, montaje y mantenimiento de sistemas de protección
              contra incendio.
            </p>

            <Link href="/contacto" className="mt-6  py-2">
              <Button className="cursor-pointer bg-epix-400 hover:bg-epix-400 hover:scale-105 text-white px-8 mt-4 py-5 w-[90%] md:w-[15%]">
                Contactanos
              </Button>
            </Link>
          </div>
        </article>

        {/* TODO falta agregar las imagenes para el celular, porque estas se ven horribles */}
        <Carousel>
          <div className="min-h-[90dvh] flex items-center justify-center rounded-none">
            <Image
              src="/home/banner1.webp"
              alt="EPIX Logo"
              width={1500}
              height={1500}
              quality={100}
              priority
              className="w-full h-[90dvh]"
            ></Image>
          </div>

          <div className="min-h-[90dvh] flex items-center justify-center rounded-none">
            <Image
              src="/home/banner2.webp"
              alt="EPIX Logo"
              width={1500}
              height={1500}
              quality={100}
              priority
              className="w-full h-[90dvh]"
            ></Image>
          </div>

          <div className="min-h-[90dvh] flex items-center justify-center rounded-none">
            <Image
              src="/home/banner3.webp"
              alt="EPIX Logo"
              width={1500}
              height={1500}
              quality={100}
              priority
              className="w-full h-[90dvh]"
            ></Image>
          </div>
        </Carousel>
      </section>

      <section className="container mx-auto">
        <article>
          <h1 className="text-center py-8 text-epix-400 text-2xl font-bold title-font mx-5 md:mx-0">
            Confianza y tranquilidad frente al fuego
          </h1>

          <Proyectos />
        </article>
      </section>

      <section className="container mx-auto">
        <Certificaciones />
      </section>

      <section className="container mx-auto">
        <Empresas />
      </section>
    </>
  );
}
