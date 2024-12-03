import React, { useState } from 'react'
import TemperatureInput from './TemperatureInput';
import TemperatureDisplay from './TemperatureDisplay';

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState(0);

  return (
      <div>
          <h1>Temperature Converter</h1>
          <TemperatureInput temperature={ } onTemperatureChange={ } />
          <TemperatureDisplay temperature={temperature} />
          
          
      
      </div>
  )
}

export default TemperatureConverter
