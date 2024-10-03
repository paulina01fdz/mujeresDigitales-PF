import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemoveFromCart = (index) => {
        onRemoveFromCart(index);
    };

    return (
        <div className="cart">
            <h2>Carrito de compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito esta vacio</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={item.id}>
                            {item.nameProduct} - ${item.price} x {item.quantity}
                            <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default Cart;