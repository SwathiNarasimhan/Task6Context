
import { useState } from 'react';
import './App.css';
// import { TemperatureConverter } from './components/TemperatureInput';
// import { BoilingVerdict } from './components/BoilingVerdict';
import { TemperatureConverterContext } from './components/TemperatureInputContext';
import { MyContext } from './contexts';
import { BoilingVerdictContext } from './components/BoilingVerdictContext';

function App() {

  // const[scale, setScale] = useState("c");
  // const[temperature, setTemperature] = useState("");

  // const handleTemperatureChange = (value) => {
  //   setTemperature(value);
  // }

  // const handleScaleChange = (value) => {
  //   setScale(value);
  // }

  const [temperatureData, setTemperatureDate] = useState({
    temperature: "",
    scale: "c"
  });

  const handleTemperatureChange =(value) => {
    setTemperatureDate(value);
  }

  return (
    
      <div className="tempContainer">
        {/* <TemperatureConverter 
          scale={scale} 
          temperature={temperature} 
          onTemperatureChange={handleTemperatureChange} 
          onScaleChange={handleScaleChange}
        />
        <BoilingVerdict 
          scale={scale} 
          temperature={temperature} /> */}
          <MyContext.Provider value={temperatureData}>
            <TemperatureConverterContext
              onTemperatureChange={handleTemperatureChange} 
            />
            <BoilingVerdictContext />
          </MyContext.Provider>
      </div>
   
  );
}

export default App;
