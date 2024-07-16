import React, { useState, useEffect } from 'react';
import './ProductForm.css';
import {getProductById, saveProduct, UpdateProduct} from "../services/producto.service";
import {useParams} from "react-router-dom";

const ProductForm = () => {
    const { productId } = useParams();
    const initialProductState = {
        nombre: '',
        descripcion: '',
        valor: '',
        stock: '',
        imagenPath: ''
    };

    const [product, setProduct] = useState(initialProductState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    const response = await getProductById(productId);
                    setProduct(response);
                } catch (err) {
                    setError('Failed to load product data.');
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (productId) {
                await UpdateProduct(productId, product);
                alert("Producto actualizado correctamente")
            } else {
                await saveProduct(product)
                alert("Producto guardado correctamente")
                clearForm();
            }
        } catch (err) {
            console.log(err);
            setError('Failed to save product.');
        } finally {
            setLoading(false);
        }
    };

    const clearForm = () => {
        setProduct(initialProductState);
    };

    return (

        <div className="top-section">
            <div className="main-content" id="main-content">
                <div className="bottom-section">
                    <div className="form-container">
                        <h2>{productId ? 'Edit Product' : 'Create Product'}</h2>
                        {error && <p className="error">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={product.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="descripcion">Descripcion</label>
                                <input
                                    type="text"
                                    id="descripcion"
                                    name="descripcion"
                                    value={product.descripcion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="valor">Valor</label>
                                <input
                                    type="number"
                                    id="valor"
                                    name="valor"
                                    value={product.valor}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="stock">Stock</label>
                                <input
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    value={product.stock}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="imagenPath">Imagen</label>
                                <input
                                    type="text"
                                    id="imagenPath"
                                    name="imagenPath"
                                    value={product.imagenPath}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductForm;
