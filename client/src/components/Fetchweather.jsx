import axios from 'axios';
// import React from "react"
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a0f84d1f6929772cfa457ccaeda5a619';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}