const base_URL = 'https://api.weatherapi.com/v1/current.json?key=#'

export const getWeatherDataForCity = async (city) => {
    const response = await fetch (`${base_URL}&q=${city}&aqi=yes`)
    return await response.json()
};

export const getWeatherDataForLoc = async (lat, lon) => {
    const response = await fetch (`${base_URL}&q=${lat},${lon}&aqi=yes`)
    return await response.json()
};
