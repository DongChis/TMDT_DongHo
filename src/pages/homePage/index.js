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
import {useNavigate} from "react-router-dom";
import { loadProducts, addCartProducts } from '../../redux/actions/productAction';
import { loadProductsSelector } from '../../redux/selector';
import {Product} from "../../component/Product/Product";

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Import and use navigate
    const products = useSelector(loadProductsSelector);

    useEffect(() => {
        console.log("Loading products...", productAll);
        dispatch(loadProducts(productAll));
    }, [dispatch]);

    const handleAddToCart = (product) => {
        console.log("Adding to cart:", product);
        if (!product || !product.id) return; // Defensive check
        dispatch(addCartProducts(product));
    };

    const handleView = (product) => {
        console.log("Viewing product:", product);
        if (!product || !product.id) return; // Defensive check
        navigate(`/product/${product.id}`);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToScroll: 2,
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true,
                }
            }
        ]
    };

    const groupProductsByTitle = (data) => {
        console.log("Grouping products by title...", data);
        return data.reduce((acc, product) => {
            if (!product || !product.title) return acc; // Defensive check
            const { title } = product;
            if (!acc[title]) {
                acc[title] = [];
            }
            acc[title].push(product);
            return acc;
        }, {});
    };

    const renderProducts = (data, sectionTitle) => {
        if (!data || !Object.keys(data).length) return null;

        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((title, index) => {
            tabList.push(<Tab key={index}>{title}</Tab>);
            const products = data[title].map((product, idx) => (
                <Product
                    key={product.id}
                    data={product}
                />
            ));
            tabPanels.push(
                <TabPanel key={index}>
                    {data[title].length > 3 ? (
                        <Slider {...sliderSettings}>
                            {products}
                        </Slider>
                    ) : (
                        <div className="row">{products}</div>
                    )}
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
    console.log("Grouped products:", groupedProducts);

    return (
        <>
            {products.length > 0 && renderProducts(groupedProducts, "THƯƠNG HIỆU ĐỒNG HỒ")}
            {products.length > 0 && renderProducts(groupedProducts, "SẢN PHẨM MỚI RA MẮT")}
        </>
    );
};

export default memo(HomePage);



