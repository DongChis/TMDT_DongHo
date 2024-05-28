import {useState} from "react";
import {useDispatch} from "react-redux";
export function Product(data) {
    var [product, setProduct] = useState(data);

    const dispatch = useDispatch();
    const changeColor = (e) => {
        setProduct({...product, color: product.color === 'blue' ? 'red' : 'blue', isBuying: true})
        dispatch({type: 'cart.add', payload: {products: product}})
    }
    return (<div className="col-4 col-xs-12 col-sm-6 col-lg-4  pb-3">
        <div className="card">
            <img src={product.productImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body  text-center">
                <h5 className="card-title text-center">{product.title} - {product.id}</h5>
                <p className="card-text text-center">{product.description}.</p>
                <a href={`product/${product.id}`} onClick={changeColor}
                   className={"btn  text-center " + (product.color === 'red' ? " btn-danger " : " btn-primary")}>{product.isBuying ? "Đã Mua" : "Chưa mua"}</a>
            </div>
        </div>
    </div>);
}