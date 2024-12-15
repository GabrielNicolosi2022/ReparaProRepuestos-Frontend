import React, { useEffect, useState } from "react";

const DevicesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/lavarropas/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Todos los equipos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: "1%" }}>
              #
            </th>
            <th scope="col">Equipo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                {item.marca} {item.modelo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DevicesList;
