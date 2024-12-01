import React, { useState } from 'react';
import Checkout from './Checkout';
import './Carrito.css';

const Carrito = ({ cartItems, setCartItems }) => {
    const [isCheckout, setIsCheckout] = useState(false);

    // Función para eliminar un producto del carrito
    const removeItem = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    // Función para aumentar la cantidad de un producto
    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map(item => 
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    // Función para disminuir la cantidad de un producto
    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return null; // Elimina el producto si la cantidad llega a 0
                }
            }
            return item;
        }).filter(Boolean);  // Filtra los elementos nulos
        setCartItems(updatedCart);
    };

    const handleCheckout = () => {
        setIsCheckout(true);
    };

    const completePurchase = () => {
        setCartItems([]);  // Vacía el carrito
        setIsCheckout(false);
    };

    // Calcular el total
    const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

    return (
        <div className="carrito">
            {isCheckout ? (
                <Checkout cartItems={cartItems} onComplete={completePurchase} />
            ) : (
                <>
                    <h2>Tu Carrito de Compras</h2>
                    {cartItems.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <>
                                {cartItems.map((item) => (
                                <div key={item.id} className="carrito-item">
                                    <img src={require(`../assets/${item.image}`)} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <span className="item-title">{item.name}</span>
                                        <span className="item-price">${parseFloat(item.price).toFixed(2)}</span>
                                    </div>
                                    <div className="item-actions">
                                        <div className="item-quantity">
                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                        <button onClick={() => removeItem(item.id)} className="remove-btn">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="total-container">
                                <h3>Total: ${total}</h3>
                                <button className="checkout-btn" onClick={handleCheckout}>Finalizar Compra</button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Carrito;
