import React from "react";
import { MyContext } from "../contexts";

export const BoilingVerdictContext = () => {
    const myContext = React.useContext(MyContext);
    const temp = parseFloat(myContext.temperature);
    let getBoilingStatus;
    if(myContext.scale === "c"){
        getBoilingStatus = temp >= 100 ?  "Water will be boil" : "Water would not be boil";
    } else {
        getBoilingStatus = temp >= 212 ?  "Water will be boil" : "Water would not be boil";
    }

    return (
        <p className="boilingValue">{getBoilingStatus}</p>
    )
};