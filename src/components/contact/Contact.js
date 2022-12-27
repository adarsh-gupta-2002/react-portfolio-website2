import './Contact.css'
import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xrlyljg', 'template_7l1wb65', form.current, 'FJVV6y76BjvsdZOyt')
       
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>adarshgupta9146@gmail.com</h5>
            <a href='mailto:adarshgupta9146@gmail.com' target="_blank" >Send a Message</a>
          </article>


          <article className="contact__option">
            <RiMessengerLine 
            className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>adashgutpa</h5>
            <a target="_blank" href='https://facebook.com' >Send a Message</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp 
            className='contact__option-icon'/>
            <h4>+919167124082</h4>
            <h5>adarshgupta9146@gmail.com</h5>
            <a target="_blank" href='https://api.whatsapp.com/send?phone+919167124082' >Send a Message</a>
          </article>
        </div>

        {/* end of contact options */}
        <form ref = {form} onSubmit ={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="emial" name="email" placeholder='Your Email' required />
          <textarea rows="7" name="message" placeholder='Your Message' required />
          <button type="submit" className="btn btn-primary">Send Message</button>


        </form>

      </div>
    </section>
  )
}

export default Contact
