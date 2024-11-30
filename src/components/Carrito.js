import React from 'react';
import './Carrito.css';

const Carrito = ({ cartItems }) => {
    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="product-price">{item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Carrito;