import React, {useState} from "react";

// En la función flecha TareaForm se le pasa como parametro agregarTarea de forma destructurada.
const TareaForm = ({agregarTarea}) => {

// Uso del UseState
  const [input, setInput] = useState('');

  // función flecha para capturar el evento onSubmit 
  const formSubmit = (e) => {
    e.preventDefault();
    agregarTarea(input);
    setInput('');
  };

  // Devuelve el valor de la funcion flecha TareaForm.
  return (
    <form onSubmit={formSubmit}>
      <input
        type ="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Agregar tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  )
};

// Exportando la función principal
export default TareaForm;