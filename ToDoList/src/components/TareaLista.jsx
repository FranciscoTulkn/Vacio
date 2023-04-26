import React from "react";
import Tarea from "./Tarea";

// Función flecha de TareaLista.
const TareaLista = ({tareas, quitarTarea}) => {

  return (
    <>
      {
        tareas.map((tarea) => (
          <Tarea 
            key={tarea}
            tarea={tarea}
            quitarTarea={quitarTarea}
          />
        ))
      }
    </>
  );
};

// Exportando la función flecha TareaLista.
export default TareaLista;
