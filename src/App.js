import './App.css';

import { BrowserRouter} from 'react-router-dom';
import RouterCustom from "./router";
import {CartProvider} from "./component/CartContext";


function App() {

    return (
        <div className= "App">
             <BrowserRouter>
                <CartProvider>
                    <RouterCustom>

                     </RouterCustom>
                </CartProvider>
             </BrowserRouter>,
        </div>
    )

}

export default App;