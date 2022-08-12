import React from "react";

export const Formulary = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="campo">
          <label htmlFor="country">Country</label>
          <select type="text" id="country" name="country">
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
