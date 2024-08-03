import React from 'react'
import { useWeather } from '../context/WeatherContext'

const SubElement = (props) => {
    const weather = useWeather()
  return (
    <div class="sub-element">
        <span class="sub-element-tag">{props.text}</span>
        <span class="sub-element-value">{props.query}{props.after}</span>
    </div>
  )
}

export default SubElement