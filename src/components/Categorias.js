import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Categorias.css";

const Categorias = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("todos");
    const [addedProductId, setAddedProductId] = useState(null);

    useEffect(() => {
        axios.get('/api/productos')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching the menu:', error);
            });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedProductId(product.id);
        setTimeout(() => {
            setAddedProductId(null);
        }, 1000);
    };

    const filteredProducts =
        selectedCategory === "todos"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="categorias">
            <div className="categorias-header">
                <h2>Categorías de Productos</h2>
                <p>Encuentra deliciosas opciones para satisfacer tus antojos.</p>
            </div>

            <div className="category-select-container">
                <select
                    className="category-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="todos">Todos los productos</option>
                    <option value="pollo">Pollo</option>
                    <option value="hamburguesas">Hamburguesas</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="complementos">Complementos</option>
                </select>
            </div>

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={require(`../assets/${product.image}`)} alt={product.title}
                            className="product-image"
                        />
                        <div className="product-header">
                            <h3>{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                        </div>
                        <p className="product-description">{product.description}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className={`add-cart ${addedProductId === product.id ? 'added' : ''}`}
                        >
                            {addedProductId === product.id ? 'Agregado' : 'Agregar al carrito'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categorias;