import React, { useRef } from 'react'
import Sidebar from '../components/UI/Sidebar'
import TopPart from '../components/UI/TopPart'
import ProductCard from '../components/UI/ProductCard'
import Cart from '../components/UI/Cart'
import '../components/styles/Tabla.css'
import ItemsManager from '../components/logic/ItemsManager'
import VentaLogic from '../components/logic/VentaLogic'

const Venta = () => {
    const estructura = useRef([
        { nombre: "Id", tipo: "text" },
        { nombre: "Nombre", tipo: "text" },
        { nombre: "Descripcion", tipo: "text" },
        { nombre: "Precio", tipo: "number", prefix: "$" }
    ]);
    const { items, formNuevo, toggleForm } = ItemsManager("producto");

    const { cartProducts, setCartProducts, addProduct, checkoutFn } = VentaLogic(items);

    return (
        <>
            <Sidebar></Sidebar>
            <div className="workSpace">
                <TopPart usuario={"Pablo"} titulo={"Venta"} bntNuevoTxt={formNuevo ? "Cerrar carrito" : "Mostrar carrito"} route={"#"}
                    btnListener={toggleForm}></TopPart>
                {formNuevo && <Cart products={cartProducts} checkoutFn={checkoutFn}></Cart>}
                <div className="grid-container">
                    {items.map((value, index) => {
                        return (
                            <ProductCard key={index} idx={index} item={value} estructura={estructura.current}
                                onAddProducto={addProduct} ></ProductCard>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Venta
