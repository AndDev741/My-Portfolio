import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import MeImg from './IMG/Me.jpeg'
import TypeWriterAnimation from '../Elements/TypeWriterAnimation'
import { FaLinkedin, FaGithub, FaStackOverflow, FaLink   } from 'react-icons/fa'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
</style>

function Home() {  

    return(
        <div className={styles.homeContainer}>
            <img id='home' src={MeImg} alt='Me'  className={styles.Me}  />
            <h2>André Luiz Dev</h2>
            <div className={styles.animatedText}>
            <TypeWriterAnimation/>
            </div>
            <div className={styles.contactHome}>
                <a href='https://www.linkedin.com/in/anddev-%E3%83%84-b9915b275/?locale=en_US' target='_blank'> <FaLinkedin/> </a>
                <a href='https://github.com/AndDev741' target='_blank'> <FaGithub/> </a>
                <a href='https://stackoverflow.com/users/21897255/%e3%83%84and' target='_blank'> <FaStackOverflow/> </a>
            </div>
            <div className={styles.curriculum}>
                <h3>Download my curriculum</h3>
               <a href='./IMG/André Luiz front end curriculum.pdf' download><FaLink/><span>André Luiz Dev front end curriculum</span> </a>
            </div>
        </div>
    )
}

export default Home