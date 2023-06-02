import styles from './PigeonMap.module.css'
import { useState } from 'react'
import { Map, ZoomControl, twoFingerDragWarning } from 'pigeon-maps' 

function PigeonMap() {

    return (
        <div className={styles.map}>
            <h2 className={styles.mapTitle}>I'm looking for a remote work</h2>
            <div  className={styles.pigeonMap}  >
                <Map
                defaultCenter={[38.760838, -9.234625]} 
                defaultZoom={6}
                metaWheelZoom={true}>
                    <ZoomControl/>
                    <twoFingerDragWarning/>
                </Map>
            </div>
        </div>
        
    )
}

export default PigeonMap