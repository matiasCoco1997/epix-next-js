"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    {
      id: "obras-servicios",
      label: "Obras y servicios",
      path: "/obras-servicios",
    },
    { id: "nosotros", label: "Nosotros", path: "/nosotros" },
    { id: "contacto", label: "Contacto", path: "/contacto" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="border-b-2 border-epix-500 min-h-[10vh] text-epix-500 bg-white">
      <div
        className={`${
          menuOpen ? "pt-4" : "pt-0"
        } min-h-[10vh] px-4 flex items-center justify-between flex-wrap md:container md:mx-auto`}
      >
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Image
              src="/shared/epix.png"
              alt="Epix Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden hover:bg-gray-100 transition-colors duration-200 !p-0"
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
              className={`hover:underline hover:text-epix-500 hover:bg-white transition-colors cursor-pointer ${
                pathname === item.path
                  ? "text-epix-700 underline hover:bg-white"
                  : "text-epix-500"
              }`}
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
                className={`justify-start transition-all duration-200 transform hover:translate-x-1 pl-0 cursor-pointer ${
                  pathname === item.path
                    ? "text-epix-700 underline"
                    : "hover:underline"
                }`}
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
