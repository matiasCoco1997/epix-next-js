import Proyectos from "@/components/proyectos";
import Carousel from "@/components/ui/carousel";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epix - Home",
  description: "Conozca más sobre nuestra empresa",
};

export default function Home() {
  return (
    <>
      <section className="content-center text-center">
        <Carousel>
          <div className="min-h-[90vh] bg-gradient-to-r from-epix-400 to-epix-500 flex items-center justify-center rounded-none">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold">Slide 1</h2>
              <p className="text-xl mt-2">Contenido del primer slide</p>
            </div>
          </div>

          <div className="min-h-[90vh] bg-gradient-to-r from-epix-400 to-epix-500 flex items-center justify-center rounded-none">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold">Slide 2</h2>
              <p className="text-xl mt-2">Contenido del segundo slide</p>
            </div>
          </div>

          <div className="min-h-[90vh] bg-gradient-to-r from-epix-400 to-epix-500 flex items-center justify-center rounded-none">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold">Slide 3</h2>
              <p className="text-xl mt-2">Contenido del tercer slide</p>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="container mx-auto">
        <article>
          <h1 className="text-center py-8 text-epix-500 text-2xl font-bold title-font mx-5 md:mx-0">
            Confianza y tranquilidad frente al fuego
          </h1>

          <Proyectos />
        </article>
      </section>

      <section className="container mx-auto">
        <article className="py-8">
          <h2 className="text-center py-8 text-epix-500 text-2xl font-bold title-font mx-5 md:mx-0">
            Certificaciones
          </h2>

          <ul className="flex justify-between items-center w-[90%] mx-auto">
            <li>
              <Image
                src="/home/certificaciones/iram.webp"
                alt="Certificación 3"
                width={100}
                height={100}
                className="w-12 md:w-20"
              />
            </li>

            <li>
              <Image
                src="/home/certificaciones/agc.webp"
                alt="Certificación 1"
                width={100}
                height={100}
                className="w-12 md:w-18"
              />
            </li>

            <li>
              <Image
                src="/home/certificaciones/copime.webp"
                alt="Certificación 2"
                width={100}
                height={100}
                className="w-12 md:w-18"
              />
            </li>

            <li>
              <Image
                src="/home/certificaciones/nfpa.webp"
                alt="Certificación 4"
                width={100}
                height={100}
                className="w-12 md:w-18"
              />
            </li>

            <li>
              <Image
                src="/home/certificaciones/iram.webp"
                alt="Certificación 3"
                width={100}
                height={100}
                className="w-12 md:w-20"
              />
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
