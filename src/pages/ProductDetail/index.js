import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productAll from "../../data/dataAll";
import BreadCrumb from "../../pages/theme/breadCrum";
import "./style.scss"

async function getProduct(id) {
    return productAll.find((product) => product.id == id);
}

export async function loadProduct({ params }) {
    const product = await getProduct(params.id);
    console.log("Sản phẩm : " + product);
    return product;
}

const ProductDetail = () => {
    const { id } = useParams(); // Assuming your route parameter is named 'id'
    const [product, setProduct] = useState( null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            window.scrollTo(0,0);
        async function fetchProduct() {
            try {
                const productData = await getProduct(id);
                setProduct(productData);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching product:", error);
                setError(error.message);
                setLoading(false);
            }
        }

        fetchProduct();

        // Clean-up function
        return () => {
            // Any necessary clean-up code here
        };

    }
    , [id]); // Only re-run the effect if id changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Sản phẩm không tồn tại!</div>;
    }


    return (
            <><BreadCrumb name="Chi tiết sản phẩm"></BreadCrumb>
                <div className="container-detail">
                    <div className="product-detail-container">
                        <div className="product-detail-image">
                            <img height="400px" width="400px" src={product.productImageUrl} alt="Product Image"/>
                        </div>
                        <div className="product-detail-info">
                            <div>
                                <h1 className="product-detail-name">{product.title}</h1>
                                <p className="product-detail-description">{product.description}</p>
                                <p className="product-detail-price">{product.price.toLocaleString()} VND</p>
                            </div>
                            <div className="button-group">
                                <button className="add-cart">Thêm vào giỏ hàng</button>

                            </div>
                        </div>
                    </div>
                    <div className="product-detail-specifications">
                        <h2 className="specifications-header">Thông tin sản phẩm</h2>
                        <ul className="specifications-list">
                            <li><strong>Thương hiệu:</strong> Casio</li>
                            <li><strong>Số hiệu sản phẩm:</strong> <a href="#">F-91W-1HDG</a></li>
                            <li><strong>Bộ sưu tập:</strong> <a href="#">Casio F-91W</a></li>
                            <li><strong>Xuất xứ:</strong> Nhật Bản</li>
                            <li><strong>Giới tính:</strong> Nam</li>
                            <li><strong>Kính:</strong> Resin Glass (Kính nhựa)</li>
                            <li><strong>Máy:</strong> <a href="#">Quartz</a> (Pin)</li>
                            <li><strong>Bảo hành quốc tế:</strong> 1 năm</li>
                        </ul>
                    </div>
                </div>

        </>
    );
};

export default ProductDetail;