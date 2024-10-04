import React, { useState } from 'react';
import TemperatureInput from './components/TemperatureInput';
import TemperatureResult from './components/TemperatureResult';
import styles from './App.module.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [convertedTemp, setConvertedTemp] = useState(null);
  const [boilingPoint, setBoilingPoint] = useState(false);

  //Variables de formula temperatura
  const toFahrenheit = (celsius) => (celsius * 9/5) + 32;
  const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

  const handleTemperatureChange = (value) => {
    setTemperature(value);

    if (scale === 'celsius') {
      const fahrenheit = toFahrenheit(value); //Convertir a fahrenheit
      setConvertedTemp(fahrenheit.toFixed(2));
      setBoilingPoint(value >= 100); 
    } else {
      const celsius = toCelsius(value);
      setConvertedTemp(celsius.toFixed(2));
      setBoilingPoint(celsius >= 100); 
    }
  };

  const handleScaleChange = (scale) => {
    setScale(scale);
    setTemperature('');
    setConvertedTemp(null);
    setBoilingPoint(false);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>CONVERTIDOR DE TEMPERATURA</h1>
      <TemperatureInput
        scale={scale}
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
        onScaleChange={handleScaleChange}
      />
      <TemperatureResult
        convertedTemp={convertedTemp}
        scale={scale}
        boilingPoint={boilingPoint}
      />
    </div>
  );
}

export default App;
