import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, onComplete }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        correo: '',
        tarjeta: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí normalmente procesarías el pago (simulado)
        alert('¡Pago realizado con éxito!');
        onComplete();  // Limpia el carrito o redirige a una página de agradecimiento
    };

    const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

    return (
        <div className="checkout-container">
            <h2>Proceso de Pago</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre Completo:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Dirección de Envío:</label>
                    <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico:</label>
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Número de Tarjeta:</label>
                    <input type="text" name="tarjeta" value={formData.tarjeta} onChange={handleChange} required maxLength="16"/>
                </div>
                <h3>Total a pagar: ${total}</h3>
                <button type="submit" className="pay-btn">Realizar Pago</button>
            </form>
        </div>
    );
};

export default Checkout;
