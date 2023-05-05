// WeatherData-komponentti vastaa säätietojen näyttämisestä käyttäjälle.
// Se näyttää nykyisen säätiedon ja kolmen seuraavan päivän sääennusteen.
import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import format from 'date-fns/format';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherInfo = ({ info }) => {
  const { location, current, forecast } = info;
  const { name, region, country } = location;
  const { condition, temp_c, precip_mm, humidity, wind_kph } = current;

const TempGraphComponent = ({ weatherForecast }) => {
    const chartData = weatherForecast.hour.map((Hour) => ({
      timeStamp: format(new Date(Hour.time), 'HH:mm'),
      tempValue: Hour.temp_c,
    }));
  
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
              Hourly Temperature
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timeStamp" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="tempValue"
                  stroke="#FFA500" // Orange stroke color
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    );
  };


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          {name}, {region}, {country}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box px={2} pt={2}>
            <Typography variant="h4" component="h4">
              Present weather
            </Typography>
          </Box>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item>
                <img src={condition.icon} alt={condition.text} />
              </Grid>
              <Grid item>
                <Typography variant="h3" component="div">
                  {temp_c}°C
                </Typography>
              </Grid>
              <Grid item>
                <Box pl={2}>
                  <Grid container direction="column">
                    <Typography variant="body2">Precipitation: {precip_mm} mm</Typography>
                    <Typography variant="body2">Humidity: {humidity}%</Typography>
                    <Typography variant="body2">Wind: {wind_kph} kph</Typography>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs>
                <Box textAlign="right">
                  <Typography variant="h4" component="h3">
                    {format(new Date(), 'EEEE dd/MM')}
                  </Typography>
                  <Typography variant="h5" component="h3" color="text.secondary">
                    {condition.text}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {info.forecast && <TempGraphComponent weatherForecast ={forecast.forecastday[0]} />}

      {forecast &&
        forecast.forecastday.slice(0, 3).map((day) => (
          <Grid item xs={4} key={day.date}>
            <Card>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {format(new Date(day.date), 'EEEE dd/MM')}
            </Typography>
            <Typography variant="h6" component="h2">
              {day.day.condition.text}
            </Typography>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <Typography>
              <i className="fas fa-thermometer-empty"></i>
              <span style={{ color: '#2196F3', marginLeft: '4px' }}>{day.day.mintemp_c}°C</span>{" "}
              /{" "}
              <span style={{ color: '#FFC107' }}>{day.day.maxtemp_c}°C</span>
            </Typography>
            <Grid container direction="column">
              <Typography variant="body2">
                Precipitation: {day.day.totalprecip_mm} mm
              </Typography>
              <Typography variant="body2">
                Humidity: {day.day.avghumidity}%
              </Typography>
              <Typography variant="body2">
                Wind: {day.day.maxwind_kph} kph
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    ))}
</Grid>
);
};

export default WeatherInfo;
