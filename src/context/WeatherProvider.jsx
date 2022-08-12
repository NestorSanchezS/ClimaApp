import React from "react";
import { createContext } from "react";

export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  return (
    <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>
  );
};
