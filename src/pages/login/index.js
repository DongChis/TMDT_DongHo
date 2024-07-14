import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './style.scss';
import { AiOutlineGoogle, AiOutlineFacebook } from "react-icons/ai";

const LoginModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [previousPath, setPreviousPath] = useState('/');

    useEffect(() => {
        if (isOpen) {
            setIsLogin(true); // Luôn đặt trạng thái thành "Đăng nhập" khi mở
            setPreviousPath(location.pathname); // Lưu trữ vị trí trang hiện tại
        }
    }, [isOpen, location.pathname]);

    const handleToggle = (login) => {
        setIsLogin(login);
        if (!login) {
            // Đặt lại các trạng thái khi chuyển sang chế độ "Đăng ký"
            setFullName('');
            setPhoneNumber('');
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } else {
            // Đặt lại các trạng thái khi chuyển sang chế độ "Đăng nhập"
            setUsername('');
            setPassword('');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            navigate('previousPath');
            onClose();
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu không trùng khớp');
            return;
        }
        // Thực hiện đăng ký
        alert('Registration successful');
        navigate(previousPath); // quay về trang đang ở trước khi vô đăng nhập
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="login-modal-overlay">
            <div className="login-modal">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="toggle-container">
                    <button className={`toggle-button ${isLogin ? 'active' : ''}`} onClick={() => handleToggle(true)}>Đăng nhập</button>
                    <button className={`toggle-button ${!isLogin ? 'active' : ''}`} onClick={() => handleToggle(false)}>Đăng ký</button>
                    <div className={`toggle-slider ${isLogin ? 'left' : 'right'}`}></div>
                </div>
                <h2>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
                <form onSubmit={isLogin ? handleLogin : handleRegister}>
                    {!isLogin && (
                        <>
                            <div className="input-group">
                                <label htmlFor="fullName">Họ tên</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phoneNumber">Số điện thoại</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="input-group">
                        <label htmlFor="username">{isLogin ? 'Email hoặc Sdt' : 'Tên đăng nhập'}</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</button>
                </form>
                {isLogin && (
                    <div className="social-login">
                        <p>Đăng nhập bằng tài khoản xã hội của bạn</p>
                        <button className="google"><AiOutlineGoogle /> Google</button>
                        <button className="facebook"><AiOutlineFacebook /> Facebook</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
