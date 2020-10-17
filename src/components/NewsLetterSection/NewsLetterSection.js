import React, {useState} from 'react';
import './Newsletter.css';
import underlineIcon from "./underline.svg";
import rectPat from './rect-pat.svg'
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';


function NewsletterSection() {
    let [isSending, setisSending] = useState(false);
    let [message, setmessage] = useState("");

    
    const { ref, inView } = useInView({
        threshold: 0,
      });
    function sendEmail(e) {
        setisSending(true);
        e.preventDefault();
    
        emailjs.sendForm('service_wq6qi4o', 'template_r42rb9n', e.target, 'user_cpsp7zkNQPoOzcoqiGUhA')
          .then((result) => {
            setisSending(false);
            setmessage("Thank you! We have sucessfully recieved you email!");

          }, (error) => {
              setisSending(false);
            setmessage("Error! " + error.text );
          });
    }
  return (
      <div  ref={ref} >
          {inView && <motion.section transition={{delay: 0.5, duration: 1}} initial={{opacity:0}} animate={{opacity: 1}} id="NewsletterSection" className="lax" data-lax-preset="fadeIn"
            
        
            >
                
                <div className="news-heading-container">
                    <h1>Subscribe Newsletter</h1>
                    <img src={underlineIcon} alt=''></img>
                </div>
               
               <form  className="news-input-container" onSubmit={sendEmail}>
                    <input type="email" name="from_email" required placeholder="Your Email..."></input>
                    <button type="submit">Subscribe</button>
               </form>
               <div className="formMessage">
                   
                       {
                           isSending && 
                            <AnimatePresence>
                                <motion.p
                                transition={{delay: 0, duration: 0.5}}
                                exit={{ opacity: 0 }}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                >Sending Email...</motion.p>
                            </AnimatePresence>                           
                       }
                       {

                            (!isSending) && 
                            <AnimatePresence>
                                <motion.p
                                transition={{delay: 0, duration: 0.5}}
                                exit={{ opacity: 0 }}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                            >{message}</motion.p>
                            </AnimatePresence>
                       }
                   
                   
               </div>

               <div className="news-pattern">
                   <img src={rectPat} alt=""></img>
               </div>
            </motion.section>
          
          
          }
      </div>
        
  );
}

export default NewsletterSection;