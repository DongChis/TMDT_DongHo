import React, {memo, useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.scss"

import "./tag.scss"
import "pages/Profile/style.scss"
import sellProducts from "../../data/ProductData";


import mat1Img from "assets/image/slider1.jpg";
import mat2Img from "assets/image/slider2.avif";
import mat3Img from "assets/image/slider3.avif";
import mat4Img from "assets/image/slider4.avif";
import mat5Img from "assets/image/slider5.avif";



const HomePage = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
    };
    const sliderItem = [
        {bgImg: mat1Img,
            name: "Đồng hồ 1",
        },
        {bgImg: mat2Img,
            name: "Đồng hồ 2",
        },
        {bgImg: mat3Img,
            name: "Đồng hồ 3",
        },
        {bgImg: mat4Img,
            name: "Đồng hồ 4",
        },
        {bgImg: mat5Img,
            name: "Đồng hồ 5",
        },

    ];

    const renderSellProducts = (data) => {
        const tabList = [];
        const  tabPanels =[];
        Object.keys(data).forEach((key,index) => {
            tabList.push(<Tab key={index}> {data[key].title}</Tab>);
            const  tabPanel = [];
            data[key].products.forEach((item,j)=>{
                    tabPanel.push(
                        <>
                            <div className="product-card">
                                <img src={item.productImageUrl} alt="Đồng hồ sang trọng" className="product-image"/>
                                <h2 className="product-name">{item.title}</h2>
                                <p className="product-description">{item.description}</p>
                                <p className="product-price">{item.price}</p>
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
    },[activeIndex]);

    return (
        <>
            <div className="container">
                <div className="slider">
                    <div className="slides">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${index === activeIndex ? 'active' : ''}`}
                            >
                                <img src={slide} alt={`Slide ${index}`}/>
                            </div>
                        ))}
                    </div>
                    <button className="prev" onClick={prevSlide}>&lt;</button>
                    <button className="next" onClick={nextSlide}>&gt;</button>
                </div>
            </div>

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