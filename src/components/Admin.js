import React, { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    id: null,
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProductForm((prevForm) => ({
      ...prevForm,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in productForm) {
      formData.append(key, productForm[key]);
    }

    try {
      if (productForm.id) {
        // Actualizar
        await fetch(`http://localhost:5000/products/${productForm.id}`, {
          method: "PUT",
          body: formData,
        });
      } else {
        // Agregar
        await fetch("http://localhost:5000/products", {
          method: "POST",
          body: formData,
        });
      }
      fetchProducts(); // Refrescar lista
      resetForm();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleEdit = (product) => {
    setProductForm(product);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts(); // Refrescar lista
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const resetForm = () => {
    setProductForm({
      id: null,
      name: "",
      price: "",
      category: "",
      description: "",
      image: null,
    });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="admin-product-form">
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
          type="file"
          name="image"
          onChange={handleFileChange}
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
        {products.map((product) => (
          <div key={product.id} className="admin-product-card">
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
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
        ))}
      </div>
    </div>
  );
};

export default Admin;
