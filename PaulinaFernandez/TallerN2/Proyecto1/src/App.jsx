import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    {
      id: 1,
      img: 'https://springstep.vtexassets.com/arquivos/ids/171212-800-auto?v=638180282488800000&width=800&height=auto&aspect=true',
      nameProduct: 'Zapatos Nike',
      price: 80,
      quantity: 2,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1099&q=80',
      nameProduct: 'Reloj',
      price: 50,
      quantity: 12,
    },
    {
      id: 3,
      img: 'https://static.vecteezy.com/system/resources/previews/002/099/041/large_2x/red-car-classical-sedan-stylish-in-color-cartoon-flat-style-city-transport-theme-modern-urban-civilian-vehicles-illustration-isolated-on-white-background-vector.jpg',
      nameProduct: 'Carro',
      price: 30,
      quantity: 2,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const existingItem = cartItems.find(item => item.id === selectedProduct.id);
      if (existingItem) {
        setCartItems(cartItems.map(item =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCartItems([...cartItems, { ...selectedProduct, quantity: 1 }]);
      }
    }
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <ProductList products={products} onViewDetails={handleViewDetails} />
      <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;