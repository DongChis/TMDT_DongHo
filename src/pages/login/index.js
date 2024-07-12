import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { AiOutlineGoogle, AiOutlineFacebook } from "react-icons/ai";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic để xử lý đăng nhập ở đây
        if (username === 'admin' && password === 'password') {
            navigate('/home');
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-tabs">
                    <button className="active">Đăng nhập</button>
                    <button>Đăng ký</button>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Email hoặc số điện thoại</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-login">Đăng Nhập</button>
                </form>
                <div className="forgot-password">
                    <a href="#">Bạn quên mật khẩu?</a>
                </div>
                <div className="social-login">
                    <p>Đăng nhập bằng tài khoản xã hội của bạn</p>
                    <div className="social-buttons">
                        <button className="google"><AiOutlineGoogle /> Google</button>
                        <button className="facebook"><AiOutlineFacebook /> Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(LoginPage);
