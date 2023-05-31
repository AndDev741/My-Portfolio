import { useState } from "react";
import styles from './ModeButton.module.css'
import { FaSun, FaMoon } from 'react-icons/fa'

function ModeButton() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode')
    }

    return(
        <button className={styles.floatingButton} onClick={toggleDarkMode}>
            {isDarkMode ? (
             <FaMoon className={styles.ligthMode}/>)
            : 
            (<FaSun className={styles.darkMode}/>) }
        </button>
    )
}

export default ModeButton