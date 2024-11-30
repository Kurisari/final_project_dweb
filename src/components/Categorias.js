import React, { useState } from "react";
import products from "../assets/data/productos.json";
import "./Categorias.css";

const Categorias = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="categorias">
      {/* Encabezado con fondo de imagen */}
      <div className="categorias-header">
        <h2>Categorías de Productos</h2>
        <p>Encuentra deliciosas opciones para satisfacer tus antojos.</p>
      </div>

      {/* Barra con selector de categorías */}
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

      {/* Lista de productos */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button
              onClick={addToCart}
              className="add-cart"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
