import React, { memo } from 'react'
import "./style.scss";
import {Link} from "react-router-dom";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTikTok,
    AiOutlineYoutube
} from "react-icons/ai";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__about">
                            <div className="footer__about__logo">WATCH STORE
                                <ul>
                                    <li>
                                        Địa chỉ : 169 Lê Văn Chí, phường Linh Trung, Thủ Đức
                                    </li>
                                    <li>
                                        SĐT: 0123-456-789
                                    </li>
                                    <li>
                                        Email: watchstore@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer__widget">
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to="">Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to="">Thông tin về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to="">Sản phẩm kinh doanh</Link>
                                </li>
                                <li>
                                    <Link to="">Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to="">Giỏ hàng</Link>
                                </li>
                                <li>
                                    <Link to="">Danh sách ưa thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__widget"></div>
                        <h6>Khuyến mãi && ưu đãi</h6>
                        <p>Đăng kí nhận thông tin tại đây</p>
                        <form action="">
                            <div>
                                <input type="text" placeholder="Nhập Email"/>
                                <button type="submit" className="button-submit">Đăng kí</button>
                            </div>
                            <div className="footer__widget__social">
                                <div><AiOutlineFacebook/></div>
                                <div><AiOutlineYoutube/></div>
                                <div><AiOutlineTikTok/></div>
                                <div><AiOutlineInstagram/></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default memo(Footer);