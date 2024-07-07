import React, {memo, useContext, useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.scss"
import ProductList  from "../../component/ProductList";
import "./tag.scss"
import "pages/Profile/style.scss"
import sellProducts from "../../data/ProductData";
import { useNavigate } from 'react-router-dom';


import mat1Img from "assets/image/slider1.jpg";
import mat2Img from "assets/image/slider2.avif";
import mat3Img from "assets/image/slider3.avif";
import mat4Img from "assets/image/slider4.avif";
import mat5Img from "assets/image/slider5.avif";
import {CartContext} from "../../component/CartContext";


const HomePage = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
    };
    const sliderItem = [
        {
            bgImg: mat1Img,
            name: "Đồng hồ 1",
        },
        {
            bgImg: mat2Img,
            name: "Đồng hồ 2",
        },
        {
            bgImg: mat3Img,
            name: "Đồng hồ 3",
        },
        {
            bgImg: mat4Img,
            name: "Đồng hồ 4",
        },
        {
            bgImg: mat5Img,
            name: "Đồng hồ 5",
        },

    ];
    const navigate = useNavigate();
    const { handleAddToCart, alertMessage } = useContext(CartContext);
    const handleView = (product) => {

        navigate(`/product/${product.id}`);
    };
    const renderSellProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}> {data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <>

                        <div className="product-card">
                            <img src={item.productImageUrl} alt="Đồng hồ sang trọng" className="product-image"/>
                            <h2 className="product-name">{item.title}</h2>
                            <p className="product-description">{item.description} </p>
                            <p className="product-price">{item.price.toLocaleString()} VND</p>
                            <button onClick={() => handleView(item)} className="btn-view">Xem</button>

                            <button onClick={() => handleAddToCart(item)} className="btn-add-to-cart">Thêm</button>
                        </div>

                    </>
                );
            });
            tabPanels.push(tabPanel);
        });

        return (
            <Tabs>
                <TabList>
                {tabList}
                </TabList>
                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
            </Tabs>

        );
    };


    return (
        <>

            <div className="container-slider container">
                <div className="section-title">
                    <h2>Sản Phẩm NEW</h2>
                </div>
                <Slider {...settings} className="slider-content">
                    {
                        sliderItem.map((item, key) => (
                            <div className="slider-content-items">
                                <img src={item.bgImg} alt=""/>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }

                </Slider>
            </div>

            <div className="container">
                <div className="section-title-sell section-title">
                    <h2>Sản Phẩm Nổi Bật</h2>
                    {renderSellProducts(sellProducts)}
                </div>
            </div>
        </>
    );
};
export default memo(HomePage);