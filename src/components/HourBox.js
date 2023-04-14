import React from 'react'

import styles from '../assets/HourBox.module.css'


const HourBox = () => {
  return (
    <div className={styles.HourBox}>
        <p>7 PM</p>
        <div className={styles.ProgressBar}>
            <div></div>
        </div>
        <p> 44 %</p>
    </div>
  )
}

export default HourBox