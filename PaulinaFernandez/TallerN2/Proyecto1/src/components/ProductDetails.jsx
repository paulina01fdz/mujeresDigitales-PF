import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onAddToCart }) => {
    if (!product) return <p></p>;

    return (
        <div className="product-details">
            <img src={product.img} alt={product.nameProduct} />
            <h3>{product.nameProduct}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={onAddToCart}>Agregar producto al carrito</button>
        </div>
    );
};

export default ProductDetails;
