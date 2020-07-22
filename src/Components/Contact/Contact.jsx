import React from 'react';
import MyForm from './MyForm'
import Socials from './Socials'

function Contact() {
    
  return (
    <div className='contact-flex'>
       <h1 className="title">Contact</h1>
       <div className='contact-content'>
       <MyForm />
       <Socials />
       </div>
    </div>
  );
}

export default Contact;