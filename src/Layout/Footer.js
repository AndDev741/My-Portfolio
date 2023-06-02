import styles from './Footer.module.css'
import Navbar from './Navbar'
import { FaLinkedin, FaGithub, FaStackOverflow, FaHandPointUp   } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-scroll'

function Footer() {
    return(
        <div className={styles.FooterContainer}>
            <h4 id='footer' className={styles.MadeZero}>Made from zero and with love by AndDev</h4>
            <h4>Copyright © 2023 <span className={styles.footerSpan}>-AndDev</span> </h4>
            <div className={styles.contactFooter}>
                <a href='https://www.linkedin.com/in/anddev-%E3%83%84-b9915b275/?locale=en_US' target='_blank'> <FaLinkedin/> </a>
                <a href='https://github.com/AndDev741' target='_blank'> <FaGithub/> </a>
                <a href='https://stackoverflow.com/users/21897255/%e3%83%84and' target='_blank'> <FaStackOverflow/> </a>
                <a href='mailto:anddesenvolved@gmail.com?' target='_blank'> <AiOutlineMail/> </a>
                <Link className={styles.goUp} to='navbar' smooth={true}> <FaHandPointUp/> Go up</Link>
                
            </div>
        </div>
    )
}

export default Footer