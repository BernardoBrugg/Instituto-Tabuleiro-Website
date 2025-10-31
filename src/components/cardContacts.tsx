import React from "react";

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
      <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
      <p className="text-white/80 mb-2">{contact.role}</p>
      <p className="text-white/80 mb-2">Email: {contact.email}</p>
    </div>
  );
};

export default CardContacts;
