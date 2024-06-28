import React, { memo, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../component/CartContext';

import "./style.scss";
import BreadCrumb from "../theme/breadCrum";

const ShoppingCart = () => {
    const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext); // Sử dụng giỏ hàng từ context
    const [isEmptyCart, setIsEmptyCart] = useState(false);
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            setIsEmptyCart(true);
        } else {
            navigate('/thanh-toan', { state: { cartItems } });
        }
    };

    return (
        <>
            <BreadCrumb name="Giỏ hàng"/>
            <div className="shopping-cart">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.productImageUrl} alt={item.title} />
                            <div className="item-details">
                                <p>{item.title}</p>
                                <p>Giá: {item.price.toLocaleString()} VND</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                </div>
                            </div>
                            <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>Xóa</button>
                        </div>
                    ))}
                </div>
                {cartItems.length === 0 && <p className="empty-cart-message">Giỏ hàng của bạn đang trống.</p>}
                <div className="cart-total">
                    <h3>Tổng Cộng: {calculateTotalPrice().toLocaleString()} VND</h3>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                    Thanh Toán
                </button>
            </div>
        </>
    );
};

export default memo(ShoppingCart);
