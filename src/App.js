import Card from './components/Card.jsx';
import MoreDetails from './components/MoreDetails.jsx';
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';
import { useWeather } from './context/WeatherContext.jsx';

import "./App.css";

const App = () => {
  const weather = useWeather();

  return (
    <div className='App'>
      <h1> Weather Forecaster </h1>
      <div className='input-area'>
        <Input />
        <Button onClick={weather.fetchData} value="Search"/>
      </div>
      <Card /> 
      <MoreDetails />
    </div>
  )
}

export default App