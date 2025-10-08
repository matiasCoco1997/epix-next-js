import type { Metadata } from "next";
import Ingenierias from "@/components/ingenierias";
import Agua from "@/components/agua";
import Espuma from "@/components/espuma";
import Deteccion from "@/components/deteccion";
import Gases from "@/components/gases";
import Shelters from "@/components/shelters";
import Mantenimientos from "@/components/mantenimientos";
import Skids from "@/components/skids";
import { ServicioPageProps } from "@/lib/interface";

export const metadata: Metadata = {
  title: "Epix - Obras y Servicios",
};

// Metadata dinámica
export default async function ServicioPage({ params }: ServicioPageProps) {
  const { id } = await params;

  console.log(id);

  switch (id) {
    case "ingenieria":
      return <Ingenierias />;

    case "mantenimiento":
      return <Mantenimientos />;

    case "shelters":
      return <Shelters />;

    case "skids":
      return <Skids />;

    case "agua":
      return <Agua />;

    case "espuma":
      return <Espuma />;

    case "deteccion":
      return <Deteccion />;

    case "gases":
      return <Gases />;
  }
}
