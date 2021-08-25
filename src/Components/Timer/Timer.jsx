import React, { useState, useEffect } from 'react';

import './Timer.css';

const Timer = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const [zeroSeconds, setZeroSeconds] = useState(0);
    const [zeroMinutes, setZeroMinutes] = useState(0);
    const [zeroHours, setZeroHours] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (props.stop) {
                console.log('STOP = ' + props.stop);
                clearInterval(interval);
                props.setWinTimeMessage(`${zeroHours}${hours} : ${zeroMinutes}${minutes} : ${zeroSeconds}${seconds}`);
                return;
            }
            
            if (props.reset) {
                console.log('RESET = ' + props.reset);
                clearInterval(interval);
                
                setSeconds(0);
                setMinutes(0);
                setHours(0);
                return;
            }
            
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line 
    }, [props.reset, props.stop]);


    if ((seconds < 10) && (zeroSeconds === '')) {
        setZeroSeconds(0);
    } else if ((seconds >= 10) && (zeroSeconds === 0)) {
        setZeroSeconds('');
    }

    if ((minutes < 10) && (zeroMinutes === '')) {
        setZeroMinutes(0);
    } else if ((minutes >= 10) && (zeroMinutes === 0)) {
        setZeroMinutes('');
    }

    if ((hours < 10) && (zeroHours === '')) {
        setZeroHours(0);
    } else if ((hours >= 10) && (zeroHours === 0)) {
        setZeroHours('');
    }

    if (seconds === 60) {
        console.log(seconds);
        setMinutes(minutes => minutes + 1);
        setSeconds(0);
    }

    if (minutes === 60) {
        console.log(minutes);
        setHours(hours => hours + 1);
        setMinutes(0);
    }


    return (
        <div className='timerDiv'>
            <p>{zeroHours}{hours} : {zeroMinutes}{minutes} : {zeroSeconds}{seconds}</p>
        </div>
    );
}

export default Timer;
