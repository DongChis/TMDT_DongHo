import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product/Product";
import Pagination from './pagination/pagination';
import './Product/style.scss'; // Import SCSS file

const ProductList = () => {
    const products = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Display 9 products per page for 3x3 grid
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('asc');
    const [priceRange, setPriceRange] = useState([0, Infinity]);
    const [brand, setBrand] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let filtered = products;

        // Lọc sản phẩm theo giới tính
        if (filter !== 'all') {
            filtered = products.filter(product => product.gender === filter);
        }
        if (filter === 'male') {
            filtered = products.filter(product => product.gender === "Nam");
        }
        if (filter === 'female') {
            filtered = products.filter(product => product.gender === "Nữ");
        }

        // Lọc theo khoang giá
        filtered = filtered.filter(product => {
            const price = parseFloat(product.price.replace(/\./g, ''));
            return price >= priceRange[0] && price <= priceRange[1];
        });

        // lọc theo thương hiệu
        if (brand !== 'all') {
            filtered = filtered.filter(product => product.brand === brand);
        }


        // Tạo bản sao của mảng đã lọc trước khi sắp xếp
        filtered = [...filtered].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\./g, ''));
            const priceB = parseFloat(b.price.replace(/\./g, ''));
            return sort === 'asc' ? priceA - priceB : priceB - priceA;
        });

        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page when filter or sort changes
    }, [filter, sort, priceRange, brand, products]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="filter">
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="male">Đồng hồ nam</option>
                    <option value="female">Đồng hồ nữ</option>
                </select>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="asc">Giá: Thấp đến cao</option>
                    <option value="desc">Giá: Cao đến thấp</option>
                </select>
                <select value={brand} onChange={e => setBrand(e.target.value)}>
                    <option value="all">Thương hiệu</option>
                    <option value="brand1">Brand 1</option>
                    <option value="brand2">Brand 2</option>
                    <option value="brand3">Brand 3</option>
                </select>
                <select value={priceRange} onChange={e => {
                    const [min, max] = e.target.value.split('-').map(Number);
                    setPriceRange([min, max]);
                }}>
                    <option value="0-Infinity">Khoảng giá</option>
                    <option value="0-1000000">Dưới 1,000,000</option>
                    <option value="1000000-5000000">1,000,000 - 5,000,000</option>
                    <option value="5000000-10000000">5,000,000 - 10,000,000</option>
                    <option value="10000000-Infinity">Trên 10,000,000</option>
                </select>
            </div>
            <div className="product-list">
                {currentProducts.map(product => (
                    <Product key={product.id} data={product} className="product"/>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
                onPageChange={paginate}
                className="pagination"
            />
        </div>
    );
};

export default ProductList;
