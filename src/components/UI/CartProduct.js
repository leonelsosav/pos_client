import React from 'react'

const CartProduct = ({ product, addFn, subtractFn, deleteFn }) => {
    return (
        <>
            <h4 className="txt-center">{product.cantidad}</h4>
            <h4 className="txt-center">{product.producto}</h4>
            <h4 className="txt-center">{`$${product.precio}`}</h4>
            <h4 className="txt-center">{`$${product.total}`}</h4>
            <div>
                <button className="btn-cart" onClick={() => addFn(product.idProducto)}>+</button>
                <button className="btn-cart" onClick={() => subtractFn(product.idProducto)}>-</button>
                <button className="btn-cart eliminar" onClick={() => deleteFn(product.idProducto)}>x</button>
            </div>
        </>
    )
}

export default CartProduct
