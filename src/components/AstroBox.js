import React from 'react'
import { useState, useEffect } from 'react'

import { AmPmTo24Hour } from '../utils/amPmTo24Hour'

import styles from '../assets/AstroBox.module.css'

const AstroBox = ({ icon, type, astroTime, localTime }) => {

  const [timeToSun, setTimeToSun] = useState([]);

  useEffect(() => {
    const astroHours = AmPmTo24Hour(astroTime).split(':')[0];
    const localHours = AmPmTo24Hour(localTime).split(":")[0];
  
    if (type === "Sunrise") {
      // Calculate time until next daysss sunrise
      const timeDifference = ((parseInt(astroHours) - parseInt(localHours)) + 24) % 24;
      if (timeDifference === 0) {
        setTimeToSun('now');
      } else if (timeDifference > 0) {
        setTimeToSun(`in ${timeDifference} hours`);
      } else {
        setTimeToSun(`${Math.abs(timeDifference)} hours ago`);
      }
    } else if (type === "Sunset") {
      // Calculate time until next days sunset
      const timeDifference = ((parseInt(localHours) - parseInt(astroHours)) + 24) % 24;
      if (timeDifference === 0) {
        setTimeToSun('now');
      } else if (timeDifference > 0) {
        setTimeToSun(`in ${timeDifference} hours`);
      } else {
        setTimeToSun(`${Math.abs(timeDifference)} hours ago`);
      }
    }
  }, [astroTime, localTime, type]);
  

  // console.log(timeToSun)

  return (
    <div className={styles.AstroBox}>
        {icon}
        <div className={styles.Details}>
            <p>{type}</p>
            <p>{astroTime}</p>
        </div>
        {
          type === 'Sunrise' && <p>{timeToSun}</p>
        }
        {
          type === 'Sunset' && <p>{timeToSun}</p>
        }
        
    </div>
  )
}

export default AstroBox