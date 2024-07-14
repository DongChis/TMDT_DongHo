import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product/Product";
import Pagination from './pagination/pagination';
//import './ProductList.scss'; // Import SCSS file

const ProductList = () => {
    const products = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Display 9 products per page for 3x3 grid
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('asc');
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


        // Tạo bản sao của mảng đã lọc trước khi sắp xếp
        filtered = [...filtered].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\./g, ''));
            const priceB = parseFloat(b.price.replace(/\./g, ''));
            return sort === 'asc' ? priceA - priceB : priceB - priceA;
        });

        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page when filter or sort changes
    }, [filter, sort, products]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="filter">
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="male">Men's Watches</option>
                    <option value="female">Women's Watches</option>
                </select>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
            <div className="product-list">
                {currentProducts.map(product => (
                    <Product key={product.id} data={product} className="product" />
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
