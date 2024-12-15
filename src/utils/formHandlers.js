export const handleSubmit = async (formData, url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Respuesta del servidor:", result);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error al conectar con el servidor:", error);
    return { success: false, error: error.message };
  }
};
