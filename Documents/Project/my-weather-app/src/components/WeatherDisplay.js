import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherData from './WeatherData';
import ErrorMessage from './ErrorMessage';

const WeatherDisplay = ({ data, errorMessage, fetchData }) => {
  return (
    <div>
      <h1>My Weather App</h1>
      <WeatherForm fetchData={fetchData} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {data && <WeatherData data={data} />}
    </div>
  );
};

export default WeatherDisplay;