import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';

export default function Formulario(props) {

    // ---------------------------------------------
    // states
    const [cita, setCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        descripcion: ''
    })
    const [error, setError] = useState(false)
    // destructuring
    const { mascota, dueño, fecha, hora, descripcion } = cita;

    // ---------------------------------------------
    // funcion que se ejecuta cada ves q un usuario escribe en un input
    const handleChange = e => {
        var nombreCampo = e.target.name;
        var valorCampo = e.target.value;

        setCita({
            ...cita,
            [nombreCampo]: valorCampo
        })
    }

    // ---------------------------------------------
    // enviar al componente padre el informe
    const enviarInforme = (e) => {
        e.preventDefault();
        // validar
        if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '') {
            setError(true);
            return;
        }
        // eliminar el mensaje previo
        setError(false);
        // asignar id
        cita.id = uuid();
        // enviar al componente padre
        props.crearCita(cita);
        // reinicar componente
        setCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            descripcion: ''
        })

    }

    return (
        <form className="formulario m-2 p-2" onSubmit={enviarInforme}>

            {(error === true) ? <div className="alert alert-danger text-center">hubo un error</div> : null}

            <div className="form-group">
                <label htmlFor="inputEmail3" className="text-white font-weight-bold">Nombre de la mascota</label>
                <input type="text" className="form-control" name="mascota" placeholder="Nombre del Dueño" onChange={handleChange} value={mascota} />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="text-white font-weight-bold">Nombre del Dueño</label>
                <input type="text" className="form-control" name="dueño" placeholder="Nombre de la Mascota" onChange={handleChange} value={dueño} />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="text-white font-weight-bold">Fecha de Ingreso</label>
                <input type="date" className="form-control" name="fecha" placeholder="Fecha de Ingreso" onChange={handleChange} value={fecha} />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="text-white font-weight-bold">Hora de Ingreso</label>
                <input type="time" className="form-control" name="hora" placeholder="Hora de Ingreso" onChange={handleChange} value={hora} />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="text-white font-weight-bold">Descripcion del problema</label>
                <textarea className="form-control input-textarea" name="descripcion" placeholder="Describa el problema" onChange={handleChange} value={descripcion} />
            </div>
            <button className="btn btn-dark form-control">Agregar Paciente</button>
        </form>
    )
}