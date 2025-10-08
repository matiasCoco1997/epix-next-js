export interface ContactFormData {
  empresa: string;
  nombre: string;
  mail: string;
  mensaje: string;
}

export interface ContactFormErrors {
  empresa: string;
  nombre: string;
  mail: string;
  mensaje: string;
}

export interface ServicioPageProps {
  params: Promise<{
    id: string;
  }>;
}
