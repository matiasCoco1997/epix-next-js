import emailjs from "emailjs-com";

const useSendMail = () => {
  const sendMail = async (
    formData: ContactFormData,
    emailContactoEpix: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const templateParams = {
      to_name: emailContactoEpix,
      message: `Empresa: ${formData.empresa}\n\nNombre cliente: ${formData.nombre}\n\nCorreo: ${formData.mail}\n\nMensaje: ${formData.mensaje}`,
    };

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );
      console.log("Correo enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      setLoading(false);
    }
  };

  return sendMail;
};

export default useSendMail;
