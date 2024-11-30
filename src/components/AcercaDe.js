import React from 'react';
import './AcercaDe.css'; 

const AcercaDe = () => {
    return (
        <div className="acerca-de-container">
            <div className='titulo-container'>
                <h2 className="acerca-de-titulo">Acerca de Nosotros</h2>
            </div>

            <div className="acerca-de-seccion">
                <h3>Nuestra Historia</h3>
                <p>Desde 1995, Pollos "El Güero" ha deleitado a las familias locales con el auténtico sabor de pollos rostizados, preparados con una receta secreta que ha pasado de generación en generación.</p>
            </div>

            <div className="acerca-de-seccion">
                <h3>Nuestra Misión</h3>
                <p>Ofrecer a nuestros clientes productos frescos y deliciosos, con un servicio excepcional y un compromiso con la tradición culinaria mexicana.</p>
            </div>

            <div className="acerca-de-seccion">
                <h3>Valores</h3>
                <ul>
                    <li><strong>Calidad:</strong> Ingredientes frescos y de alta calidad.</li>
                    <li><strong>Compromiso:</strong> Servicio transparente y eficiente.</li>
                    <li><strong>Tradición:</strong> Recetas familiares auténticas.</li>
                    <li><strong>Innovación:</strong> Adaptándonos a tus necesidades.</li>
                </ul>
            </div>
        </div>
    );
};

export default AcercaDe;
