import { useState } from 'react';
import "./App.css";
import TareaForm from './components/TareaForm';
import TareaLista from './components/TareaLista';

function App() {
  
  // Uso del useState.
  const [tareas, setTareas] = useState([]); //Devuelve un array de tareas.

  // Función flecha para agregar Tareas.
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  // Función para quitar las tareas creadas.
  const quitarTarea = (tarea) => {
    setTareas(tareas.filter((t) => t !== tarea));
  };

  // Devuelve el valor de la funcion flecha App.
  return (
    //El primer agregarTarea es una propiedad de TareaForm y el segundo es la función flecha agregarTarea.
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <TareaForm agregarTarea={agregarTarea}/>
      <TareaLista tareas={tareas} quitarTarea={quitarTarea} />
    </div>
  )
}

export default App
