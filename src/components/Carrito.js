import React from 'react';
import './Carrito.css';

const Carrito = ({ cartItems }) => {
    // Calcular el total del carrito
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div className="product-details">
                                <h3>{item.name}</h3>
                                <p className="product-price">${item.price}</p>
                                <p className="product-quantity">Cantidad: {item.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {/* Mostrar el total */}
            <div className="total-container">
                <p>Total: ${total}</p>
                <button className="checkout-btn">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Carrito;
