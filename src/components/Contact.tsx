import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-col-2'>
        <div className='contact-space'>
            <h2 className='contact-heading' data-aos="zoom-in-up">Get in touch</h2>
            <p className='contact-text' data-aos="zoom-in-up">
                Drop me a line, give me a call or send a message by submitting the form.
            </p>
            <div className='contact-flex' data-aos="zoom-in-up">
            <AiOutlineMail size={30}/> ramsha.tahir23@gmail.com
            </div>
            <div className='contact-flex' data-aos="zoom-in-up">
            <BsTelephone size={30}/> +92-332-1234567
            </div>
        </div>
        <div className='contact-space'>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type='text'
                className=''
                id='name'/>
            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type='text'
                className=''
                id='email'/>
            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='msg'>Message</label>
                <textarea
                className='textarea-field'
                id='message' rows={8}>
                </textarea>
            </div>
            <button className='button' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact