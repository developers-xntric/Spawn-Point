import React from 'react';
import ContactCTA from '../../components/contact/contact-cta';
import ContactForm from '../../components/contact/contactform';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Spawn Point Studio | Let’s Build Gaming Experiences",
  description:
    "Partner with Spawn Point Studio for expert in-game marketing and brand activations. Contact our creative agency today to start building your next big campaign.",
};

const Contact: React.FC = () => {
  return (
    <>
      <div>
        <ContactCTA />
        <ContactForm />
      </div>
    </>
  )
};
export default Contact;