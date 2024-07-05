
import "./style.scss";
import BreadCrumb from "../theme/breadCrum";
import bankLogo from '../../assets/image/bidv-logo.png';
import momoLogo from '../../assets/image/momo-logo.png';

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./style.scss";
import Notification from '../NotificationBox/Notification';


const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

    const [deliveryMethod, setDeliveryMethod] = useState('home');
    const [paymentMethod, setPaymentMethod] = useState('online');
    const [onlinePaymentMethod, setOnlinePaymentMethod] = useState('bank');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePayment = () => {
        if (deliveryMethod === 'home' && (!address || !phone || !email)) {
            alert('Vui lòng điền đầy đủ thông tin nhận hàng.');
            return;
        }
        if (deliveryMethod === 'store' && (!phone || !email)) {
            alert('Vui lòng điền số điện thoại và email.');
            return;
        }
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            setCartItems([]);
            navigate('/', { state: { cartItems: [] } });
        }, 2000);
    };

    return (
        <>
            <BreadCrumb name="Thanh Toán"/>
            <div className="checkout-page">
                <h2>Trang Thanh Toán</h2>
                <div className="checkout-items">
                    {cartItems.map(item => (
                        <React.Fragment key={item.id}>
                            <div className="checkout-item">
                                <img src={item.productImageUrl} alt={item.title} />
                                <div className="item-details">
                                    <p>{item.title}</p>
                                    <p>Giá: {item.price.toLocaleString()} VND</p>
                                    <p>Số lượng: {item.quantity}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                {cartItems.length === 0 && <p className="empty-cart-message">Giỏ hàng của bạn đang trống.</p>}

                <div className="checkout-total">
                    <h3>Tổng Cộng: {calculateTotalPrice().toLocaleString()} VND</h3>
                </div>

                <div className="delivery-method">
                    <h3>Phương Thức Nhận Hàng</h3>
                    <label>
                        <input
                            type="radio"
                            value="home"
                            checked={deliveryMethod === 'home'}
                            onChange={() => setDeliveryMethod('home')}
                        />
                        Giao hàng tận nhà
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="store"
                            checked={deliveryMethod === 'store'}
                            onChange={() => setDeliveryMethod('store')}
                        />
                        Đến lấy tại cửa hàng
                    </label>
                </div>

                {deliveryMethod === 'home' && (
                    <div className="delivery-info">
                        <h3>Thông Tin Nhận Hàng</h3>
                        <label>
                            Địa chỉ:
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Nhập địa chỉ nhận hàng"
                            />
                        </label>
                        <label>
                            Số điện thoại:
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Nhập số điện thoại"
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email"
                            />
                        </label>
                    </div>
                )}

                {deliveryMethod === 'store' && (
                    <div className="store-info">
                        <h3>Thông Tin Khách Hàng</h3>
                        <label>
                            Số điện thoại của bạn:
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Nhập số điện thoại"
                            />
                        </label>
                        <label>
                            Email của bạn:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email"
                            />
                        </label>
                        <div className="store-details">
                            <h3>Thông Tin Cửa Hàng</h3>
                            <p>Địa chỉ cửa hàng: 169 Lê Văn Chí</p>
                            <p>Số điện thoại cửa hàng: 0123-456-789</p>
                        </div>
                    </div>
                )}

                <div className="payment-method">
                    <h3>Phương Thức Thanh Toán</h3>
                    <label>
                        <input
                            type="radio"
                            value="online"
                            checked={paymentMethod === 'online'}
                            onChange={() => setPaymentMethod('online')}
                        />
                        Thanh toán online
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={() => setPaymentMethod('cod')}
                        />
                        Thanh toán khi nhận hàng
                    </label>
                </div>

                {paymentMethod === 'online' && (
                    <div className="online-payment-options">
                        <label className="online-option">
                            <input
                                type="radio"
                                value="bank"
                                checked={onlinePaymentMethod === 'bank'}
                                onChange={() => setOnlinePaymentMethod('bank')}
                            />
                            Ngân hàng
                        </label>
                        <label className="online-option">
                            <input
                                type="radio"
                                value="momo"
                                checked={onlinePaymentMethod === 'momo'}
                                onChange={() => setOnlinePaymentMethod('momo')}
                            />
                            Ví điện tử MoMo
                        </label>
                    </div>
                )}

                {onlinePaymentMethod === 'bank' && (
                    <div className="bank-details">
                        <img src={bankLogo} alt="Bank Logo" />
                        <p>Số tài khoản: 192211133447</p>
                        <p>Tên tài khoản: Cửa hàng WatchStore</p>
                    </div>
                )}

                {onlinePaymentMethod === 'momo' && (
                    <div className="momo-details">
                        <img src={momoLogo} alt="MoMo Logo" />
                        <p>Số ĐT MoMo: 092131231</p>
                        <p>Tên tài khoản: Cửa hàng WatchStore</p>
                    </div>
                )}

                <button className="checkout-button" onClick={handlePayment}>
                    Thanh Toán Ngay
                </button>
            </div>
            {showNotification && <Notification message="Thanh toán thành công!" />}
        </>
    );
};

export default Checkout;
