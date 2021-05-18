import React, { useRef, useEffect } from 'react'
import Sidebar from '../components/UI/Sidebar'
import TopPart from '../components/UI/TopPart'
import ProductCard from '../components/UI/ProductCard'
import Cart from '../components/UI/Cart'
import '../components/styles/Tabla.css'
import DAO from '../components/logic/DAO'
import VentaLogic from '../components/logic/VentaLogic'

const Venta = () => {
    const estructura = useRef([
        { nombre: "Id", tipo: "text" },
        { nombre: "Nombre", tipo: "text" },
        { nombre: "Descripcion", tipo: "text" },
        { nombre: "Precio", tipo: "number", prefix: "$" }
    ]);
    const { items, formNuevo, toggleForm, fetchData } = DAO("producto");
    useEffect(() => {
        fetchData();
    }, [])
    const { cartProducts, addProductToCart, checkoutFn, total, addFn, subtractFn, deleteFn, cliente, editIdCliente } = VentaLogic(items);

    return (
        <>
            <Sidebar></Sidebar>
            <div className="workSpace">
                <TopPart titulo={"Venta"} bntNuevoTxt={formNuevo ? "Cerrar carrito" : "Mostrar carrito"} route={"#"}
                    btnListener={toggleForm}></TopPart>
                {formNuevo && <Cart products={cartProducts} checkoutFn={checkoutFn} total={total} addFn={addFn} subtractFn={subtractFn}
                    deleteFn={deleteFn} cliente={cliente} editIdCliente={editIdCliente}></Cart>}
                <div className="grid-container">
                    {items.map((value, index) => {
                        return (
                            <ProductCard key={index} idx={index} item={value} estructura={estructura.current}
                                onAddProducto={addProductToCart} ></ProductCard>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Venta
