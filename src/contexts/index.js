import React from "react";

export const MyContext = React.createContext({
    scale: "c",
    setScale: () => false,
    
    temperature:"",
    setTemperature: () => false
});