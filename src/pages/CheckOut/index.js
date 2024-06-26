import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./style.scss";
import BreadCrumb from "../theme/breadCrum";

const Checkout = () => {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [shippingMethod, setShippingMethod] = useState('home'); // 'home' for home delivery, 'store' for store pickup
    const [shippingAddress, setShippingAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [onlinePaymentOption, setOnlinePaymentOption] = useState('');
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        setOnlinePaymentOption(''); // Reset online payment option when payment method changes
    };

    const handleShippingMethodChange = (event) => {
        setShippingMethod(event.target.value);
    };

    const handleOnlinePaymentOptionChange = (event) => {
        setOnlinePaymentOption(event.target.value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (shippingMethod === 'home' && !shippingAddress) {
            newErrors.shippingAddress = 'Địa chỉ nhận hàng là bắt buộc.';
        }
        if (!phoneNumber) newErrors.phoneNumber = 'Số điện thoại là bắt buộc.';
        if (!email) newErrors.email = 'Email là bắt buộc.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            if (paymentMethod === 'cod') {
                alert("Đơn hàng của bạn đã được đặt. Bạn sẽ thanh toán khi nhận hàng.");
            } else {
                if (onlinePaymentOption === 'bank') {
                    alert("Bạn đã chọn thanh toán qua ngân hàng.");
                } else if (onlinePaymentOption === 'momo') {
                    alert("Bạn đã chọn thanh toán qua MoMo.");
                }
                alert("Bạn sẽ nhận được hóa đơn qua email khi thanh toán thành công.");
            }
            navigate('/');
        }
    };

    // Clear error messages when user starts typing
    const handleInputChange = (setter, field) => (event) => {
        setter(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    };

    return (
        <>
            <BreadCrumb name="Thanh Toán" />
            <div className="checkout-page">
                <h2>Thông Tin Thanh Toán</h2>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.name} />
                            <div className="item-details">
                                <p>{item.name}</p>
                                <p>Giá: {item.price.toLocaleString()} VND</p>
                                <p>Số lượng: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <h3>Tổng Cộng: {calculateTotalPrice().toLocaleString()} VND</h3>
                </div>
                <div className="shipping-method">
                    <h3>Chọn phương thức nhận hàng:</h3>
                    <select value={shippingMethod} onChange={handleShippingMethodChange}>
                        <option value="home">Giao hàng tận nơi</option>
                        <option value="store">Nhận tại cửa hàng</option>
                    </select>
                </div>
                {shippingMethod === 'home' && (
                    <div className="shipping-info">
                        <h3>Thông Tin Nhận Hàng:</h3>
                        <div>
                            <label htmlFor="shippingAddress">Địa chỉ nhận hàng</label>
                            <input
                                type="text"
                                id="shippingAddress"
                                value={shippingAddress}
                                onChange={handleInputChange(setShippingAddress,'shippingAddress')}
                            />
                            {errors.shippingAddress && <p className="error">{errors.shippingAddress}</p>}
                        </div>
                    </div>
                )}
                <div className="contact-info">
                    <h3>Thông Tin Liên Lạc:</h3>
                    <div>
                        <label htmlFor="phoneNumber">Số điện thoại</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={handleInputChange(setPhoneNumber, 'phoneNumber')}
                        />
                        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleInputChange(setEmail, 'email')}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>
                <div className="payment-method">
                    <h3>Chọn phương thức thanh toán:</h3>
                    <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                        <option value="online">Thanh toán online</option>
                    </select>
                </div>
                {paymentMethod === 'online' && (
                    <div className="online-payment-options">
                        <h3>Chọn phương thức thanh toán online:</h3>
                        <select value={onlinePaymentOption} onChange={handleOnlinePaymentOptionChange}>
                            <option value="">-- Chọn phương thức thanh toán --</option>
                            <option value="bank">Ngân hàng</option>
                            <option value="momo">MoMo</option>
                        </select>
                        {onlinePaymentOption === 'bank' && (
                            <div className="bank-details">
                                <img src="assets/image/bidv-logo.png" alt="BIDV Logo"/>
                                <p>Tên ngân hàng: BIDV</p>
                                <p>Số tài khoản: 000000001</p>
                                <p>Tên tài khoản: Nguyễn Khang</p>
                            </div>
                        )}
                        {onlinePaymentOption === 'momo' && (
                            <div className="momo-details">
                                <img src="assets/image/momo-logo.png" alt="MoMo Logo"/>
                                <p>Số điện thoại: 0908070605</p>
                                <p>Tên tài khoản: Nguyễn Khang</p>
                            </div>
                        )}
                    </div>
                )}
                <button className="checkout-button" onClick={handlePlaceOrder}>Đặt Hàng</button>
            </div>
        </>
    );
};

export default Checkout;