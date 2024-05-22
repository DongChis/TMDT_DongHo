import { memo } from 'react'
import "./style.scss";
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We provide the finest selection of luxury watches. Our mission is to offer premium quality
                        timepieces
                        that stand the test of time.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@watchshop.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Watch Street, City, Country</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 WatchShop. All Rights Reserved.</p>
            </div>
        </footer>
    )
        ;
};
export default memo(Footer);