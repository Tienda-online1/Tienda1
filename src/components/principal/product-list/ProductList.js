import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';
import {getAllProducts, getAvalaibleProducts} from "../../services/producto.service";
import {useOutletContext} from "react-router-dom";

function ProductList() {
    const userRole = localStorage.getItem('role');
    const { cart, updateCart } = useOutletContext();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.nombre === product.nombre);
        const updatedCart = [...cart];
        if (existingProductIndex > -1) {
            updatedCart[existingProductIndex].quantity++;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        updateCart(updatedCart);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let data
                if(userRole === 'ADMIN'){
                    data = await getAllProducts()
                }else{
                    data = await getAvalaibleProducts();
                }

                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container-items">
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    product={product}
                    addToCart={addToCart}
              />
            ))}
        </div>
    );
}

export default ProductList;
