import React from "react";
import Image from "next/image";

interface Contact {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

interface CardContactsProps {
  contact: Contact;
}

const CardContacts: React.FC<CardContactsProps> = ({ contact }) => {
  return (
      <div>
        <div className="w-full h-48 relative rounded-lg mb-4 overflow-hidden">
          <Image
            src={contact.image}
            alt={contact.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
        <p className="text-white/80 mb-2">{contact.role}</p>
        <p className="text-white/80 mb-2">Email: {contact.email}</p>
        <p className="text-white/80">Telefone: {contact.phone}</p>
      </div>
  );
};

export default CardContacts;