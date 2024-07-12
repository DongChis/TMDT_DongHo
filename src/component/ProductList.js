
import  {  useState } from 'react';
import {CartInfo} from "./CartInfo";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


export default function ProductList() {
    const products = useSelector(state => state.products);
   // const cart = useSelector(state => state.cart);
    return (<div>
            <CartInfo></CartInfo>
                {products.map(product => (
                    <Product key={product.id}
                             id={product.id}
                             title={product.title}
                             description={product.description}
                             url={product.url}
                             votes={product.votes}
                             submitterAvatarUrl={product.submitterAvatarUrl}
                             productImageUrl={product.productImageUrl}
                             color={product.color}
                             isBuying={product.isBuying}
                    />
                ))}
            </div>
    );
}

export function Product(data) {
    var [product, setProduct] = useState(data);

    const dispatch = useDispatch();
    const changeColor = (e) => {
        if (product.isBuying) {
            dispatch({type: 'cart.minus', payload: {product: product}})
        } else {
            dispatch({type: 'cart.add', payload: {product: product}})
        }
        setProduct({...product, color: product.color === 'blue' ? 'red' : 'blue', isBuying: !product.isBuying})
    }
    return (
        <div className="">
            <img src={product.productImageUrl} alt="..."/>
            <div className="">
                <h5 className="">{product.title} - {product.id}</h5>
                <p className="">{product.description}.</p>
                <a onClick={changeColor}
                   className={"" + (product.color === 'red' ? " btn-danger " : " btn-primary")}>{product.isBuying ? "LOẠI BỎ" : "THÊM"}</a>
                <Link to={`/product/${product.id}`} className={""}>XEM</Link>
            </div>
        </div>
    );
}