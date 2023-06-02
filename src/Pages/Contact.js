import styles from './Contact.module.css'
import emailjs, { send, sendForm } from '@emailjs/browser'
import { useRef } from 'react';
import { useState } from 'react';
import PigeonMap from '../Elements/PigeonMap';

function Contact() {

    const [message, setMessage] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_c7v7e2w'
        const templateID = 'template_2z3i6rk'
        const publicKey = 'wBGfTr7_R-MzX399d'

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                result = 'Email sent!'
                setMessage(result)
                e.target.reset()

            }, (error) => {
                 error = 'Email not sent, please try another contact font'
                setMessage(error)
            })
    }
    return(
        <div className={styles.ContactContainer}>
            <h1 id='contact'>Contact Me</h1>
            <div className={styles.ContactMap}>
               
            <div className={styles.contactForm}>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                    <li>
                     <h3 className={styles.Message}>Send me a message :D</h3>
                    </li>
                        <div className={styles.half}>
                        <li>
                            <input type='text' 
                            name='user_name'
                            placeholder='Put your name here' 
                            required 
                            className={styles.nameEmail} />
                        </li>
                        <li>
                            <input 
                            type='email'
                            name='user_email'
                            placeholder='Put your email here'
                            required
                            className={styles.nameEmail}
                            />
                        </li>
                        </div>
                        <li>
                            <input placeholder='Subject' 
                            type='text' 
                            name='user_subject' 
                            required 
                            className={styles.subject}/>
                        </li>
                        <li>
                            <textarea placeholder='Leave your message here'
                            name='message'
                            required
                            className={styles.textArea}>
                           
                            </textarea>
                        </li>
                        <li>
                            <input type='submit'
                            className={styles.submitBtn}
                            value='Send'
                            />
                        </li>
                        <li>
                            <h5 className={styles.returnMessage}>{message}</h5>
                        </li>
                    </ul>
                </form>
                
            </div>
            <div className={styles.leafMap}>
                    <PigeonMap/>
                </div>
            </div>
        </div>
    )
}

export default Contact