import React  from 'react';
import './WeatherApp.css';
import {useState, useEffect} from 'react'

import axios from 'axios'

export default function WeatherAPI() {
    	
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    
    const [weather, setState] = useState()
    const [icon, setIcon] = useState()
    
    useEffect(()=> {
        axios.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=Toronto&appid=3f999d09a4ec606e7c64a79fdf4958f0')
        .then(res => {
            setIcon(res.data.weather[0].icon)
            setState(res.data)
        })
    }, [])
    
    
    console.log(icon)
    console.log(weather)
    
    return (
        <>
        <div id="titleArea">
        {weather ? <h1>Showing Weather for {weather.name}</h1>: <></>}
        <h4>{date}</h4>
           
        
        </div>
        {weather ? <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> : <></>}
        <div id="mainDisplay">
        <h3>Sky Description</h3>
        <h3>Is it raining? :(</h3>
        {weather ? <h2>{weather.weather[0].description}</h2> : <></>}        
        {weather ? <h2>{weather.weather[0].main}</h2> : <></>}
        <h3>Low Temperature Today</h3>
        <h3>High Temperature Today</h3>
        {weather ? <h2>{weather.main.temp_min}°c</h2> : <></>}        
        {weather ? <h2>{weather.main.temp_max}°c</h2> : <></>}
        <h3>Wind Speed</h3>
        <h3>Air Pressure</h3>
        {weather ? <h2>{weather.wind.speed} m/sec</h2> : <></>}        
        {weather ? <h2>{weather.main.pressure} hpa</h2> : <></>}
        </div>
        </>
    )  
        
    
}

