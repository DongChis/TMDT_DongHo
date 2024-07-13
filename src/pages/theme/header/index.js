import React, { memo, useContext, useEffect, useState } from 'react';
import "./style.scss";
import {
    AiOutlineUser, AiOutlineTwitter, AiTwotoneStar,
    AiOutlineMail, AiTwotoneCar, AiOutlineShoppingCart, AiOutlineMenu, AiOutlinePhone, AiOutlineHeart
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/Router/router";
import { CartContext } from "../../../component/CartContext";
import LoginModal from 'pages/login/index';

const Header = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => setLoginModalOpen(true);
    const closeLoginModal = () => setLoginModalOpen(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const [isShowCategory, setShowCategory] = useState(isHome);
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.pages.home,
        },
        {
            name: "Giới thiệu",
            path: ROUTERS.pages.profile,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.pages.PRODUCTS,
            child: [
                {
                    name: "Đồng hồ 1",
                    path: "",
                },
                {
                    name: "Đồng hồ 2",
                    path: "",
                },
                {
                    name: "Đồng hồ 3",
                    path: "",
                },
                {
                    name: "Đồng hồ 4",
                    path: "",
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.pages.REVIEW,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.pages.CONTACT,
        }
    ]);

    useEffect(() => {
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome);
        setShowCategory(isHome);
    }, [location]);

    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        "https://seikowatches.co.in/cdn/shop/files/5-Sports_banner-Desktop_SRPK87K1_SRPK89K1_SRPK91K1_2049-x-1024_1024x1024.jpg?v=1712829089",
        "https://www.gbwatchshop.com/media/catalog/category/Accurist_Goldbar_Banner_1224x550px_1.jpg",
        "https://seikowatches.co.in/cdn/shop/files/Astron-Special-page--desktop-banner_11d56956-cd8a-4cf3-9bad-eed112a59251_1024x1024.jpg?v=1709288048"
    ];

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Automatically switch slides every 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [activeIndex]);

    const categories = [
        "san pham 1",
        "san pham 2",
        "san pham 3",
        "san pham 4",
    ];
    const { cartItems } = useContext(CartContext);
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />watchstore@gmail.com
                                </li>
                                <li>
                                    <AiTwotoneCar />Free ship trên toàn quốc
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={"#"}><AiOutlineHeart /></Link>
                                </li>
                                <li>
                                    <Link to={"#"}><AiOutlineTwitter /></Link>
                                </li>
                                <li>
                                    <Link to={"#"}><AiTwotoneStar /></Link>
                                </li>
                                <li>
                                    <button onClick={openLoginModal}><AiOutlineUser /><span>Đăng nhập</span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__logo">
                            <h1>WATCH STORE</h1>
                        </div>
                    </div>
                    <div className="col-xl-3 col-xl-6">
                        <div className="header__menu">
                            <ul>
                                {menus?.map((menus, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menus?.path}>{menus?.name}</Link>
                                        {menus.child && (
                                            <ul className="header__menu__dropdown">
                                                {menus.child.map((childItem, childKey) => (
                                                    <li key={`${menuKey}-${childKey}`}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li>
                                    <Link to={ROUTERS.pages.CART}><AiOutlineShoppingCart />
                                        <span>{cartItems.length}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row heros__categories_container">
                    <div className="col-lg-3 heros__categories">
                        <div className="heros__categories_all" onClick={() => setShowCategory(!isShowCategory)}>
                            <AiOutlineMenu />
                            Danh sách sản phẩm
                        </div>
                        <ul className={isShowCategory ? "" : "hidden"}>
                            {categories.map((category, key) => (
                                <li key={key}>
                                    <Link to={ROUTERS.pages.PRODUCTS}>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-9 heros__search_container">
                        <div className="hero_search">
                            <div className="hero__search_form">
                                <form action="">
                                    <input type="text" placeholder="Bạn đang cần gì ? " />
                                    <button className="" type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search_phone">
                                <div className="hero__search_phone_icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="hero__search_phone_text">
                                    <p>0123.456.789</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        {isHome && (
                            <div className="hero__search_slider">
                                <div className="slides">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`slide ${index === activeIndex ? 'active' : ''}`}
                                        >
                                            <img src={slide} alt={`Slide ${index}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="prev" onClick={prevSlide}>&lt;</button>
                                <button className="next" onClick={nextSlide}>&gt;</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </>
    );
};

export default memo(Header);
