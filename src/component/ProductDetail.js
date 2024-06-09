import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productAll from "../data/dataAll";
import BreadCrumb from "../pages/theme/breadCrum";

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
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
    }, [id]); // Only re-run the effect if id changes

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
        <>
        <BreadCrumb name="Chi tiết sản phẩm"></BreadCrumb>
        <div className="container">
            <div className="product-detail-container">
                <div className="product-detail-image">
                    <img src={product.productImageUrl} alt="Product Image"/>
                </div>
                <div className="product-detail-info">
                    <h1 className="product-detail-name">{product.title}</h1>
                    <p className="product-detail-description">{product.description}</p>
                    <p className="product-detail-price">{product.price}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;
