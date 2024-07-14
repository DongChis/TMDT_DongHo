import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {addCartProducts} from "../../redux/actions/productAction";

import "./style.scss"


export function Product({ data }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        console.log("Adding to cart:", product);
        if (!product || !product.id) return;
        dispatch(addCartProducts(product));
    };

    const handleView = (product) => {
        console.log("Viewing product:", product);
        if (!product || !product.id) return;
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card" key={data.id}>
            <img src={data.productImageUrl} alt={data.name} className="product-image"/>
            <h2 className="product-name">{data.name}</h2>
            <p className="product-description">{data.description}</p>
            <p className="product-price">{data.price.toLocaleString()} VND</p>
            <div className="btn-group">
                <button onClick={() => handleView(data)} className="btn-view">Xem</button>
                <button onClick={() => handleAddToCart(data)} className="btn-add-to-cart">Thêm</button>
            </div>
        </div>
    );
}