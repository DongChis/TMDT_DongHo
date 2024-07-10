// src/pages/ProductPage.js

import React, { useContext, useEffect, useState } from 'react';
import dataAll from "../data/dataAll";
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import {setupListeners} from "@reduxjs/toolkit/query";
import {setProducts} from "../redux/actions/productAction";
import {CartInfo} from "./CartInfo";
import sellProducts from "../data/ProductData";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const { handleAddToCart, alertMessage } = useContext(CartContext);
    const navigate = useNavigate();


    useEffect(() => {
        setProducts(sellProducts.all.products);

    }, []);

    const handleView = (product) => {

        navigate(`/product/${product.id}`);
    };

    return (

        <div className="container">
            <CartInfo></CartInfo>
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


export function Product(data) {
    var [product, setProduct] = useState(data);

    const dispatch = useDispatch();
    const changeColor = (e) => {
        if (product.isBuying) {
            dispatch({type: 'cart.minus', payload: {product: product}})
        } else {
            dispatch({type: 'cart.add', payload: {product: product}})
        }
        setProduct({...product, color: product.color === 'blue' ? 'red' : 'blue', isBuying: !product.isBuying})
    }
    return (<div className="col-3 col-xs-12 col-sm-6 col-lg-3  pb-3">
        <div className="card">
            <img src={product.productImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body  text-center">
                <h5 className="card-title text-center">{product.title} - {product.id}</h5>
                <p className="card-text text-center">{product.description}.</p>
                <a onClick={changeColor}
                   className={"btn  text-center p-2 pl-2 pr-2 " + (product.color === 'red' ? " btn-danger " : " btn-primary")}>{product.isBuying ? "LOẠI BỎ" : "THÊM"}</a>
                <Link to={`/product/${product.id}`} className={"btn btn-success p-2 pl-2 pr-2"}>XEM</Link>
            </div>
        </div>
    </div>);
}
export default ProductPage;