import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLoc } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSeachCity] = useState(null);
    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }

    // const fetchUserLocation = () => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         getWeatherDataForLoc(
    //             position.coords.latitude, 
    //             position.coords.longitude
    //         ).then((data) => setData(data))
    //     })
    // }

    return (
        <WeatherContext.Provider value={{ searchCity, data, setSeachCity, fetchData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}