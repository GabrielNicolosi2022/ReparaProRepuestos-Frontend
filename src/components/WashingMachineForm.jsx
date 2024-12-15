import { useState } from "react";
import { handleSubmit } from "../utils/formHandlers.js";

const initialFormData = {
  marca: "",
  modelo: "",
  fabricante: "",
  tecnologia: "",
  carga_tipo: "",
  eje: "",
  sist_lavado: "",
  capacidad: "",
  rpm_centrif: "",
  modo_service: "",
  repuestos: {
    programador_tipo: "",
    rodamientos: [],
    reten: "",
    eje: "",
    brida: "",
    electrovalvula: "",
    bomba_desagote: "",
    amortiguadores: "",
    motor: "",
    fuelle: "",
    polea: "",
    correa: "",
    capacitor: "",
  },
  thumbnails: [],
};

export const WashingMachineForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      repuestos: {
        ...formData.repuestos,
        [name]: value,
      },
    });
  };

  const handleArrayInputChange = (event, index) => {
    const { value } = event.target;
    setFormData((prevState) => {
      const updatedArray = [...prevState.repuestos.rodamientos];
      updatedArray[index] = value; // Actualizar solo el índice específico
      return {
        ...prevState,
        repuestos: {
          ...prevState.repuestos,
          rodamientos: updatedArray,
        },
      };
    });
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/v1/api/washing-machines";
    const result = await handleSubmit(formData, url);
    console.log("result: ", result);
    if (result.success) {
      alert("datos enviados exitosamente");
      setFormData(initialFormData);
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <form className="row" onSubmit={onSubmit}>
      <h2 className="subtitles">Ingreso de datos del Lavarropas</h2>
      {/* Row-1 */}
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="marca"
          placeholder="Marca"
          value={formData.marca}
          onChange={handleInputChange}
          required
        />
        <label className="ms-2">Marca</label>
      </div>
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={formData.modelo}
          onChange={handleInputChange}
          required
        />
        <label className="ms-2">Modelo</label>
      </div>
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control "
          type="text"
          name="fabricante"
          placeholder="Fabricante"
          value={formData.fabricante}
          onChange={handleInputChange}
        />
        <label className="ms-2">Fabricante</label>
      </div>
      {/* Row-2 */}
      <div className="form-floating mb-3 col-md-3">
        <select
          className="form-select"
          name="tecnologia"
          value={formData.tecnologia}
          onChange={handleInputChange}
          required
        >
          <option>Seleccione una opción</option>
          <option value="convencional">Convencional</option>
          <option value="inverter">Inverter</option>
        </select>
        <label className="ms-2">Tecnología</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <select
          className="form-select"
          name="carga_tipo"
          value={formData.carga_tipo}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="frontal">Frontal</option>
          <option value="superior">Superior</option>
        </select>
        <label className="ms-2">Tipo de carga</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <select
          className="form-select"
          name="eje"
          value={formData.eje}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="vertical">Vertical</option>
          <option value="horizontal">Horizontal</option>
        </select>
        <label className="ms-2">Eje</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <select
          className="form-select"
          name="sist_lavado"
          value={formData.sist_lavado}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="europeo">Europeo</option>
          <option value="americano">Americano</option>
          <option value="asiatico">Asiático</option>
        </select>
        <label className="ms-2">Sistema de Lavado</label>
      </div>
      {/* Row-3 */}
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="capacidad"
          placeholder="Capacidad (Kg.)"
          value={formData.capacidad}
          onChange={handleInputChange}
          required
        />
        <label className="ms-2">Capacidad (Kg.)</label>
      </div>
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="rpm_centrif"
          placeholder="RPM de Centrifugado"
          value={formData.rpm_centrif}
          onChange={handleInputChange}
        />
        <label className="ms-2">RPM de Centrifugado</label>
      </div>
      <div className="form-floating mb-3 col-md-4">
        <textarea
          className="form-control"
          type="text"
          name="modo_service"
          placeholder="Modo Service"
          value={formData.modo_service}
          onChange={handleInputChange}
        />
        <label className="ms-2">Modo Service</label>
      </div>
      {/* -Apartado Repuestos- */}
      <h3 className="subtitles">Repuestos</h3>
      {/* Row-4 */}
      <div className="form-floating mb-3 col-md-3">
        <select
          className="form-select"
          name="programador_tipo"
          value={formData.repuestos.programador_tipo}
          onChange={handleNestedInputChange}
        >
          <option>Seleccione una opción</option>
          <option value="mecanico">Mecánico</option>
          <option value="placa electronica">Placa Electrónica</option>
        </select>
        <label className="ms-2">Tipo de Programador</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <input
          className="form-control"
          type="text"
          name="motor"
          placeholder="Motor"
          value={formData.repuestos.motor}
          onChange={handleNestedInputChange}
          required
        />
        <label className="ms-2">Motor</label>
      </div>
      <div className="col-md-6"></div>
      {/* Row-5 */}
      <div className="form-floating mb-3 col-md-2">
        <input
          className="form-control"
          type="text"
          name="rodamientos"
          placeholder="Rodamiento externo"
          value={formData.repuestos.rodamientos[0] || ""} // Index 0 para externo
          onChange={(event) => handleArrayInputChange(event, 0)}
        />
        <label className="ms-2">Rodamiento externo</label>
      </div>
      <div className="form-floating mb-3 col-md-2">
        <input
          className="form-control"
          type="text"
          name="rodamiento2"
          placeholder="Rodamiento interno"
          value={formData.repuestos.rodamientos[1] || ""} // Index 1 para interno
          onChange={(event) => handleArrayInputChange(event, 1)}
        />
        <label className="ms-2">Rodamiento interno</label>
      </div>
      <div className="form-floating mb-3 col-md-2">
        <input
          className="form-control"
          type="text"
          name="reten"
          placeholder="Retén"
          value={formData.repuestos.reten}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Retén</label>
      </div>
      <div className="form-floating mb-3 col-md-2">
        <input
          className="form-control"
          type="text"
          name="eje"
          placeholder="Eje"
          value={formData.repuestos.eje}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Eje</label>
      </div>
      <div className="form-floating mb-3 col-md-2">
        <input
          className="form-control"
          type="text"
          name="brida"
          placeholder="Brida"
          value={formData.repuestos.brida}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Brida</label>
      </div>
      <div className="form-floating mb-3 col-md-2"></div>
      {/* Row-4 */}
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="electrovalvula"
          placeholder="Electroválvula"
          value={formData.repuestos.electrovalvula}
          onChange={handleNestedInputChange}
          required
        />
        <label className="ms-2">Electroválvula</label>
      </div>
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="bomba_desagote"
          placeholder="Bomba de desagote"
          value={formData.repuestos.bomba_desagote}
          onChange={handleNestedInputChange}
          required
        />
        <label className="ms-2">Bomba de desagote</label>
      </div>
      <div className="form-floating mb-3 col-md-4">
        <input
          className="form-control"
          type="text"
          name="amortiguadores"
          placeholder="Amortiguadores"
          value={formData.repuestos.amortiguadores}
          onChange={handleNestedInputChange}
          required
        />
        <label className="ms-2">Amortiguadores</label>
      </div>
      {/* Row-5 */}
      <div className="form-floating mb-3 col-md-3">
        <input
          className="form-control"
          type="text"
          name="fuelle"
          placeholder="Fuelle"
          value={formData.repuestos.fuelle}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Fuelle</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <input
          className="form-control"
          type="text"
          name="polea"
          placeholder="Polea"
          value={formData.repuestos.polea}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Polea</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <input
          className="form-control"
          type="text"
          name="correa"
          placeholder="Correa"
          value={formData.repuestos.correa}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Correa</label>
      </div>
      <div className="form-floating mb-3 col-md-3">
        <input
          className="form-control"
          type="text"
          name="capacitor"
          placeholder="Capacitor"
          value={formData.repuestos.capacitor}
          onChange={handleNestedInputChange}
        />
        <label className="ms-2">Capacitor</label>
      </div>
      {/* -Apartado Imágenes- */}
      <h3 className="subtitles">Imágenes</h3>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          value={formData.thumbnails}
          onChange={handleNestedInputChange}
          multiple
        />
        <label className="ms-3 text-secondary">
          Puede ingresar fotos, circuito eléctrico o cualquier imágen relevante.
        </label>
      </div>
      {/* Submit */}
      <div className="form-check ms-3 mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label text-info">
          Todos los datos ingresados son correctos
        </label>
      </div>
      <div className="d-grid col-4 my-3 mx-auto">
        <button
          className="btn btn-primary btn-lg disabled}"
          type="submit"
          disabled={!isCheckboxChecked}
        >
          {/* El botón estará desabilitado hasta que el checkbox esté marcado */}
          Enviar
        </button>
      </div>
    </form>
  );
};
