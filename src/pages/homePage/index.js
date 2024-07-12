import React, {memo, useContext, useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.scss"
import productAll   from "../../data/dataAll";
import "./tag.scss"
import "pages/Profile/style.scss"

import { useNavigate } from 'react-router-dom';






const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch({ type: 'product.load', payload: { products: productAll } });
    }, [dispatch]);

    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch({ type: 'cart.add', payload: { product } });
    };

    const handleView = (product) => {
        navigate(`/product/${product.id}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
    };


    const groupProductsByTitle = (data) => {
        const grouped = data.reduce((acc, product) => {
            const { title } = product;
            if (!acc[title]) {
                acc[title] = [];
            }
            acc[title].push(product);
            return acc;
        }, {});
        return grouped;
    };

    const renderProducts = (data, sectionTitle) => {
        if (!data || !Object.keys(data).length) return null;

        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((title, index) => {
            tabList.push(<Tab key={index}>{title}</Tab>);
            const products = data[title].map((item, idx) => (
                <div className="product-card" key={idx}>
                    <img src={item.productImageUrl} alt="Đồng hồ sang trọng" className="product-image" />
                    <h2 className="product-name">{item.name}</h2> {/* Hiển thị thuộc tính name */}
                    <p className="product-description">{item.description}</p>
                    <p className="product-price">{item.price.toLocaleString()} VND</p>
                    <button onClick={() => handleView(item)} className="btn-view">Xem</button>
                    <button onClick={() => handleAddToCart(item)} className="btn-add-to-cart">Thêm</button>
                </div>
            ));
            tabPanels.push(
                <TabPanel key={index}>
                    <div className="row">{products}</div>
                </TabPanel>
            );
        });

        return (
            <div className="container">
                <div className="section-title">
                    <h2>{sectionTitle}</h2>
                    <Tabs>
                        <TabList>
                            {tabList}
                        </TabList>
                        {tabPanels}
                    </Tabs>
                </div>
            </div>
        );
    };

    const groupedProducts = groupProductsByTitle(products);

    return (
        <>
            {products.length > 0 && renderProducts(groupedProducts, "Sản Phẩm Nổi Bật")}
            {products.length > 0 && renderProducts(groupedProducts, "Sản Phẩm Khuyến Mãi")}
        </>
    );
};

export default memo(HomePage);