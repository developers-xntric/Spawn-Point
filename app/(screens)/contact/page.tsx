import React from 'react';
import ContactCTA from '../../components/contact/contact-cta';
import ContactForm from '../../components/contact/contactform';
const Contact:React.FC=()=>{
    return (
        <>
        <div>
            <h1 className=" text-white ">Contact Page</h1>
          <ContactCTA/>
          <ContactForm/>
        </div>
        </>
    )
};
export default Contact;