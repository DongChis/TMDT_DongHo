
export const loadProducts = (data) => {
    return {
        type: 'product.load',
        payload: {
            products: data
        }
    }
}
export const addCartProducts = (data) => {
    return {
        type: 'cart.add',
        payload: {
            product: data
        }
    }
}

export const removeFromCart = (product) => {
    return {
        type: 'cart.minus',
        payload: {
            product: product
        }
    }
}
export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    };
};
