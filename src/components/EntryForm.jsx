import { useState } from "react";
import { WashingMachineForm } from "./WashingMachineForm";

export const EntryForm = () => {
  const [value, setValue] = useState("");

  const handleSelectChange = (event) => {
    setValue(event.target.value);
    console.log(`Elegiste opción ${event.target.value}`);
  };

  return (
    <>
      <form className="row g-3">
        <div className="col-md-2">
          <select
            className="form-select"
            onChange={handleSelectChange}
            value={value}
          >
            <option value="" disabled>
              Elija tipo de equipo
            </option>
            <option value="1">Lavarropas</option>
            <option value="2">Heladeras</option>
            <option value="3">Electrodomésticos</option>
          </select>
        </div>
      </form>
      {value === "1" && <WashingMachineForm />}
      {value === "2" && (
        <div>
          {/* Inputs relacionados con Heladeras */}
          <p>Opciones para Heladeras</p>
        </div>
      )}
      {value === "3" && (
        <div>
          {/* Inputs relacionados con Electrodomésticos */}
          <p>Opciones para Electrodomésticos</p>
        </div>
      )}
    </>
  );
};
