import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import BreadCrumb from "../theme/breadCrum";

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const parsePrice = (priceString) => {
        return  parseFloat(priceString.replace(/\./g, '')) ;
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parsePrice(item.price) * (item.quantity || 1), 0);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert('Giỏ hàng của bạn đang trống.');
        } else {
            navigate('/thanh-toan', { state: { cartItems } });
            window.scrollTo(0, 0);
        }
    };

    const handleRemoveItem = (item) => {
        dispatch({ type: 'cart.minus', payload: { product: item } });
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch({ type: 'cart.add', payload: { product: { ...item, quantity: item.quantity - 1 } } });
        }
    };

    return (
        <>
            <BreadCrumb name="Giỏ hàng"></BreadCrumb>
            <div className="shopping-cart">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.productImageUrl} alt={item.title} />
                            <div className="item-details">
                                <p>{item.name}</p>
                                <p>Giá: {parsePrice(item.price).toLocaleString('de-DE')} VND</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                    <span>{item.quantity || 1}</span>
                                    <button onClick={() => dispatch({ type: 'cart.add', payload: { product: { ...item, quantity: item.quantity + 1 } } })}>+</button>
                                </div>
                            </div>
                            <button className="remove-item" onClick={() => handleRemoveItem(item)}>Xóa</button>
                        </div>
                    ))}
                </div>
                {cartItems.length === 0 && <p className="empty-cart-message">Giỏ hàng của bạn đang trống.</p>}
                <div className="cart-total">
                    <h3>Tổng Cộng: {calculateTotalPrice().toLocaleString('de-DE')} VND</h3>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                    Thanh Toán
                </button>
            </div>
        </>
    );
};

export default memo(ShoppingCart);
