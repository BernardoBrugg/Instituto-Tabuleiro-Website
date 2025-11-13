import Link from "next/link";
import Image from "next/image";

interface Publication {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
  image: string;
  type: string;
  resume: string;
}

interface CardPublicationsProps {
  publication: Publication;
}

export default function CardPublications({
  publication,
}: CardPublicationsProps) {
  return (
    <Link href={publication.link}>
      <div className="p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl cursor-pointer">
        <Image
          src={publication.image}
          alt={publication.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
          width={400}
          height={192}
        />
        <p className="text-white/60 text-sm mb-2">{publication.type}</p>
        <h3 className="text-white font-semibold mb-2 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
          {publication.title}
        </h3>
        <p className="text-white/80 mb-4 hover:text-white/90 transition-colors duration-500 ease-in-out">
          {publication.resume}
        </p>
        <p className="px-4 py-2 bg-white/10 border border-white/30 rounded-full text-white text-center">
          LER MAIS
        </p>
      </div>
    </Link>
  );
}
