import React from 'react'
import { useWeather } from '../context/WeatherContext';

const Input = (props) => {
    const weather = useWeather();
  return (
    <input 
    className='input-field'
    placeholder="Enter city"
    value={weather.searchCity} 
    onChange={(x) => weather.setSeachCity(x.target.value)} />
  )
}

export default Input;