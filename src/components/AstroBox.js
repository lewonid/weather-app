import React from 'react'

import { FiSun } from 'react-icons/fi'

import styles from '../assets/AstroBox.module.css'

const AstroBox = () => {
  return (
    <div className={styles.AstroBox}>
        <FiSun />
        <div className={styles.Details}>
            <p>Sunrise</p>
            <p>4:20 AM</p>
        </div>
        <p>4 hours ago</p>
    </div>
  )
}

export default AstroBox