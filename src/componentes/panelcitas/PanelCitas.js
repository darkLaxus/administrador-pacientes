import React from 'react'

export default function PanelCitas({citas, eliminarCita}) {

    // ---------------------------------------------
    const mostrarListado = citas.map( cita => (
        <div className="card m-2" key={cita.id}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <span className="font-wight-bolder">Paciente: {cita.mascota}</span>
                <button className="btn btn-danger" onClick={ () => eliminarCita(cita.id)}>Eliminar Cita</button>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Dueño: {cita.dueño}</p>
                    <p>Descripcion: {cita.descripcion}</p>
                    <footer className="blockquote-footer">{cita.fecha} <cite title="Source Title">{cita.hora}</cite></footer>
                </blockquote>
            </div>
        </div>
    ))

    return (
        <div className="listaCitas m-2 p-2">
            {mostrarListado}
        </div>
    )
}