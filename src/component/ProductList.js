
import  {  useState } from 'react';
import {useDispatch, useSelector} from "react-redux";


import {Product} from "./Product/Product";
import Pagination from './pagination/pagination';
const ProductList = () => {
    const products = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Display 9 products per page for 3x3 grid

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="product-list">
                {currentProducts.map(product => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(products.length / productsPerPage)}
                onPageChange={paginate}
            />
        </div>
    );
};

export default ProductList;
