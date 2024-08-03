import React from 'react'
import { useWeather } from '../context/WeatherContext'

const Card = () => {
  const weather = useWeather();
  return (
    <div className='card'>
      <div className='card-text'>
        <div className='card-temp'>
        <h1>{weather?.data?.current?.temp_c}°C</h1>
        </div>
        <div className='card-loc'>
        <h2> {weather?.data?.location?.name} </h2>
        <h5> {weather?.data?.location?.region}, {weather?.data?.location?.country}</h5>
        </div>
      </div>
      <div className='card-img'>
        <img src={weather?.data?.current?.condition?.icon} />
      </div>
    </div>
  )
}

export default Card