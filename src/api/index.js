const base_URL = 'https://api.weatherapi.com/v1/current.json?key=6a9459dec3224d17bb7193920243107'

export const getWeatherDataForCity = async (city) => {
    const response = await fetch (`${base_URL}&q=${city}&aqi=yes`)
    return await response.json()
};

export const getWeatherDataForLoc = async (lat, lon) => {
    const response = await fetch (`${base_URL}&q=${lat},${lon}&aqi=yes`)
    return await response.json()
};