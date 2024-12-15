import DevicesList from "./components/DevicesList";
import { EntryForm } from "./components/EntryForm";
const App = () => {
  return (
    // El h1 debe ser de acuerdo al tipo de equipo elegido
    <>
      {/* <h1>{deviceType}</h1> */}
      <h1 className="text-center">ABM DE EQUIPOS</h1>
      {/* <DevicesList /> */}
      <EntryForm />
    </>
  );
};

export default App;
