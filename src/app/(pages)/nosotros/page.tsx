import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Epix - Nosotros",
};

export default function Nosotros() {
  return (
    <div className="text-epix-400 md:container mx-auto">
      <section className="container mx-auto px-4 pt-8 md:pt-16">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase">
              Sobre Nosotros
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Líderes en <span>Protección Contra Incendios</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Más de tres décadas garantizando la seguridad de empresas e
            industrias con tecnología de vanguardia y compromiso inquebrantable.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14 lg:gap-20">
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl md:text-5xl font-bold  mb-2">30+</div>
            <div className="text-sm md:text-base text-muted-foreground">
              Años de Experiencia
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Shield className="w-10 h-10 md:w-12 md:h-12  mx-auto mb-3" />
            <div className="text-sm md:text-base font-semibold mb-1">
              Certificaciones
            </div>
            <div className="text-xs text-muted-foreground">
              IRAM 3546 e IRAM 3501 3 y 4
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Award className="w-10 h-10 md:w-12 md:h-12  mx-auto mb-3" />
            <div className="text-sm md:text-base font-semibold mb-1">
              Calidad Premium
            </div>
            <div className="text-xs text-muted-foreground">
              Materiales de Alta Gama
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 md:w-12 md:h-12  mx-auto mb-3" />
            <div className="text-sm md:text-base font-semibold mb-1">
              Equipo Experto
            </div>
            <div className="text-xs text-muted-foreground">
              Profesionales Capacitados
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Compromiso con la Excelencia y Seguridad
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Con más de 30 años de experiencia, nos hemos consolidado como
                  líderes en la implementación y mantenimiento de sistemas de
                  protección y detección de incendios, cumpliendo con normas
                  como las NFPA e IRAM, entre otras.
                </p>
                <p>
                  Nuestro equipo de profesionales está altamente capacitado y
                  comprometido con la excelencia. Nos destacamos por ofrecer un
                  servicio personalizado y atento a las necesidades de cada
                  cliente.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6  flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Tecnología de Vanguardia
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos equipos y sistemas de última generación para
                    garantizar máxima protección.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6  flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Materiales Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Solo trabajamos con materiales de alta calidad que aseguran
                    durabilidad y eficiencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Servicio Personalizado</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada proyecto recibe atención dedicada adaptada a sus
                    necesidades específicas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    className="object-cover"
                    src="/nosotros/personal.webp"
                    alt="Personal trabajando con planos"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    className="object-cover"
                    src="/nosotros/personas.webp"
                    alt="Personal recorriendo una industria"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
