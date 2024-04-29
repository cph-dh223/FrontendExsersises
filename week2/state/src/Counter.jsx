import React, { Component, useEffect, useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0)

    const inc = (event, amount = 1) => {
        setCount(count + amount)
    }
    const dec = (event, amount = 1) => {
        setCount(count - amount)
    }
    useEffect(()=>{
        localStorage.setItem('count', count)
    },[count])
    useEffect(()=> {
        if(count === 0) {
            setCount(Number(localStorage.getItem('count')))
        }
    })
    return (
        <>
            <p>{count}</p>
            <button id='inc' onClick={inc}>inc</button>  
            <button id='dec' onClick={dec}>dec</button>  
            <button id='inc' onClick={e => inc(e, 5)}>inc 5</button>  
            <button id='dec' onClick={e => dec(e, 5)}>dec 5</button>  
        </>
    );
}

export default Counter;