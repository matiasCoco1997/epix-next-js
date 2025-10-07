import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Epix - Nosotros",
};

export default function Nosotros() {
  return (
    <>
      <section className="flex justify-center items-center container mx-auto">
        <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 md:py-0 lg:px-6 h-full">
          <div className="font-light sm:text-lg">
            <h2 className="mb-4 text-xl md:text-3xl xl:text-4xl tracking-tight font-extrabold text-epix-400 tracking-in-expand">
              SOBRE NOSOTROS
            </h2>

            <p className="mb-3 fade-in-fwd">
              Con más de 30 años de experiencia, nos hemos consolidado como
              líderes en la implementación y mantenimiento de sistemas de
              protección y detección de incendios, cumpliendo con normas como
              las NFPA e IRAM, entre otras.
            </p>
            <p className="fade-in-fwd">
              Nuestro equipo de profesionales está altamente capacitado y
              comprometido con la excelencia. Nos destacamos por ofrecer un
              servicio personalizado y atento a las necesidades de cada cliente.
              Utilizamos tecnología avanzada y materiales de alta calidad para
              garantizar la durabilidad y eficiencia de nuestros sistemas,
              proporcionando tranquilidad y confianza en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 fade-in-fwd">
            <Image
              className="rounded-lg w-[80%] ml-[20%]"
              src="/nosotros/personal.webp"
              alt="Personal trabajando con planos"
              width={500}
              height={500}
            />

            <Image
              className="mt-4 lg:mt-10 rounded-lg w-[80%] mr-[20%]"
              src="/nosotros/personas.webp"
              alt="Personal recorriendo una industria"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
