"use client";

import type { Proyecto } from "@/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Flame, ArrowRight, Sparkles, Navigation } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Mantenimientos() {
  const router = useRouter();

  const ingenierias: Proyecto[] = [
    {
      img: "/proyectos/Mantenimiento/4-curva-de-bomba.png",
      titulo: "Curva de rendimiento sistema de bombeo",
      subtitulo: "Planta Bunge Tancacha",
      texto:
        "Se miden y analizan las curvas de rendimiento de los sistemas de bombeo para asegurar que operen dentro de los parámetros especificados, optimizando así la eficiencia y confiabilidad del sistema.",
      icon: Flame,
    },

    {
      img: "/proyectos/Mantenimiento/2-prueba-final-de-linea.png",
      titulo: "Prueba final de línea",
      subtitulo: "Planta Arauco Puerto Esperanza",
      texto:
        "Se realizan pruebas exhaustivas para verificar que los sistemas de tuberías y dispositivos de final de línea funcionen correctamente, asegurando la integridad del sistema y la pronta respuesta en caso de emergencia.",
      icon: Flame,
    },

    {
      img: "/proyectos/Mantenimiento/5-limpieza-detectores.png",
      titulo: "Limpieza y mantenimiento sistema de detección",
      subtitulo: "Edificio Wintershall Dea Argentina",
      texto:
        "Se realiza la limpieza y mantenimiento preventivo de los sistemas de detección y aviso de incendio, asegurando que estén en perfecto estado para detectar cualquier amenaza de manera oportuna y precisa.",
      icon: Flame,
    },

    {
      img: "/proyectos/Mantenimiento/3-analisis-de-espuma.png",
      titulo: "Análisis de espuma",
      subtitulo: "Planta Arauco Puerto Esperanza",
      texto:
        "Se ofrece un análisis detallado de la calidad y efectividad de los sistemas de espuma contra incendios, garantizando su cumplimiento con las normas de seguridad y su desempeño óptimo en la supresión de incendios.",
      icon: Flame,
    },
  ];

  const buttons = [
    { url: "/obras-servicios/ingenieria", label: "Ingeniería" },
    { url: "/obras-servicios/mantenimiento", label: "Mantenimiento" },
    { url: "/obras-servicios/shelters", label: "Shelters" },
    { url: "/obras-servicios/skids", label: "Skids" },
    { url: "/obras-servicios/agua", label: "Extinción por agua" },
    { url: "/obras-servicios/espuma", label: "Extinción por espuma" },
    {
      url: "/obras-servicios/deteccion",
      label: "Detección y aviso de incendio",
    },
    { url: "/obras-servicios/gases", label: "Extinción por gases" },
  ];

  const handleSectionChange = (value: string) => {
    router.push(`${value}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-epix-400/10 via-epix-500/8 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(225_37_27/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgb(141_30_19/0.12),transparent_50%)]" />

        <div className="relative mx-auto container flex">
          <div className="xl:w-[60%]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-epix-400/30 bg-epix-400/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="size-4 text-epix-400" />
              <span className="text-sm font-medium text-epix-500">
                Expertos en Protección Contra Incendios
              </span>
            </div>

            <h1 className="text-balance font-sans text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Servicios de
              <br />
              <span className="bg-gradient-to-r from-epix-500 via-epix-400 to-epix-500 bg-clip-text text-transparent">
                Mantenimiento
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Soluciones integrales en protección contra incendios con los más
              altos estándares de la industria
            </p>

            <div className="mt-10 max-w-md">
              <div className="group relative rounded-xl border border-epix-400/30 bg-gradient-to-br from-epix-400/5 via-background to-epix-500/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-epix-400/50 hover:shadow-lg hover:shadow-epix-400/10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-epix-500/0 via-epix-400/5 to-epix-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-epix-400/10 transition-colors duration-300 group-hover:bg-epix-400/20">
                      <Navigation className="size-4 text-epix-500" />
                    </div>
                    <span className="text-sm font-semibold text-epix-500">
                      Navegar a otras categorías
                    </span>
                  </div>

                  <Select onValueChange={handleSectionChange}>
                    <SelectTrigger
                      id="category-select"
                      name="category"
                      className="h-12 w-full border-epix-400/40 bg-background/50 text-foreground font-medium shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-epix-400/60 hover:bg-epix-400/5 focus:ring-2 focus:ring-epix-400/20"
                    >
                      <SelectValue placeholder="Selecciona una categorías" />
                    </SelectTrigger>
                    <SelectContent className="border-epix-400/30">
                      {buttons.map((button) => (
                        <SelectItem
                          key={button.url}
                          value={button.url}
                          className="cursor-pointer transition-colors hover:bg-epix-400/10 focus:bg-epix-400/10 focus:text-epix-500"
                        >
                          {button.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block bg-green-300 xl:w-[40%] content-center text-center">
            IMAGEN DE INGENIERIA
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {ingenierias.map((item, idx) => {
              const Icon = item.icon || Flame;
              return (
                <Card
                  key={idx}
                  className="group relative overflow-hidden border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-epix-400/20 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-epix-400/8 via-transparent to-epix-500/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-epix-500 to-epix-400 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                    <div className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-epix-400/95 text-white shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-epix-400 group-hover:shadow-epix-400/50">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  <CardContent className="relative p-6">
                    <h3 className="mb-4 text-balance font-sans text-2xl font-bold tracking-tight text-card-foreground transition-colors duration-300 group-hover:text-epix-500 md:text-3xl">
                      {item.titulo}
                    </h3>

                    <p className=" text-pretty leading-relaxed text-muted-foreground">
                      {item.texto}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border px-6 py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-epix-500/5 via-background to-epix-400/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(225_37_27/0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-epix-400/30 bg-epix-400/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="size-4 text-epix-400" />
            <span className="text-sm font-medium text-epix-500">
              Consultoría Personalizada
            </span>
          </div>

          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            ¿Necesitas asesoría especializada?
          </h2>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Nuestro equipo de expertos está listo para ayudarte con soluciones
            personalizadas
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="group gap-2 bg-epix-400 text-white hover:bg-epix-400 hover:opacity:90 shadow-lg shadow-epix-400/30 w-40 cursor-pointer"
              >
                Contactar ahora
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/obras-servicios">
              <Button
                size="lg"
                variant="outline"
                className="shadow-sm bg-transparent border-epix-400/30 text-epix-500 hover:bg-epix-400/10 w-40 cursor-pointer"
              >
                Ver proyectos
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-epix-400 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
