import React from 'react';
import './Carrito.css';

const Carrito = ({ cartItems, setCartItems }) => {

    // Función para aumentar la cantidad de un producto
    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    // Función para disminuir la cantidad de un producto
    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0); 
    
        setCartItems(updatedCart);
    };

    // Función para eliminar un producto del carrito
    const removeItem = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    // Calcular el total
    const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div className="product-details">
                                <h3>{item.name}</h3>
                                <p className="product-price">${item.price}</p>
                                <p className="product-quantity">Cantidad: {item.quantity}</p>

                                <div className="product-actions">
                                    <button onClick={() => increaseQuantity(item.id)} className="increase-btn">+</button>
                                    <button onClick={() => decreaseQuantity(item.id)} className="decrease-btn">-</button>
                                    <button onClick={() => removeItem(item.id)} className="remove-btn">Eliminar</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="total-container">
                <p>Total: ${total}</p>
                <button className="checkout-btn">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Carrito;
