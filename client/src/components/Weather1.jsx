import 'regenerator-runtime/runtime'
import React, { useState } from 'react';
import axios from 'axios';
// import { fetchWeather } from './Fetchweather.jsx';
import './weather.css';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a0f84d1f6929772cfa457ccaeda5a619';

const Weather = (props) => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    const fetchWeather = async (query) => {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        });
    
        return data;
    };


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
    };

    

    return (
        <div className="main-container">
            <h2  className="changeView" onClick={props.change}> Now , you can check the weather and  then go and add your tasks :</h2>
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
                        <sup>C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p className="description">{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;
