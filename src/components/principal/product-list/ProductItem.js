import React from 'react';
import {Link, Navigate} from "react-router-dom";

function ProductItem({product, addToCart}) {
    const userRole = localStorage.getItem('role');

    return (
        <div className="item">
            <figure>
                <img src={`productos/${product.imagenPath}`} alt="producto"/>
            </figure>
            <div className="info-product">
                <h2>{product.descripcion}</h2>
                <p className="price">${product.valor}</p>
                {userRole === 'ADMIN' && (
                    <p className="stok">{product.stock} unidades</p>

                )}
                {userRole === 'ADMIN' && (
                    <Link to={`/products/edit/${product.id}`}>
                        <button type="button">Editar</button>
                    </Link>

                )}
                {userRole === 'USER' && (
                    <button className="btn-add-cart" onClick={() => addToCart(product)}>Añadir al carrito</button>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
