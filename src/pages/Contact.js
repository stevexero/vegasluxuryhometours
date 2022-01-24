import { motion } from 'framer-motion';

import './Contact.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className='Contact'
    >
      <div className='Contact-container'>
        <h1 className='cinzel-regular-56 text-dark-silver'>Contact Us</h1>
        <form>
          <input type='text' name='name' required placeholder='Name' />
          <input type='email' name='email' required placeholder='Email' />
          <input type='text' name='subject' placeholder='Subject' />
          <textarea name='message' required placeholder='Message'></textarea>
          <button className='alfa-slab-one-18'>SEND</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
