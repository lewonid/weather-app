export const AmPmTo24Hour = (timeString) => {
    // Split the time string into hours, minutes, and AM/PM parts
    const timeArray = timeString.split(":");
    const hours = parseInt(timeArray[0]);
    const minutes = parseInt(timeArray[1].slice(0, 2));
    const period = timeArray[1].slice(2).trim().toUpperCase();
  
    // Convert to 24-hour format
    let hours24 = hours;
    if (hours === 12) {
      // If the time is 12 PM, keep it as is
      hours24 = period === "AM" ? 0 : 12;
    } else if (period === "PM") {
      // If its PM and not 12 PM, add 12 to the hours
      hours24 += 12;
    }
  
    // Format the hours and minutes with leading zeroes if necessary
    const formattedHours = hours24.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
  
    // Return the converted time in 24-hour format
    return `${formattedHours}:${formattedMinutes}`;
  };

//   const AmPmTo24Hour = (time) => {
//     const [hour, minute, period] = time.split(":");
//     if (period === "PM" && hour !== "12") {
//       return `${parseInt(hour) + 12}:${minute}`;
//     } else if (period === "AM" && hour === "12") {
//       return `00:${minute}`;
//     } else {
//       return `${hour}:${minute}`;
//     }
//   };