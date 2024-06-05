import React from 'react';
import ReactDOM from 'react-dom/client';
//import HomePage from "./pages/homePage";
import { BrowserRouter } from 'react-router-dom'
import RouterCustom from "./router";
import './style/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <BrowserRouter>
                <RouterCustom>
                </RouterCustom>
            </BrowserRouter>
);

