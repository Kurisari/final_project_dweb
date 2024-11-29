import React from 'react';
import './Carrito.css'; // Crea este archivo para estilos específicos

const Carrito = () => {
    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            <p>Aquí verás los productos que has agregado al carrito.</p>
            {/* Lógica del carrito aquí */}
        </div>
    );
};

export default Carrito;
