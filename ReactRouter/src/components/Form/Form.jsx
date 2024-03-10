import './form.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f07vfnk', 'template_2pns934', form.current, {
        publicKey: 'g-L7_D-9t5Qkpc8yD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form_Maincontainer">
        <div className="form_Header">
            <header>HIRE ME!</header>
        </div>
        <div className="form_Container">
          <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Subject</label>
          <input type="subject" name="subject" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Sumbit" />
          </form>
        </div>
    </div>
  )
}

export default Form