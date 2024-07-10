import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
//import HomePage from "./pages/homePage";
//import { BrowserRouter } from 'react-router-dom'
//import RouterCustom from "./router";
import './style/style.scss';

import App from "./App"
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <React.StrictMode>
       <Provider store={store}>
           <App/>
       </Provider>
    </React.StrictMode>

);

