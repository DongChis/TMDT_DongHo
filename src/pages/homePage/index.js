import React, {memo, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.scss"
import productAll   from "../../data/dataAll";
import productHotData   from "../../data/productHot";

import "./tag.scss"
import "pages/Profile/style.scss"
import {loadProductHot, loadProducts} from '../../redux/actions/productAction';
import { loadProductHotSelector,loadProductsSelector } from '../../redux/selector';
import {Product} from "../../component/Product/Product";

const HomePage = () => {
    const dispatch = useDispatch();
    const hotProduct = useSelector(loadProductHotSelector);
    const products = useSelector(loadProductsSelector);

    useEffect(() => {
        dispatch(loadProductHot(productHotData));
        dispatch(loadProducts(productAll));
    }, [dispatch]);



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
            if (!product || !product.title) return acc;
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
    const groupedProductHot = groupProductsByTitle(hotProduct);

    console.log("Grouped products:", groupedProducts);

    return (
        <>
            {products.length > 0 && renderProducts(groupedProducts, "THƯƠNG HIỆU ĐỒNG HỒ")}
            {hotProduct.length > 0 && renderProducts(groupedProductHot, "SẢN PHẨM MỚI RA MẮT")}
        </>
    );
};

export default memo(HomePage);



