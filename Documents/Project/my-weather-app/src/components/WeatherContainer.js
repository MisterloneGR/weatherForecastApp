// WeatherDisplay-komponentti yhdistää WeatherForm- ja WeatherData-komponentit.
// Se välittää fetchData-funktion WeatherForm-komponenttiin ja siirtää säätiedot ja virhesanomat WeatherData-komponenttiin.

import React from 'react';
import WeatherInputForm from './WeatherInputForm';
import WeatherInfo from './WeatherInfo';
import ErrorNotification from './ErrorNotification';
import { Container } from '@mui/material';

function WeatherContainer({ info, errorText, retrieveInfo }) {
  return (
    <Container maxWidth="md" sx={{ paddingTop: '32px' }}>
      <WeatherInputForm retrieveInfo={retrieveInfo} />
      {errorText && <ErrorNotification message={errorText} />}
      {info && <WeatherInfo info={info} />}
    </Container>
  );
}

export default WeatherContainer;