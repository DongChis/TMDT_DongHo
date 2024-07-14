
import  {  useState } from 'react';
import {useDispatch, useSelector} from "react-redux";


import {Product} from "./Product/Product";

export default function ProductList() {
    const products = useSelector(state => state.products);
   // const cart = useSelector(state => state.cart);
    return (<div>

            {products.map(product => (
                <Product
                    key={product.id}
                    data={product}
                />  
            ))}
        </div>

    );
}


