import React, { useState } from 'react';

const WeatherForm = ({ fetchData }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter location..." value={location} onChange={(event) => setLocation(event.target.value)} />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
