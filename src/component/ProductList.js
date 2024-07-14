

import  {  useState } from 'react';
import {CartInfo} from "./CartInfo";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Product} from "./Product/Product";

export default function ProductList() {
    const products = useSelector(state => state.products);
   // const cart = useSelector(state => state.cart);
    return (<div>
            <CartInfo/>
            {products.map(product => (
                <Product
                    key={product.id}
                    data={product}
                />
            ))}
        </div>
    );
}


