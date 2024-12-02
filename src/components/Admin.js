import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    id: null,
    name: "",
    price: "",
    category: "",
    description: "",
    image: "", 
  });

  const API_URL = "/api/productos"; 

  useEffect(() => {
    fetchProducts();
  }, []);

  // Obtener los productos de la API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Cambio en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Enviar el formulario (crear o actualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: productForm.name,
      price: productForm.price,
      category: productForm.category,
      description: productForm.description,
      image: productForm.image, // URL
    };

    try {
      if (productForm.id) {
        // Actualizar producto
        await axios.put(`${API_URL}/${productForm.id}`, productData);
      } else {
        // Crear nuevo producto
        await axios.post(API_URL, productData);
      }
      fetchProducts(); // Refrescar lista
      resetForm();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  // Desplazar form
  const handleEdit = (product) => {
    setProductForm(product);
    document.getElementById('admin-form').scrollIntoView({ behavior: 'smooth' });
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchProducts(); 
      } catch (error) {
        console.error("Error deleting product", error);
      }
    }
  };

  // Resetear el formulario
  const resetForm = () => {
    setProductForm({
      id: null,
      name: "",
      price: "",
      category: "",
      description: "",
      image: "", 
    });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="admin-product-form" id="admin-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={productForm.name}
          onChange={handleInputChange}
          required
          className="admin-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={productForm.price}
          onChange={handleInputChange}
          required
          className="admin-input"
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={productForm.category}
          onChange={handleInputChange}
          required
          className="admin-input"
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={productForm.description}
          onChange={handleInputChange}
          required
          className="admin-textarea"
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={productForm.image}
          onChange={handleInputChange}
          required
          className="admin-input"
        />
        <button type="submit" className="admin-button">
          {productForm.id ? "Actualizar Producto" : "Agregar Producto"}
        </button>
        {productForm.id && (
          <button type="button" onClick={resetForm} className="admin-button">
            Cancelar
          </button>
        )}
      </form>

      <h2 className="admin-subtitle">Lista de productos</h2>
      <div className="admin-product-list">
        {products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="admin-product-card">
              <img
                src={require(`../assets/${product.image}`)}
                alt={product.name}
                className="admin-product-image"
              />
              <h3 className="admin-product-name">{product.name}</h3>
              <p className="admin-product-description">{product.description}</p>
              <p className="admin-product-category">{product.category}</p>
              <p className="admin-product-price">${product.price}</p>
              <button onClick={() => handleEdit(product)} className="admin-button">
                Editar
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="admin-button admin-delete-button"
              >
                Borrar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
