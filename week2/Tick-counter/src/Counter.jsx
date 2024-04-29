import React, { Component, useEffect, useState } from 'react';

function Counter () {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [stopped, setStopped] = useState(false)
    const [time, setTime] = useState({minutes: 0,seconds: 0})
    
    const startTimer = () => {
        setStopped(false)
        setTime({minutes: minutes, seconds: seconds})
    }
    const stopTimer = () => {
        setStopped(true)
    }
    const resetTimer = () => {
        setMinutes(0)
        setSeconds(0)
        setTime({minutes: 0, seconds: 0})
    }

    const setMins = (event, time) => {
        setMinutes(time)
        startTimer()
    }

    function formatTime(time) {
        return(time.minutes + ':' + (Number(time.seconds) >= 10 ? time.seconds : `0${time.seconds}`))
    }

    useEffect(() => {
        if(time.seconds > 0 || time.minutes > 0){
            setTimeout(() => {
                if(stopped){
                    return
                }
                if(time.seconds === 0) {
                    setTime({minutes: time.minutes - 1, seconds: 59})
                } else {
                    setTime({...time, seconds: time.seconds - 1 })
                }
            }, 1000);
        }
    },[time, setTime, stopped])

    
    return (
        <div>
          <div>
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            <br></br>
            <button onClick={e => setMins(e, 5)}>set 5 mins</button>
            <button onClick={e => setMins(e, 10)}>set 10 mins</button>
            <button onClick={e => setMins(e, 15)}>set 15 mins</button>
          </div>
          <div>Time Remaining: {formatTime(time)}</div>
        </div>
      );


    
}

export default Counter;