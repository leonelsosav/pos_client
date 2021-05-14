import React, { useRef } from 'react'
import Sidebar from '../components/UI/Sidebar'
import TopPart from '../components/UI/TopPart'
import Form from '../components/UI/Form'
import Item from '../components/UI/Item'
import '../components/styles/Tabla.css'
import ItemsManager from '../components/logic/ItemsManager'

const Clientes = () => {
    const estructura = useRef([
        { nombre: "Nombre", tipo: "text" },
        { nombre: "Celular", tipo: "number" },
        { nombre: "Email", tipo: "text" },
        { nombre: "FechaNacimiento", tipo: "date" },
        { nombre: "Monedero", tipo: "number" },
    ]);
    const { items, formNuevo, eliminarItem, toggleForm, guardarNuevoItem, editarItem } = ItemsManager("cliente");

    return (
        <>
            <Sidebar></Sidebar>
            <div className="workSpace">
                <TopPart usuario={"Pablo"} titulo={"Clientes"} bntNuevoTxt={formNuevo ? "Cerrar" : "Nuevo cliente"} route={"#"}
                    btnListener={toggleForm}></TopPart>
                {formNuevo && <Form txtBtn="Guardar Cliente" estructura={estructura.current} guardarNuevoFn={guardarNuevoItem}></Form>}
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

export default Clientes
