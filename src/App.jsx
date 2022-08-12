import React from "react";
import { AppClima } from "./components/AppClima";
import { WeatherProvider } from "./context/WeatherProvider";

export const App = () => {
  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima />
    </WeatherProvider>
  );
};
