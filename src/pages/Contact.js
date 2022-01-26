import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0koyfdt',
        'template_59a48wq',
        e.target,
        'user_67oyDEuLNPieupKQUpBr7'
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
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className='Contact'>
      <div className='Contact-container'>
        <div className='Contact-top'>
          <h1 className='cinzel-regular-56 text-dark-silver'>Contact Us</h1>
        </div>
        <div className='Contact-bottom'>
          <div className='Contact-left'>
            <form onSubmit={sendEmail}>
              <input type='text' name='name' required placeholder='Name' />
              <input type='email' name='email' required placeholder='Email' />
              <input type='text' name='subject' placeholder='Subject' />
              <textarea
                name='message'
                required
                placeholder='Message'></textarea>
              <button className='alfa-slab-one-18'>SEND</button>
            </form>
          </div>
          <div className='Contact-right'>Phone number, email</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
