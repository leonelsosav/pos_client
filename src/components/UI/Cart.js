import React, { useState } from 'react'
import '../styles/Cart.css'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import CartProduct from './CartProduct'

const Cart = ({ products, checkoutFn }) => {
    const [total, setTotal] = useState(0);
    return (
        <div className="container">
            <h2 className="txt-center">{`TOTAL: $${total}`}</h2>
            <h3 className="lbl">Id del cliente:</h3>
            <input type="number" name="idCliente" id="idCliente" />
            <div className="tabla">
                <h3 className="txt-center">Cantidad</h3>
                <h3 className="txt-center">Producto</h3>
                <h3 className="txt-center">Precio</h3>
                <h3 className="txt-center">Total</h3>
                {products.map((product, index) => {
                    return (
                        <CartProduct key={index} product={product}></CartProduct>
                    )
                })}
            </div>
            <button className="btn-guardar" onClick={() => checkoutFn(products.length)}>Finalizar venta</button>
        </div>
    )
}

export default Cart