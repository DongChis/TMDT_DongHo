import './App.css';

import { BrowserRouter} from 'react-router-dom';
import RouterCustom from "./router";
import products from "./data/dataAll";
import {CartProvider} from "./component/CartContext";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadProducts} from "./redux/actions/productAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

    const disPatch = useDispatch();
    useEffect(() => {
        disPatch(loadProducts(products));
    });
    return (
        <div className= "App">
             <BrowserRouter>
                <CartProvider>
                    <RouterCustom>

                     </RouterCustom>
                </CartProvider>
             </BrowserRouter>,
            <ToastContainer />
        </div>
    )

}

export default App;