import React from 'react';
import './ProductItem.css';

const ProductItem = ({ img, nameProduct, price, onViewDetails }) => {
    return (
        <div className="product-item">
            <img src={img} alt={nameProduct} />
            <h3>{nameProduct}</h3>
            <p>Price: ${price}</p>
            <button onClick={onViewDetails}>Ver detalle</button>
        </div>
    );
};

export default ProductItem;
