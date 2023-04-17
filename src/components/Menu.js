import React from 'react'

// import logo_small from '../assets/img/logo_v1.png'
import logo from '../assets/img/weatherAPP_logo_v1.webp'
import sm_logo from '../assets/img/small_weatherAPP_logo_v1.webp'
import styles from '../assets/Menu.module.css';
import { RiHomeLine, RiMapPin5Line, RiErrorWarningLine } from 'react-icons/ri';

import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      {/* <img className={styles.logo} src={logo_small}  width='201px' height='47px'/> */}
      <img className={styles.Desktop} src={logo} style={{ paddingTop: '1rem'}} width='237px' height='56px' alt='WeatherHub Logo'/>
      <img className={styles.Phone} src={sm_logo} style={{ paddingTop: '1rem'}} width='55px' height="56px" alt='WeatherHub Logo'/>
      <div className={styles.Buttons}>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <span className={styles.Icon}><RiHomeLine /></span><span className={styles.Desktop}>Dashboard</span>
        </NavLink>
        {/* <NavLink to='/forecast' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <span className={styles.Icon}><RiMapPin5Line /></span><span className={styles.Desktop}>Forecast</span>
        </NavLink> */}
        {/* <NavLink to='/unknownyet' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <span className={styles.Icon}><RiErrorWarningLine /></span><span className={styles.Desktop}>Unknown</span>
        </NavLink> */}
      </div>
    </div>
  )
}

export default Menu