// src/pages/ProductPage.js

import React, { useContext, useEffect, useState } from 'react';
import dataAll from "../data/dataAll";
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import {setupListeners} from "@reduxjs/toolkit/query";
import sellProducts from "../data/ProductData";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const { handleAddToCart, alertMessage } = useContext(CartContext);
    const navigate = useNavigate();


    useEffect(() => {
        setProducts(sellProducts.all.products);
        // const fetchPosts = async()=> {
        //    const respose = await fetch('https://fakestoreapi.com/products')
        //     const posts = await  respose.json() ;
        //    setProducts(posts);
        // }
       // fetchPosts();
    }, []);

    const handleView = (product) => {

        navigate(`/product/${product.id}`);
    };

    return (
        <div className="container">
            {alertMessage && <div className="alert">{alertMessage}</div>}
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.productImageUrl} alt="Đồng hồ sang trọng" className="product-image" />
                    <h2 className="product-name">{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price.toLocaleString()} VND</p>
                    <button onClick={() => handleView(product)} className="btn-view">Xem</button>
                    <button onClick={() => handleAddToCart(product)} className="btn-add-to-cart">Thêm</button>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;