import React from 'react'

// import logo_small from '../assets/img/logo_v1.png'
import logo from '../assets/img/weatherAPP_logo_v1.png'
import styles from '../assets/Menu.module.css';
import { RiHomeLine, RiMapPin5Line, RiErrorWarningLine } from 'react-icons/ri';

import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      {/* <img className={styles.logo} src={logo_small}  width='201px' height='47px'/> */}
      <img src={logo} style={{ paddingTop: '1rem'}} width='237px' height='56px' alt='WeatherHub Logo'/>
      <div className={styles.Buttons}>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <span className={styles.Icon}><RiHomeLine /></span>Dashboard
        </NavLink>
        <NavLink to='/map' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <span className={styles.Icon}><RiMapPin5Line /></span>Map
        </NavLink>
        <NavLink to='/unknownyet' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <span className={styles.Icon}><RiErrorWarningLine /></span>Unk yet
        </NavLink>
      </div>
    </div>
  )
}

export default Menu