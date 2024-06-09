
import React, {memo, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';


import "./style.scss";
import item1Img from "assets/image/slider3.avif";

import BreadCrumb from "../theme/breadCrum";
import {CartContext} from "../../component/CartContext";


//
// const initialCartItems = [
//     { id: 1, img: item1Img, name: "Sản phẩm 1", price: 100000, quantity: 1 },
//
// ];

const ShoppingCart = () => {
    // const [cartItems, setCartItems] = useState(initialCartItems);
    // const [isEmptyCart, setIsEmptyCart] = useState(false);
    // const navigate = useNavigate();
    //
    // const handleQuantityChange = (id, delta) => {
    //     setCartItems(prevItems =>
    //         prevItems.map(item =>
    //             item.id === id
    //
    //                 ? { ...item, quantity: Math.max(1, item.quantity + delta) }
    //
    //
    //                 : item
    //         )
    //     );
    // };
    //
    // const handleRemoveItem = id => {
    //     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    // };
    //
    // const calculateTotalPrice = () => {
    //     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // };
    //
    // const handleCheckout = () => {
    //     if (cartItems.length === 0) {
    //         setIsEmptyCart(true); // Set isEmptyCart về true khi cart trôống
    //     } else {
    //         navigate('/checkout');
    //     }
    // };
    //
    // return (
    //     <>
    //         <BreadCrumb name="Giỏ hàng"/>
    //         <div className="shopping-cart">
    //             {/*<h2>Giỏ Hàng</h2>*/}
    //             <div className="cart-items">
    //                 {cartItems.map(item => (
    //                     <div key={item.id} className="cart-item">
    //                         <img src={item.img} alt={item.name}/>
    //                         <div className="item-details">
    //                             <p>{item.name}</p>
    //                             <p>Giá: {item.price.toLocaleString()} VND</p>
    //                             <div className="quantity-controls">
    //                                 <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
    //                                 <span>{item.quantity}</span>
    //                                 <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
    //                             </div>
    //                         </div>
    //                         <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>Xóa</button>
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="cart-total">
    //                 <h3>Tổng Cộng: {calculateTotalPrice().toLocaleString()} VND</h3>
    //             </div>
    //             {isEmptyCart && <p className="empty-cart-message">Giỏ hàng của bạn đang trống.</p>}
    //             <button className="checkout-button" onClick={handleCheckout}>
    //                 Thanh Toán
    //             </button>
    //         </div>
    //     </>
    //
    // );



    const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert('Giỏ hàng của bạn đang trống.');
        } else {
            navigate('/checkout');
        }
    };

    return (
        <>
            <BreadCrumb name="Giỏ hàng" />
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
                <div className="cart-total">
                    <h3>Tổng Cộng: {calculateTotalPrice()} VND</h3>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                    Thanh Toán
                </button>
            </div>
        </>
    );



};

export default memo(ShoppingCart);
