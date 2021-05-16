import { useState, useEffect } from 'react'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const VentaLogic = (items) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        cartProducts.length > 0 ? setTotal(cartProducts.reduce((prev, current) => parseInt(prev) + parseInt(current.total), 0)) : setTotal(0);
    }, [cartProducts])

    const addProduct = (idx) => {
        if (cartProducts.find(product => product.idProducto === items[idx].Id) === undefined) {
            setCartProducts([...cartProducts, {
                cantidad: 1,
                idProducto: items[idx].Id,
                producto: items[idx].Nombre,
                precio: items[idx].Precio,
                total: items[idx].Precio
            }]);
        }
        else alertify.alert('Kasterz', '¡Este producto ya se encuentra en el carrito!', function () { alertify.success('Ok'); });
    }

    const checkoutFn = (numProducts) => {
        console.log(numProducts);
    }

    const addFn = (idProducto) => {
        setCartProducts(cartProducts.map(product => product.idProducto === idProducto ?
            { ...product, cantidad: ++product.cantidad, total: product.cantidad * Number(product.precio) } : product));
    }

    const subtractFn = (idProducto) => {
        cartProducts.find(product => product.idProducto === idProducto).cantidad > 1 &&
            setCartProducts(cartProducts.map(product => product.idProducto === idProducto ?
                { ...product, cantidad: --product.cantidad, total: product.cantidad * Number(product.precio) } : product));
    }

    const deleteFn = (idProducto) => {
        setCartProducts(cartProducts.filter(product => product.idProducto !== idProducto));
    }

    return {
        cartProducts, total,
        addProduct, checkoutFn,
        addFn, subtractFn, deleteFn
    }
}

export default VentaLogic
