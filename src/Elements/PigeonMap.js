import styles from './PigeonMap.module.css'
import { useState } from 'react'
import { Map, ZoomControl } from 'pigeon-maps' 

function PigeonMap() {
    return (
        <div className={styles.map}>
            <h2 className={styles.mapTitle}>I'm looking for a remote work</h2>
            <div >
                <Map className={styles.pigeonMap} 
                width={500} 
                height={500} 
                defaultCenter={[38.760838, -9.234625]} 
                defaultZoom={6}
                metaWheelZoom={true}>
                    <ZoomControl/>
                </Map>
            </div>
        </div>
        
    )
}

export default PigeonMap