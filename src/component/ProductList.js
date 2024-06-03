import React, { useState, useEffect } from 'react';
import dataAll from "../data/dataAll";
import {useNavigate} from "react-router-dom";

const  ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleView = (product) => {
       navigate(`/product/${product.id}`);
    };

    const handleAddToCart = (product) => {
        console.log("Thêm vào giỏ hàng:", product);
        // Thêm logic xử lý khi người dùng nhấn nút "Thêm vào giỏ hàng" ở đây
    };

    useEffect(() => {
        setProducts(dataAll);
    }, []);

    return (
        <>
        <div className="container">
            {products.map(product => (
                <div className="product-card">
                    <img src={product.productImageUrl} alt="Đồng hồ sang trọng" className="product-image"/>
                    <h2 className="product-name">{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                    <button onClick={() => handleView(product)} className="btn-view">Xem</button>
                    <button onClick={() => handleAddToCart(product)} className="btn-add-to-cart">Thêm
                    </button>
                </div>
            ))}
        </div>
        </>
    );
};

export default ProductList;
