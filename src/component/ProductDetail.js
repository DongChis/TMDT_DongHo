import React from 'react';
import { useParams } from 'react-router-dom';
import dataAll from "../data/dataAll";
import productAll from "../data/dataAll";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = dataAll.find(p => productAll.id === productId);
    console.log("chi tiet:  " + product.id);

    if (!product) {
        return <div>Sản phẩm không tồn tại!</div>;
    }
    return (
        <div className="product-detail-container">
            <h1>Detail</h1>
            <img src={product.productImageUrl} alt="Đồng hồ sang trọng" className="product-detail-image"/>
            <h2 className="product-detail-name">{product.title}</h2>
            <p className="product-detail-description">{product.description}</p>
            <p className="product-detail-price">{product.price}</p>
        </div>
    );
};

export default ProductDetail;
