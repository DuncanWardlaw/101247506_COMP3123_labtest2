import React  from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function WeatherAPI() {
    const [weather, setState] = useState()
    const [icon, setIcon] = useState()
    
    useEffect(()=> {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3f999d09a4ec606e7c64a79fdf4958f0')
        .then(res => {
            setIcon(res.data.weather[0].icon)
            setState(res.data)
        })
    }, [])
    
    
    console.log(icon)
    console.log(weather)
    return (
        <div>
            <>
            {weather ? <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> : <></>}
            {weather ? <h1>{weather.coord.lon}</h1> : <></>}
            {weather ? <h1>{weather.main.temp_min}</h1> : <></>}
                
            </>
        </div>
    )
}
