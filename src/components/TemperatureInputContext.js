import React from "react";
import { MyContext } from "../contexts";

export const TemperatureConverterContext = ({onTemperatureChange}) => {

    // const[temperature, setTemperature] = useState("");
    // const[scale, setScale] = useState("c");

    const myContext = React.useContext(MyContext);

    const celsiusToFar = (celsius) => {
        return (parseFloat(celsius) * (9/5)) + 32;
    };

    const farToCelsius = (fahrenheit) => {
        return (parseFloat(fahrenheit)-32) * (5/9);
    };


    const handleChangeCelsius  = (e) => {
        onTemperatureChange({
            temperature: e.target.value,
            scale: 'c'
        });
    }

    const handleChangeFahrenheit  = (e) => {
        onTemperatureChange({
            temperature: e.target.value,
            scale: 'f'
        });
    }

    const renderCelsius = () => {
        return myContext.scale === 'c' ? myContext.temperature : farToCelsius(myContext.temperature);
    };
    
    const renderFahrenheit = () => {
        return myContext.scale === 'f' ? myContext.temperature : celsiusToFar(myContext.temperature);
    };
    


    return(
        <div className="temperatureWrap">
            <label>
                Temperature in Celsius:
                <input type="number" value={renderCelsius()} onChange={handleChangeCelsius} />
            </label>
            <label>
                Temperature in Fahrenheit:
                <input type="number" value={renderFahrenheit()} onChange={handleChangeFahrenheit} />
            </label>
        </div>
    )
}