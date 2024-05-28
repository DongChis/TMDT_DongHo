import React, { memo, useState, useEffect } from 'react';
import "./style.scss";


const Profile = () => {
    // const [activeIndex, setActiveIndex] = useState(0);
    //
    // const slides = [
    //     "https://seikowatches.co.in/cdn/shop/files/5-Sports_banner-Desktop_SRPK87K1_SRPK89K1_SRPK91K1_2049-x-1024_1024x1024.jpg?v=1712829089",
    //     "https://www.gbwatchshop.com/media/catalog/category/Accurist_Goldbar_Banner_1224x550px_1.jpg",
    //     "https://seikowatches.co.in/cdn/shop/files/Astron-Special-page--desktop-banner_11d56956-cd8a-4cf3-9bad-eed112a59251_1024x1024.jpg?v=1709288048"
    // ];
    //
    // const prevSlide = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    // };
    //
    // const nextSlide = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    // };
    //
    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 6000); // Automatically switch slides every 5 seconds
    //     return () => clearInterval(interval); // Clear interval on component unmount
    // },[activeIndex]);
    //
    // return (
    //     <div className="container">
    //         <div className="slider">
    //             <div className="slides">
    //                 {slides.map((slide, index) => (
    //                     <div
    //                         key={index}
    //                         className={`slide ${index === activeIndex ? 'active' : ''}`}
    //                     >
    //                         <img src={slide} alt={`Slide ${index}`} />
    //                     </div>
    //                 ))}
    //             </div>
    //             <button className="prev" onClick={prevSlide}>&lt;</button>
    //             <button className="next" onClick={nextSlide}>&gt;</button>
    //         </div>
    //     </div>
    // );
    <h1>a</h1>
};

export default memo(Profile);
