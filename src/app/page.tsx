import Proyectos from "@/components/proyectos";
import Carousel from "@/components/ui/carousel";

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
    </>
  );
}
