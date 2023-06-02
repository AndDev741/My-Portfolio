//Styles
import styles from './Navbar.module.css'
import { FaHiking, FaHome, FaRegUser, FaReact, FaRegHandPointDown } from 'react-icons/fa'
import { MdOutgoingMail } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi' 
//Extensions
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';
//Pages 
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
</style>

function Navbar(){

  const [showMenu, setShowMenu] = useState(true)

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const IconAtivo = `${styles.IconMenu} ${isClicked ? styles.Active : ''}`

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowMenu(currentScrollPos < 100);
    }

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  
    
}, []);

    return(
      <div>
        <div className={styles.navbarContainer}>
            <div className={styles.Profiles}>
                <FaHiking/>
                <Link to='about' smooth={true}><h1 id='navbar'>AndDev</h1></Link>
            </div>
            <div className={styles.Routes}>
                <nav >
                    <ul className={styles.Components}>
                        <li  className={styles.item}>
                          <Link to='home' smooth={true}> <FaHome/> Home</Link>  
                        </li>
                        <li  className={styles.item}>
                          <Link to='about' smooth={true}>  <FaRegUser/> About Me</Link>  
                        </li>
                        <li  className={styles.item}>
                          <Link to='projects' smooth={true}> <FaReact/> Projects</Link>  
                        </li>
                        <li  className={styles.item}>
                          <Link to='contact' smooth={true}> <MdOutgoingMail/> Contact Me</Link>  
                        </li>
                        
                    </ul>
                </nav>
                
            </div>
                 <div className={styles.toFooter}>
                        <div className={styles.toFooter2}>
                          <Link to='footer' smooth={true}> <FaRegHandPointDown /> Go Down</Link>
                        </div>
                </div> 
               
        </div>
        <div className={`${styles.menuIcon} ${showMenu ? styles.visible : styles.hidden}`} >
              <div className={IconAtivo}
               onClick={handleClick}
               >        
                <BiMenu/>
                <div className={styles.subNavbar}>
              <ul className={styles.responsiveIcons}>
                        <li className={styles.item}>
                          <Link to='home' smooth={true}><FaHome/></Link>  
                        </li>
                        <li  className={styles.item}>
                          <Link to='about' smooth={true}><FaRegUser/></Link>  
                        </li>
                        <li  className={styles.item}>
                          <Link to='projects' smooth={true}><FaReact/></Link>  
                        </li>
                        <li  className={styles.item}>
                          <Link to='contact' smooth={true}><MdOutgoingMail/></Link>  
                        </li>
              </ul>
             </div> 
              </div>    
        </div>   
        </div>
        
    )
}

export default Navbar