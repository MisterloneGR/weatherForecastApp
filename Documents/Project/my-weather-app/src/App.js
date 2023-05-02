// App-komponentti on sovelluksen pääkomponentti. Se hallinnoi tilaa ja kutsuu
// fetchData-funktiota hakeakseen säätiedot ja siirtää tiedot WeatherDisplay-komponenttiin.

import React, { useState } from 'react';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [info, setInfo] = useState(null);
  const [errorText, setErrorText] = useState('');

  const retrieveInfo = async (place) => {
    try {
      const [presentResp, futureResp] = await Promise.all([
        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${place}&aqi=yes`),
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${place}&days=3`),
      ]);

      if (!presentResp.ok || !futureResp.ok) {
        throw new Error('Failed to fetch the forecast data.');
      }

      const presentJson = await presentResp.json();
      const futureJson = await futureResp.json();

      setInfo({ location: presentJson.location, current: presentJson.current, forecast: futureJson.forecast });
      setErrorText('');
    } catch (err) {
      setErrorText(err.message);
    }
  };

  return (
      <WeatherContainer info={info} errorText={errorText} retrieveInfo={retrieveInfo} />
  );
}

export default App;