import React from "react";
import { AppClima } from "./components/AppClima";
import { WeatherProvider } from "./context/WeatherProvider";

export const App = () => {
  return (
    <WeatherProvider>
      <AppClima />
    </WeatherProvider>
  );
};
