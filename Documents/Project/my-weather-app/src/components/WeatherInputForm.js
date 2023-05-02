// WeatherForm-komponentti näyttää lomakkeen, jossa käyttäjä voi syöttää sijainnin.
// Se käyttää Autocomplete-komponenttia ehdottamaan sijainteja käyttäjälle syötön perusteella.
// Kun käyttäjä lähettää lomakkeen, se kutsuu fetchData-funktiota hakeakseen säätiedot valitulle sijainnille.

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const WeatherInputForm = ({ retrieveInfo }) => {
  const [place, setPlace] = useState('');

  const handleSubmission = (event) => {
    event.preventDefault();
    retrieveInfo(place);
  };

  return (
    <form onSubmit={handleSubmission} style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
      <TextField
        value={place}
        onChange={(event) => setPlace(event.target.value)}
        label="Enter location"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '8px' }}>
        Get Weather
      </Button>
    </form>
  );
};

export default WeatherInputForm;
