import React from 'react'

import styles from '../assets/AutoComplete.module.css';


const AutoComplete = ({ suggestionName, suggestionRegion, onClick }) => {
  return (
    <div onClick={onClick} className={styles.AutoComplete}>
        <p>{suggestionName}, {suggestionRegion}</p>
    </div>
  )
}

export default AutoComplete