import React from 'react'

const CartProduct = ({ product }) => {
    return (
        <>
            <h4 className="txt-center">{product.cantidad}</h4>
            <h4 className="txt-center">{product.producto}</h4>
            <h4 className="txt-center">{`$${product.precio}`}</h4>
            <h4 className="txt-center">{`$${product.total}`}</h4>
        </>
    )
}

export default CartProduct
