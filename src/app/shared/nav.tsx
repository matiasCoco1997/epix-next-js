"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const pathname = usePathname(); // Usa directamente pathname

  const menuItems = [
    { id: "home", label: "Inicio", path: "/" },
    {
      id: "obras-servicios",
      label: "Obras y servicios",
      path: "/obras-servicios",
    },
    { id: "nosotros", label: "Nosotros", path: "/nosotros" },
    { id: "contacto", label: "Contacto", path: "/contacto" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const getLinkClassName = (itemPath: string) => {
    if (!isClient) {
      return "text-epix-400 hover:underline hover:text-epix-400 underline-offset-4 hover:bg-gray-100 transition-colors cursor-pointer";
    }

    // Lógica mejorada para detectar rutas activas
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

    return `hover:underline hover:text-epix-400 underline-offset-4 hover:bg-gray-100 transition-colors cursor-pointer ${
      isActive ? "text-epix-700 underline hover:bg-gray-100" : "text-epix-400"
    }`;
  };

  const getMobileLinkClassName = (itemPath: string) => {
    if (!isClient) {
      return "justify-start transition-all duration-200 transform hover:translate-x-1 pl-0 cursor-pointer hover:underline";
    }

    // Misma lógica para mobile
    let isActive = false;

    if (itemPath === "/") {
      isActive = pathname === "/";
    } else if (itemPath === "/obras-servicios") {
      isActive =
        pathname === itemPath || pathname.startsWith("/obras-servicios/");
    } else {
      isActive = pathname === itemPath;
    }

    return `justify-start transition-all duration-200 transform hover:translate-x-1 pl-0 cursor-pointer ${
      isActive ? "text-epix-700 underline" : "hover:underline"
    }`;
  };

  return (
    <nav className="border-b-2 border-epix-400 min-h-[10vh] text-epix-400">
      <div
        className={`${
          menuOpen ? "pt-4" : "pt-0"
        } min-h-[10vh] px-4 flex items-center justify-between flex-wrap md:container md:mx-auto`}
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/shared/epix.png"
              alt="Epix Logo"
              width={120}
              height={120}
              className="w-16 h-auto md:w-20 md:h-auto lg:w-26 lg:h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden hover:!bg-gray-100 transition-colors duration-200 !p-0"
            variant="ghost"
          >
            {menuOpen ? (
              <X className="!w-6 !h-6" />
            ) : (
              <Menu className="!w-6 !h-6" />
            )}
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              asChild
              className={getLinkClassName(item.path)}
            >
              <Link href={item.path}>{item.label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out 
            ${
              menuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 mt-0 hidden"
            }
          `}
        >
          <div className="flex flex-col gap-3 py-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                asChild
                className={getMobileLinkClassName(item.path)}
              >
                <Link href={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
