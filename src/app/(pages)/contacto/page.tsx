"use client";
import useSendMail from "@/app/hooks/useSendMail";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Contacto() {
  const emailContactoEpix = "info@epixsrl.com.ar";
  const sendMail = useSendMail();

  useEffect(() => {
    document.title = "Epix - Contacto";
  }, []);

  const [loading, setLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    empresa: "",
    nombre: "",
    mail: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    empresa: "",
    nombre: "",
    mail: "",
    mensaje: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerEnd(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: ContactFormErrors = {
      empresa: "",
      nombre: "",
      mail: "",
      mensaje: "",
    };

    if (!formData.empresa.trim()) {
      newErrors.empresa = "La empresa es requerida";
      isValid = false;
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.mail.trim()) {
      newErrors.mail = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
      newErrors.mail = "El email no es válido";
      isValid = false;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        sendMail(formData, emailContactoEpix, setLoading);
        setFormData({ empresa: "", nombre: "", mail: "", mensaje: "" });
        setLoading(false);
        toast.success("Consulta enviada correctamente");
      }, 2000);
    } else {
      toast.error("Error al enviar la consulta");
    }
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const showSkeleton = !timerEnd || !mapLoaded;

  return (
    <section className="min-h-[72.2dvh] container mx-auto p-4">
      <section className="text-gray-400 body-font relative">
        <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-1 border-gray-100">
            <div className="absolute inset-0">
              {/* Skeleton para el mapa */}
              {showSkeleton && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg flex items-center justify-center z-0">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm">Cargando mapa...</p>
                  </div>
                </div>
              )}

              <iframe
                width="100%"
                height="100%"
                title="map"
                className={`absolute inset-0 ${
                  showSkeleton ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6170743135185!2d-58.56312322341435!3d-34.68961276204091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc61873b446f5%3A0xdd2b15e897cd4680!2sEPIX%20SRL!5e0!3m2!1ses-419!2sar!4v1721933797443!5m2!1ses-419!2sar"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                onLoad={handleMapLoad}
              ></iframe>
            </div>

            {/* Información de contacto - completamente separada del mapa */}
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md z-10">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  DIRECCIÓN
                </h2>
                <p className="mt-1">
                  Balbastro 3696, San Justo, Provincia de Buenos Aires
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-red-400 leading-relaxed"
                  href="mailto:info@epixsrl.com.ar"
                >
                  info@epixsrl.com.ar
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  TELÉFONOS
                </h2>
                <p className="leading-relaxed lg:hidden">
                  011-4651-2770 <br />
                  11-7095-1607
                </p>
                <p className="leading-relaxed hidden lg:block">
                  011-4651-2770 | 11-7095-1607
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-white p-3 rounded-lg"
          >
            <Image
              src="/shared/epix.png"
              alt="Logo Epix"
              className="w-20 m-auto"
              width={200}
              height={200}
            />

            <div className="relative mb-4 mt-2">
              <label
                htmlFor="empresa"
                className="leading-7 text-sm text-gray-500"
              >
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder={errors.empresa || "Ingrese su empresa"}
                className={`w-full rounded border ${
                  errors.empresa
                    ? "border-red-500 placeholder:text-red-600"
                    : "border-gray-300"
                } text-base text-black py-1 px-3 leading-8 focus:outline-none focus:ring-red-300`}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="nombre"
                className="leading-7 text-sm text-gray-500"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder={errors.nombre || "Ingrese su nombre"}
                className={`w-full rounded border ${
                  errors.nombre
                    ? "border-red-500 placeholder:text-red-600"
                    : "border-gray-300"
                } text-base text-black py-1 px-3 leading-8 focus:outline-none focus:ring-red-300`}
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="mail" className="leading-7 text-sm text-gray-500">
                Email
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                placeholder={errors.mail || "Ingrese su email"}
                className={`w-full rounded border ${
                  errors.mail
                    ? "border-red-500 placeholder:text-red-600"
                    : "border-gray-300"
                } text-base text-black py-1 px-3 leading-8 focus:outline-none focus:ring-red-300`}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="mensaje"
                className="leading-7 text-sm text-gray-500"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder={errors.mensaje || "Ingrese su mensaje"}
                className={`w-full rounded border min-h-20 max-h-20 ${
                  errors.mensaje
                    ? "border-red-500 placeholder:text-red-600"
                    : "border-gray-300"
                } text-base text-black py-1 px-3 leading-8 focus:outline-none focus:ring-red-300`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-epix-400 border-0 py-2 px-6 focus:outline-none hover:opacity-90 rounded text-lg cursor-pointer flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
