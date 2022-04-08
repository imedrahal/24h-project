import React, { useState } from 'react';

import { fetchWeather } from './Fetchweather.jsx';
import './weather.css';

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (event) => {
        if(event.key === 'Enter') {
            const data = await fetchWeather(query);
            // console.log(query)
         // console.log(data.data[0].description)

            setWeather(data);
            // console.log(weather)
            // console.log(data.data[0].description)
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input type="text"
            className="search"
            placeholder="Your countrie"
            value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    {/* temp of our search */}
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&degre;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;
