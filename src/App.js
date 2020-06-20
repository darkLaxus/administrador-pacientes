import React, { useState, useEffect } from 'react';
import './App.css';

import Formulario from './componentes/formulario/Formulario'
import PanelCitas from './componentes/panelcitas/PanelCitas'

function App() {

  // ---------------------------------------------
  const [citas, setCitas] = useState([])

  // ---------------------------------------------
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      setCitas(citasIniciales)
    }
  }, [])

  useEffect(() => {
    var citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } 
    else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);


  // ---------------------------------------------
  const crearCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ])
  }

  // ---------------------------------------------
  // funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id)
    setCitas(nuevasCitas)
  }

  const titulo = citas.length === 0 ? "no hay citas " : "Listado de citas";

  return (
    <div className="d-flex justify-content-around flex-wrap p-5">
      <div className="d-flex flex-column">
        <h3 className="h3 p-4 text-center text-uppercase">Ingreso de mascotas</h3>
        <Formulario crearCita={crearCita} />
      </div>
      <div className="d-flex flex-column">
        <h3 className="h3 p-4 text-center text-uppercase">{titulo}</h3>
        <PanelCitas
          citas={citas}
          eliminarCita={eliminarCita}
        />
      </div>
    </div>
  );
}

export default App;
