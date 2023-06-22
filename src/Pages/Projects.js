//Pages
import PortfolioNavigation from '../Elements/PortfolioNavigation'
import PortfolioItem from '../Elements/PortfolioItem';
//styles
import styles from './Projects.module.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt,  } from 'react-icons/fa'
import { SiTypescript,  SiTailwindcss, SiBootstrap, SiVuedotjs  } from 'react-icons/si'
import weatherGIF from './PortfolioImages/WeatherAPIGif.gif'
import mindBlowingGIF from './IMG/mindblowingGIF.gif'
//tools
import {useState, useEffect} from 'react'

function Projects() {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
        }, 60000)

        return () => clearInterval(timer)
    }, []);

    const handleCircleClick = (index) => {
        setActiveIndex(index)
    }

    const portfolioItems = [
        {
            id: 0,
            title: 'Mind Blowing Morning',
            h4Tecnologies: 'Used tecnologies',
            tecnologies1: <FaHtml5/>,
            tecnologies2: <FaCss3Alt/>,
            tecnologies3: <FaJsSquare/>,
            tecnologies4: <FaReact/>,
            tecnologies5: <SiTailwindcss/>,
            tecnologies6: <SiTypescript/>,
            IMG: mindBlowingGIF,
            content: 'The mind blowing morning was my first professional experience. I worked in this volunter project making pages according to the figma design and adding some funcionalities to the code, it was a amazing project where i helped and learn a lot of frameworks, tips and more',
            aProject: 'See the project',
            aRepository: 'See the repository',
            HrefGit: 'https://github.com/AndDev741/Mind-Blowing-Morning/tree/main',
            Hrefto: 'https://mindblowingmornings.com/' 
        },
        {
            id: 1,
            title: 'Weather Site with API',
            h4Tecnologies: 'Used tecnologies',
            tecnologies1: <FaHtml5/>,
            tecnologies2: <FaCss3Alt/>,
            tecnologies3: <FaJsSquare/>,
            IMG: weatherGIF,
            content: 'The wheather API site is a project that i take to myself to learn more about api requests\
            and other habilities in Javascript too, thats a very nice page with random background and responsive\
            icons to night and day.',
            aProject: 'See the project',
            aRepository: 'See the repository',
            HrefGit: 'https://github.com/AndDev741/WeatherAPI-Site',
            Hrefto: 'https://anddev741.github.io/WeatherAPI-Site/' 
        },
        {
            id: 1,
            title: 'Soon a project gonna be here',
            h4Tecnologies: 'Soon tecnologies',
            tecnologies1: <FaHtml5/>,
            tecnologies2: <FaCss3Alt/>,
            tecnologies3: <FaJsSquare/>,
            tecnologies4: <FaReact/>,
            IMG: 'https://i.pinimg.com/originals/5e/22/7b/5e227b7cfcca0b07ea72691e07c560b8.gif',
            content: 'I\'m working day and nigth to fill this section with anothers project\
            hope all you like',
            aProject: 'Soon a project here',
            aRepository: 'Soon a repository here',
            HrefGit: 'https://github.com/AndDev741',
            Hrefto: 'https://www.linkedin.com/in/anddev-%E3%83%84-b9915b275/?locale=en_US' 
        }
    ]

   
    

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

    return(
        <div className={styles.projectContainer}>
            <div className={styles.projectHeader}>
                <h1 id='projects'>Projects</h1>
                 </div>
                  <div className={styles.projectMain}>
                    <div className={styles.projectWindow}>
                     <div>
                      {portfolioItems.map((item, index) => (
                        index === activeIndex ? (
                        <PortfolioItem
                            key={item.id}
                            content={
                            <div className={styles.PortfoliosContainer}>
                                <h3>{item.title}</h3>
                                    <div className={styles.PortfolioContent}>
                                     <p className={styles.Content}>{item.content}</p>
                                     <img src={item.IMG} alt='portfolio'></img>
                                     <div className={styles.tech}>
                                        <h4>{item.h4Tecnologies}</h4>
                                        <button className={styles.techItem} style={htmlStyle}>{item.tecnologies1}</button>
                                        <button className={styles.techItem} style={cssStyle}>{item.tecnologies2}</button>
                                        <button className={styles.techItem} style={jsStyle}>{item.tecnologies3}</button>
                                        <button className={styles.techItem} style={reactStyle}>{item.tecnologies4}</button>
                                        <button className={styles.techItem} style={reactStyle}>{item.tecnologies5}</button>
                                        <button className={styles.techItem} style={cssStyle}>{item.tecnologies6}</button>
                                     </div>
                                     </div>
                                     <a className={styles.linkTo} href={item.Hrefto} target='_blank'>{item.aProject}</a>
                                     <a href={item.HrefGit} className={styles.linkTo} target='_blank'>{item.aRepository}</a>
                             </div>
                            }
                            isActive={index === activeIndex}>
                        </PortfolioItem>
                        ) : null
                    ))}
                    <PortfolioNavigation
                        itemCount={portfolioItems.length}
                        activeIndex={activeIndex}
                        handleClick={handleCircleClick}>
                    </PortfolioNavigation>
                </div>
             </div>
            </div>
        </div>
    )
}

export default Projects