import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);

    const handleAddToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                setAlertMessage(`${product.title} đã có trong giỏ hàng!`);
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                setAlertMessage(`${product.title} đã được thêm vào giỏ hàng!`);
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => {
                setAlertMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [alertMessage]);

    const handleQuantityChange = (id, delta) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart, handleQuantityChange, handleRemoveItem, alertMessage }}>
            {children}
        </CartContext.Provider>
    );
};
