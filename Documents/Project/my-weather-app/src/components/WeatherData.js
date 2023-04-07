import React from 'react';

const WeatherData = ({ data }) => {
  const { location, current } = data;

  return (
    <div>
      <h2>{location.name}, {location.region}, {location.country}</h2>
      <p>Temperature: {current.temp_c} °C</p>
      <p>Condition: {current.condition.text}</p>
      <img src={current.condition.icon} alt={current.condition.text} />
    </div>
  );
};

export default WeatherData;