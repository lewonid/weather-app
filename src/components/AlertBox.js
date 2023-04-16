import React from 'react'

import styles from '../assets/AlertBox.module.css'

const AlertBox = ({ headline, severity, areas }) => {
    console.log(headline);
  return (
    <div className={styles.AlertBox}>
        <div className={styles.Box}>
            <p>ALERT:</p>
            <p>{headline}</p>
        </div>
        <div className={styles.Box}>
            <p>SEVERITY:</p>
            <p>{severity}</p>
        </div>
        <div className={styles.Box}>
            <p>AREAS:</p>
            <p>{areas}</p>
        </div>
    </div>
  )
}

export default AlertBox