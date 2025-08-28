import Image from "next/image";

export default function Certificaciones() {
  return (
    <article className="py-8">
      <ul className="flex justify-between items-center w-[90%] mx-auto">
        <li>
          <Image
            src="/home/certificaciones/iram.webp"
            alt="Certificación 3"
            width={100}
            height={100}
            className="w-12 md:w-20"
          />
        </li>

        <li>
          <Image
            src="/home/certificaciones/agc.webp"
            alt="Certificación 1"
            width={100}
            height={100}
            className="w-12 md:w-18"
          />
        </li>

        <li>
          <Image
            src="/home/certificaciones/copime.webp"
            alt="Certificación 2"
            width={100}
            height={100}
            className="w-12 md:w-18"
          />
        </li>

        <li>
          <Image
            src="/home/certificaciones/nfpa.webp"
            alt="Certificación 4"
            width={100}
            height={100}
            className="w-12 md:w-18"
          />
        </li>

        <li>
          <Image
            src="/home/certificaciones/iram.webp"
            alt="Certificación 3"
            width={100}
            height={100}
            className="w-12 md:w-20"
          />
        </li>
      </ul>
    </article>
  );
}
