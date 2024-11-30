import React from 'react';

import './ListaEmpleados.css';

function ListaEmpleados({ empleados }) {
    return (
        <div className="empleados-container">
            {empleados.map((empleado) => (
                <div key={empleado.id} className="empleado-card">
                    <img
                        src={empleado.foto}
                        alt={`Foto de ${empleado.nombre}`}
                        className="empleado-foto"
                    />
                    <h2 className="empleado-nombre">{empleado.nombre}</h2>
                    <p className="empleado-puesto">{empleado.puesto}</p>
                    <a href={`mailto:${empleado.email}`} className="empleado-email">
                        {empleado.email}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ListaEmpleados;
