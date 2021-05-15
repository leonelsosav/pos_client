import React, { useState } from 'react'

const VentaLogic = (items) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProduct = (idx) => {
        setCartProducts([...cartProducts, { cantidad: 1, idProducto: idx, producto: items[idx].Nombre, precio: items[idx].Precio, total: items[idx].Precio }]);
    }

    const checkoutFn = (numProducts) => {
        console.log(numProducts);
    }

    return {
        cartProducts, setCartProducts,
        addProduct, checkoutFn
    }
}

export default VentaLogic
