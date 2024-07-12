import "./style.scss";
import BreadCrumb from "../theme/breadCrum";
import bankLogo from '../../assets/image/bidv-logo.png';
import momoLogo from '../../assets/image/momo-logo.png';

import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Notification from '../NotificationBox/Notification';
import { CartContext } from '../../component/CartContext';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

    const [deliveryMethod, setDeliveryMethod] = useState('home');
    const [paymentMethod, setPaymentMethod] = useState('online');
    const [onlinePaymentMethod, setOnlinePaymentMethod] = useState('bank');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('Đặt hàng thành công!');

    const parsePrice = (priceString) => {
        // Loại bỏ dấu chấm và chuyển đổi sang kiểu float
        return parseFloat(priceString.replace(/\./g, ''));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0);
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

        let message = 'Đặt hàng thành công!';
        if (paymentMethod === 'online') {
            message += "\nHóa đơn sẽ gửi về mail sau khi đã thanh toán!";
        }
        setNotificationMessage(message);

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            clearCart();
            setCartItems([]);
            navigate('/', { state: { cartItems: [] } });
            window.scrollTo(0, 0); // Di chuyển đến đầu trang khi chuyển về trang chủ
        }, 2000);
    };

    return (
        <>
            <BreadCrumb name="Thanh Toán" />
            <div className="checkout-page">
                <h2>Các Sản Phẩm</h2>
                <div className="checkout-items">
                    {cartItems.map(item => (
                        <React.Fragment key={item.id}>
                            <div className="checkout-item">
                                <img src={item.productImageUrl} alt={item.title} />
                                <div className="item-details">
                                    <p>{item.title}</p>
                                    <p>Giá: {parsePrice(item.price).toLocaleString('de-DE')} VND</p>
                                    <p>Số lượng: {item.quantity}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div className="checkout-total">
                    <h3>Tổng Cộng: {calculateTotalPrice().toLocaleString('de-DE')} VND</h3>
                </div>

                <div className="delivery-method">
                    <h3>Phương Thức Nhận Hàng</h3>
                    <div className="option-group">
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
                    <div className="cus-info">
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
                        <h3>Thông Tin Cửa Hàng</h3>
                        <div className="store-details">
                            <p>Địa chỉ cửa hàng: 169 Lê Văn Chí</p>
                            <p>Số điện thoại cửa hàng: 0123-456-789</p>
                        </div>
                    </div>
                )}

                <div className="payment-method">
                    <h3>Phương Thức Thanh Toán</h3>
                    <div className="option-group">
                        <label>
                            <input
                                type="radio"
                                value="cod"
                                checked={paymentMethod === 'cod'}
                                onChange={() => setPaymentMethod('cod')}
                            />
                            Thanh toán khi nhận hàng
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="online"
                                checked={paymentMethod === 'online'}
                                onChange={() => setPaymentMethod('online')}
                            />
                            Thanh toán online
                        </label>
                    </div>
                </div>

                {paymentMethod === 'online' && (
                    <div className="online-payment-options">
                        <h3>Chọn phương thức thanh toán online:</h3>
                        <div className="option-group">
                            <label>
                                <input
                                    type="radio"
                                    value="bank"
                                    checked={onlinePaymentMethod === 'bank'}
                                    onChange={() => setOnlinePaymentMethod('bank')}
                                />
                                Chuyển khoản ngân hàng
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="momo"
                                    checked={onlinePaymentMethod === 'momo'}
                                    onChange={() => setOnlinePaymentMethod('momo')}
                                />
                                Ví MoMo
                            </label>
                        </div>
                    </div>
                )}

                {paymentMethod === 'online' && onlinePaymentMethod === 'bank' && (
                    <div className="bank-details">
                        <h3>Thông Tin Ngân Hàng</h3>
                        <img src={bankLogo} alt="Bank Logo" />
                        <p>Ngân hàng BIDV - Chi nhánh Thủ Đức</p>
                        <p>Số tài khoản: 123456789</p>
                        <p>Chủ tài khoản: Nguyễn Khang</p>
                    </div>
                )}

                {paymentMethod === 'online' && onlinePaymentMethod === 'momo' && (
                    <div className="momo-details">
                        <h3>Thông Tin Ví MoMo</h3>
                        <img src={momoLogo} alt="MoMo Logo" />
                        <p>Số điện thoại: 0987654321</p>
                        <p>Chủ tài khoản: Nguyễn Khang</p>
                    </div>
                )}

                <button className="checkout-button" onClick={handlePayment}>
                    Đặt Hàng
                </button>

                {showNotification && (
                    <Notification message={<span>{notificationMessage}</span>} />
                )}
            </div>
        </>
    );
};

export default Checkout;
