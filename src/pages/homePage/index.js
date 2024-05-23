import { memo } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"


import mat1Img from  "image/slider1.jpg";
import mat2Img from  "image/slider2.avif";
import mat3Img from  "image/slider3.avif";
import mat4Img from  "image/slider4.avif";
import mat5Img from  "image/slider5.avif";


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

    return (
        <>


            <div className="container-slider">
                    <div className="section-title">
                        <h2>Sản Phẩm Bán Chạy</h2>
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
        </>
    );
};
export default memo(HomePage);