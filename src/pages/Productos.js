import React, { useRef } from 'react'
import Sidebar from '../components/UI/Sidebar'
import TopPart from '../components/UI/TopPart'
import Form from '../components/UI/Form'
import Item from '../components/UI/Item'
import '../components/styles/Tabla.css'
import ItemsManager from '../components/logic/ItemsManager'


const Productos = () => {
    const estructura = useRef([
        { nombre: "Id", tipo: "text" },
        { nombre: "Nombre", tipo: "text" },
        { nombre: "Descripcion", tipo: "text" },
        { nombre: "Precio", tipo: "number", prefix: "$" },
        { nombre: "Existencia", tipo: "number" },
        { nombre: "Mostrador", tipo: "number" }
    ]);
    const { items, formNuevo, eliminarItem, toggleForm, guardarNuevoItem, editarItem } = ItemsManager("producto");

    return (
        <>
            <Sidebar></Sidebar>
            <div className="workSpace">
                <TopPart usuario={"Pablo"} titulo={"Productos"} bntNuevoTxt={formNuevo ? "Cerrar" : "Nuevo producto"} route={"#"}
                    btnListener={toggleForm}></TopPart>
                {formNuevo && <Form txtBtn="Guardar Producto" estructura={estructura.current} guardarNuevoFn={guardarNuevoItem}></Form>}
                <div className="grid-container">
                    {items.map((value, index) => {
                        return (
                            <Item key={index} idx={index} item={value} estructura={estructura.current}
                                onDelete={eliminarItem} onEdit={editarItem}></Item>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Productos
