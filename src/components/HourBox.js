import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../assets/HourBox.module.css'


const HourBox = ({ time, temp, icon }) => {

  const [hour, setHour] = useState('');

  useEffect(() => {
    const date = new Date(time);
    setHour(date.getHours());
  }, [time])

  return (
    <div className={styles.HourBox}>
        <p>{hour}</p>
        <img src={icon} alt='condition'/>
        <p>{temp}° C</p>
    </div>
  )
}

export default HourBox