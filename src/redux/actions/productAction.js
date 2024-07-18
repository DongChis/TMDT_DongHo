
export const loadProducts = (data) => {
    return {
        type: 'productAll.load',
        payload: {
            products: data
        }
    }
}
export const loadProductHot = (data) => {
    return {
        type: 'productHot.load',
        payload: {
            productHot: data
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
export const searchProducts = (searchTerm) => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: searchTerm.toString()
    };
};
