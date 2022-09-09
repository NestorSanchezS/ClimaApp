import React from "react";
import { useWeather } from "../hooks/useWeather";
import { Error } from "./Error";

export const Formulary = () => {
  const { dataForm, handleChangeData, setError, error, consultWeather } =
    useWeather();
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (Object.values(dataForm).includes("")) {
      setError(true);
      return;
    }
    setError(false);
    consultWeather(dataForm);
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmitData}>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="campo">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={dataForm.city}
            onChange={({ target }) => handleChangeData({ target })}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">Country</label>
          <select
            type="text"
            id="country"
            name="country"
            value={dataForm.country}
            onChange={({ target }) => handleChangeData({ target })}
          >
            <option value="">--Select a country--</option>
            <option value="US">United State</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input type="submit" value="Check Weather" />
      </form>
    </div>
  );
};
