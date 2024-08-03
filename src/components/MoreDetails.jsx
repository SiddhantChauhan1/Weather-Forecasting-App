import React from 'react'
import { useWeather } from '../context/WeatherContext'
import SubElement from './SubElement'

const MoreDetails = () => {
    const weather = useWeather()
    
  return (
    <div className='more-card'>
        <div className='more-card-row'>
            <SubElement text="Feels Like" query={weather?.data?.current?.feelslike_c} after="°C" />
            <SubElement text="humidity" query= {weather?.data?.current?.humidity} after="%"/>
            <SubElement text="UV index" query={weather?.data?.current?.uv} />
        </div>
        <div className='more-card-row'>
            <SubElement text="wind speed" query= {weather?.data?.current?.wind_kph} after=" km/h"/>
            <SubElement text="precipitation" query= {weather?.data?.current?.precip_mm} after=" mm"/>
            <SubElement text="pressure" query= {weather?.data?.current?.pressure_mb} />
        </div>
    </div>
  )
}

export default MoreDetails