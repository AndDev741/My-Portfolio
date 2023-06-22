import styles from './About.module.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaRegUserCircle,
         FaLanguage, FaLaptopCode, FaNodeJs, FaGitAlt,  } from 'react-icons/fa'

import { SiTypescript,  SiTailwindcss, SiBootstrap, SiVuedotjs  } from 'react-icons/si'

function About() {

        const htmlStyle = {
            color: '#FF7F50'
        }

        const cssStyle = {
            color: '#5794f3'
        }

        const jsStyle = {
            color: 'gold'
        }
        
        const reactStyle = {
            color: '#7ba3e2'
        }

        //Future Section

        const nodeStyle = {
            color: ' #23c24c '
        }

        const gitStyle = {
            color: '#FF7F50'
        }
    
        const typeStyle = {
            color: '#7681c4'
        }
        const bootStyle = {
            color: '#513cb2'
        }

        const marginP = {
            marginTop: '15%'
        }
    

    return(
        <div className={styles.aboutContainer}>
            <h2 id='about'>About Me</h2>
            <p className={styles.p}>Me, my habilitys and what i'm learning </p>
            <div className={styles.aboutMain}>
                <div className={styles.myHabilitys}>
                    <h3>My habilitys Now</h3>
                    <div className={styles.habilityMain}>
                     <ul>
                        <li className={styles.habilityItem}>
                            <FaHtml5 style={htmlStyle} /> 
                            <p>Html 5</p>
                        </li>
                        <li className={styles.habilityItem}>
                            <FaCss3Alt style={cssStyle} /> 
                            <p>CSS 3</p>
                        </li>
                        <li className={styles.habilityItem}>
                            <SiTailwindcss style={reactStyle} /> 
                            <p>Tailwind CSS</p>
                        </li>
                        <li className={styles.habilityItem}>
                            <FaJsSquare style={jsStyle} /> 
                            <p>Javascript</p>
                        </li>
                        <li className={styles.habilityItem}>
                            <FaReact style={reactStyle} /> 
                            <p>React JS</p>
                        </li>
                        <li className={styles.futureItem}>
                            <FaNodeJs style={nodeStyle}/>
                            <p>Node</p>
                        </li>
                        <li className={styles.futureItem}>
                            <FaGitAlt style={gitStyle}/>
                            <p>Git and GitHub</p>
                        </li>
                     </ul>
                    </div>
                </div>
                <div className={styles.aboutMe}>
                    <h3>Who am I?</h3>
                    <div >
                        <ul className={styles.meMain}>
                            <li className={styles.meItem}>
                                <FaRegUserCircle/>
                                <p>My name is André Luiz</p>
                            </li>
                            <li className={styles.meItemSpecify}>
                                <FaLanguage/>
                                <p>I'm <strong>fluent</strong> in English</p>
                                <p>And <strong>native</strong> in Portuguese</p>
                            </li>
                            <li className={styles.meItemSpecify}>
                                <FaLaptopCode/>
                                <p>I'm looking for my second</p>
                                <strong>Professional Experience</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.toLearn}>
                    <h3>My skills in the near future</h3>
                    <ul className={styles.futureMain}>
                        <li className={styles.futureItem}>
                            <SiVuedotjs style={nodeStyle}/>
                            <p>Vue to enlarge knowledge </p>
                        </li>
                        <li className={styles.futureItem}>
                            <SiBootstrap style={bootStyle}/>
                            <p>Bootstrap for more design </p>
                        </li>
                        <li className={styles.futureItem}>
                            <SiTypescript style={typeStyle}/>
                            <p>Typescript for BIG projects</p>
                        </li>
                        <p>...</p>
                        <li className={styles.futureItem}>
                            <p style={marginP}>And more many things, knowledge is <strong>power</strong></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About