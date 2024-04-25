import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState();


    

    // useEffect to fetch the joke
    useEffect(() => {
        getJoke(setJoke);
    }, []); // Empty dependency array means this runs once on mount



    // Render the joke
    return (
        <div>
            <p>{joke}</p>
            <button id = "NewJoke" onClick={getJoke}>new joke</button>
        </div>
    );
    

    function getJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    }
}


export default JokeComponent;



