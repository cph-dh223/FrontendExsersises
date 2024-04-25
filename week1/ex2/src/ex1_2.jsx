import React, { useState, useEffect } from 'react';

function DadJokeComponent() {
    // State to store the joke
    const [dadJoke, setDadJoke] = useState();
    const [dadjokeTimeout, setDadJokeTimeout] = useState(false);
    
    
    
    
    
    // useEffect to fetch the joke
    useEffect(() => {
        
        getDadJoke(setDadJoke);
    }, []); // Empty dependency array means this runs once on mount
    
    
    
    
    function getDadJoke() {
        if(!dadjokeTimeout){
            fetch('https://icanhazdadjoke.com/', {
                headers: new Headers({'Accept': 'text/plain'})})
                .then(response => response.text())
                .then(data => setDadJoke(data))
                .catch(error => console.error('Error fetching joke:', error));
            setDadJokeTimeout(true)
            setTimeout(() => {setDadJokeTimeout(false)},10000);
        }
        

    }
        
        

    // Render the joke
    return (
        <>
            <div>
                <p>{dadJoke}</p>
                <button id = "NewJoke" onClick={getDadJoke}>new joke</button>
            </div>
        </>
    );
}

export default DadJokeComponent;



