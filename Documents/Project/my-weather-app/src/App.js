import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './styles.css';

function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fa0ff0e0d7014ee49b193431232503&q=${location}&aqi=yes`);
      const json = await response.json();

      if (response.ok) {
        setData(json);
        setErrorMessage('');
      } else {
        setErrorMessage(json.error.message);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="App">
      <WeatherDisplay data={data} errorMessage={errorMessage} fetchData={fetchData} />
    </div>
  );
}

export default App;
