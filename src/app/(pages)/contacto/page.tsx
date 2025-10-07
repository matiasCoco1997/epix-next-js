"use client";
import useSendMail from "@/app/hooks/useSendMail";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Contacto() {
  const emailContactoEpix = "info@epixsrl.com.ar";

  const sendMail = useSendMail();

  useEffect(() => {
    document.title = "Epix - Contacto";
  }, []);

  const [loading, setLoading] = useState(false);

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
        alert("Mensaje enviado correctamente");
      }, 2000);
    }
  };

  return (
    <section className="min-h-[72.2dvh] container mx-auto p-4">
      {loading ? (
        <div role="status" className="flex flex-col items-center w-full">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <h2 className="text-red-600">Enviando mensaje ...</h2>
        </div>
      ) : (
        <section className="text-gray-400 body-font relative">
          <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-1 border-gray-100">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6170743135185!2d-58.56312322341435!3d-34.68961276204091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc61873b446f5%3A0xdd2b15e897cd4680!2sEPIX%20SRL!5e0!3m2!1ses-419!2sar!4v1721933797443!5m2!1ses-419!2sar"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
              ></iframe>
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
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
                <label
                  htmlFor="mail"
                  className="leading-7 text-sm text-gray-500"
                >
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
                className="text-white bg-epix-400 border-0 py-2 px-6 focus:outline-none hover:opacity-90 rounded text-lg cursor-pointer"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      )}
    </section>
  );
}
