// src/redux/reducers/productReducer.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: checkCart(),
};

export const root = createReducer(initialState, (builder) => {
    builder
        .addCase('productAll.load', (state, action) => {
            let products = action.payload.products;
            let out = [];
            let cart = checkCart();

            lop1: for (const p of products) {
                for (const c of cart) {
                    if (c.id === p.id) {
                        out.push({...p, isBuying: true, color: 'red'});
                        continue lop1;
                    }
                }
                out.push({...p, isBuying: false, color: 'blue'});
            }

            state.products = out;
        })
        .addCase('productHot.load', (state, action) => {
            let products = action.payload.productHot;
            let out = [];
            let cart = checkCart();

            lop1: for (const p of products) {
                for (const c of cart) {
                    if (c.id === p.id) {
                        out.push({...p, isBuying: true, color: 'red'});
                        continue lop1;
                    }
                }
                out.push({...p, isBuying: false, color: 'blue'});
            }

            state.productHot = out;
        })
        .addCase('cart.add', (state, action) => {
            if (!state.cart) state.cart = checkCart();
            const existingProduct = state.cart.find(product => product.id === action.payload.product.id);
            if (existingProduct) {
                existingProduct.quantity = action.payload.product.quantity;
            } else {
                state.cart = [...state.cart, { ...action.payload.product, quantity: 1 }];
            }
            saveCart(state.cart);
        })
        .addCase('cart.minus', (state, action) => {
            if (!state.cart) state.cart = checkCart();
            state.cart = state.cart.filter(product => product.id !== action.payload.product.id);
            saveCart(state.cart);
        })
        .addCase('CLEAR_CART', (state) => {
            state.cart = [];
            saveCart(state.cart);
        });
});

function checkCart() {
    if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    return [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
