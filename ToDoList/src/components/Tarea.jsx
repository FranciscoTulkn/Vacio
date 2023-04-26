import React, {useState} from "react";

// Función flecha tarea
const Tarea = ({tarea, quitarTarea}) => {

//Usando el useState de React. 
const [editando, setEditando] = useState(false);
const [tareaEditada, setTareaEditada] = useState(tarea);

// Función flecha para editar una de las tareas agregadas.
const editarTarea = () => {
  setEditando(!editando);
};

// Variable para manejar la edición de la tarea
const textoTarea = <span>{tarea}</span>

// Variable para la tarea ya editada.
const inputTareaEditada = <input type="text" value={tareaEditada} />

  return(
    <div className="tarea">
      {
        editando ? inputTareaEditada : textoTarea
      }

      <button onClick={editarTarea}>
        Editar
      </button>
      <button onClick={() => quitarTarea(tarea)} className="btn-eliminar">
        Eliminar
      </button>
    </div>
  );
}

// Exportando la función flecha Tarea
export default Tarea;