import styles from './PortfolioNavigation.module.css'

function PortfolioNavigation ({ itemCount, activeIndex, handleClick }) {

    return(
        <div className={styles.divStyle}>
            {Array.from({length: itemCount}, (_, index) =>(
                <span 
                    key={index}
                    onClick={() => handleClick(index)}
                    ><button className={`${styles.circle} ${index === activeIndex ? styles.active : ""}`}></button></span>
            ))}
        </div>
    )
    }

export default PortfolioNavigation