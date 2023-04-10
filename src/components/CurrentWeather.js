import React from 'react'

import { IoRainySharp } from 'react-icons/io5'

import styles from '../assets/CurrentWeather.module.css'

const CurrentWeather = ({ currentWeather }) => {
    // console.log(currentWeather)

    return (
        <div className={styles.CurrentWeather}>
            <div className={styles.Header}>
                <div className={styles.Location}>
                    <h3>Timisoara</h3>
                    <p>Timis, Romania</p>
                </div>
                <p>08:54 AM</p>
            </div>
            <div className={styles.MainWeather}>
                <IoRainySharp className={styles.Icon}/>
                <div className={styles.WeatherData}>
                    <h1 style={{color: 'white'}}>20° C</h1>
                    <div style={{textAlign: 'right'}}>
                        <p>Dramatic</p>
                        <p>Cloudy</p>
                    </div>
                </div>
            </div>
            {/* <p>{currentWeather != 0 ? currentWeather.location.name : 'Loading...'}</p>
            {currentWeather != 0 ? currentWeather.location.region : 'Loading...'} */}
        </div>
    )
}

export default CurrentWeather