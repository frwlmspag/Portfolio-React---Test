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
          <div className="form_Contents">
            <form ref={form} onSubmit={sendEmail} className='form'>
              <div className="form_Name">
                <label>Name</label> <br />
                <input type="text" name="user_name"/>
              </div>
              <div className="form_Email">
                <label>Email</label> <br />
                <input type="email" name="user_email"/>
              </div>
              <div className="form_Subject">
                <label>Subject</label>  <br /> 
                <input type="subject" name="subject"/>
              </div>
              <div className="form_Message">
                <label>Message</label>  <br />
                <textarea name="message" />
              </div>
              <div className="form_Submit"> <br />
                <input type="submit" value="Sumbit"/>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Form