import React, { useState, useEffect, Component } from 'react';
import SvgMapComponent from '../assets/countries_europe';

function MapComponent () {
    const [contry, setContry] = useState();
    const [contryID, setContryID] = useState('');
    Component
    useEffect(() => {
        if(contryID){
            if(contryID !== 'svg2'){
                if (contryID === 'ru-main') {
                    fetch('https://restcountries.com/v3.1/alpha/ru')
                            .then(response => response.json())
                            .then(data => setContry(data))
                            .catch(error => console.error('Error fetching joke:', error));
                    
                } else {
                    fetch('https://restcountries.com/v3.1/alpha/' + contryID)
                            .then(response => response.json())
                            .then(data => setContry(data))
                            .catch(error => console.error('Error fetching joke:', error));
                }
            }
        }

        
    },[contryID])
    
    return (
        <div>
            <SvgMapComponent onClick={onClick}/>
            <p>
                Country: 
                {contry ? contry[0].name.official : ""}
            </p> 
            <p>
                Population: {contry ? contry[0].population : NaN}
            </p>
            <p>
                Area: {contry ? contry[0].area : NaN}
            </p>
            <p>
                Borders: {contry ? contry[0].borders.reduce((acc,b) => acc + " " + b) : ""}
            </p>
        </div>
    );
    

    function onClick (event) {

        console.log(event.target.id);
        console.log(contry);
        setContryID(event.target.id)
        
    }
}

export default MapComponent;