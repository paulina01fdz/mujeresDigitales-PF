import React from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';

const NoProductsMessage = () => {
    return <p className="no-products">Seleccione el producto que desea</p>;
};

const ProductList = ({ products, onViewDetails }) => {
    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductItem
                        key={product.id}
                        img={product.img}
                        nameProduct={product.nameProduct}
                        price={product.price}
                        onViewDetails={() => onViewDetails(product)}
                    />
                ))
            ) : (
                <NoProductsMessage />
            )}
        </div>
    );
};

export default ProductList;