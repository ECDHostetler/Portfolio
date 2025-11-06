// components/DayNightToggle/dayNightToggle.js
 
import React, { useState } from "react";


const Toggle = () => {

    const [isDay, setIsDay] = useState(false);

    const toggleHandler = () => {
        setIsDay(!isDay); // Toggles the 'Day/Night' state
        (isDay) ?  day() : night();
    };

    const night = () => {
        document.body.classList.add('night');
    }
    const day = () => {
        document.body.classList.remove('night');
    }

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleHandler} defaultChecked={true} defaultValue={true} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{!isDay ? 'Day' : 'Night'}</label>
        </div>
    );
};

export default Toggle;