import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import IgLogo from '../assets/ig.png';

import './Footer.css';

const url =
  'https://lasvegasluxuryhometours.us14.list-manage.com/subscribe/post?u=4162acfdfb221e625d155873c&amp;id=9aa38a9c41';

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <footer className='Footer ptb-84'>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div className='Footer-head'>
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
            {status === 'sending' && (
              <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === 'success' && (
              <div style={{ color: 'green' }}>Subscribed !</div>
            )}
            <input type='text' placeholder='JOIN OUR MAILING LIST' />
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                  type: 'spring',
                },
              }}
              className='btn-footer alfa-slab-one-18'
            >
              SUBSCRIBE
            </motion.button>
          </div>
        )}
      />
      <div className='Footer-body ptb-84'>
        <div className='Footer-body-left'>
          <h3 className='rajdhani-bold-18 text-white'>FOLLOW US!</h3>
          <a
            href='https://www.instagram.com/lasvegasluxuryhometours/'
            target='_blank'
            rel='noreferrer'
            className='mt-16'
          >
            <img src={IgLogo} alt='instagram' width='29px' />
          </a>
        </div>
        <div className='Footer-body-center'>
          <h3 className='rajdhani-bold-18 text-white'>COMPANY</h3>
          <Link to='/about' className='montserrat-light-14 text-white mt-16'>
            About
          </Link>
        </div>
        <div className='Footer-body-right'>
          <h3 className='rajdhani-bold-18 text-white'>SUPPORT</h3>
          <Link to='/contact' className='montserrat-light-14 text-white mt-16'>
            Contact
          </Link>
          <br />
          <Link to='/attributions' className='montserrat-light-14 text-white'>
            Attributions
          </Link>
        </div>
      </div>
      <div className='Footer-foot'>
        <p className='mt-32 montserrat-light-14 text-white'>
          COPYRIGHT &copy; 2021 {isMobile ? <br /> : '-'} VEGAS LUXURY HOME
          TOURS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// {/* <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/4162acfdfb221e625d155873c/a64af4ada2df3097ab262451f.js");</script> */}

// // <!-- Begin Mailchimp Signup Form -->
// {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css"> */}
// {/* <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// // </style> */}
// {/* <div id="mc_embed_signup"> */}
// {/* <form action="https://lasvegasluxuryhometours.us14.list-manage.com/subscribe/post?u=4162acfdfb221e625d155873c&amp;id=9aa38a9c41" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> */}
//     // <div id="mc_embed_signup_scroll">

// {/* <div class="mc-field-group"> */}
// 	// <label for="mce-EMAIL">Email Address </label>
// 	// <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// // </div>
// 	// <div id="mce-responses" class="clear foot">
// 		// <div class="response" id="mce-error-response" style="display:none"></div>
// 		// <div class="response" id="mce-success-response" style="display:none"></div>
// 	// </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     // <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4162acfdfb221e625d155873c_9aa38a9c41" tabindex="-1" value=""></div>
//         // <div class="optionalParent">
//             // <div class="clear foot">
//                 // <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
//                 // <p class="brandingLogo"><a href="http://eepurl.com/hUgp9z" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"></a></p>
//             // </div>
//         // </div>
//     // </div>
// // </form>
// // </div>
// {/* <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script> */}
// // <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// // <!--End mc_embed_signup--></link>
