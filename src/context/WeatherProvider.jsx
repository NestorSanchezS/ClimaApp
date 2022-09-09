import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [dataForm, setDataForm] = useState({
    city: "",
    country: "",
  });

  const handleChangeData = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const consultWeather = (data) => {
    console.log(data);
  };

  return (
    <WeatherContext.Provider
      value={{ dataForm, handleChangeData, error, setError, consultWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
