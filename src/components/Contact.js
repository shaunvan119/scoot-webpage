import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import Header from "./Header";







const Result = () => {
  return (
    
    <p className="result-msg">Your message has been sent</p>
   
  );
};

const ContactForm = () => {
  const [result, showResult] = useState(false)
 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4aiwmr",
        "template_rer8is9",
        form.current,
        "Fh0Y9YM-DloiKhGif"
      )
      .then(
        (result) => {
          console.log(result.text);
       
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true)
  };

  return (
     <div className="form-section-contactus">
     <Header/>
     <h1 className="contact-us-header">Submit a help request and<br/> we’ll get in touch shortly.</h1>
      <form className="form-contact" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input-contact" type="text" name="user_name" />
        <label>Email</label>
        <input className="input-contact" type="email" name="user_email" />
        <label >Message</label>
        <textarea className="input-contact" name="message" />
        <div> {result ? <Result/> : null}</div>
        <input className="input-button" type="submit" value="Send" />
      </form>
 
   </div> 
  );
};

export default ContactForm;