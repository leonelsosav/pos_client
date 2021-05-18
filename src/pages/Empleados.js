import React, { useRef, useEffect } from 'react'
import Sidebar from '../components/UI/Sidebar'
import TopPart from '../components/UI/TopPart'
import Form from '../components/UI/Form'
import Item from '../components/UI/Item'
import '../components/styles/Tabla.css'
import DAO from '../components/logic/DAO'


const Empleados = () => {
    const estructura = useRef([
        { nombre: "Nombre", tipo: "text" },
        { nombre: "Celular", tipo: "number" },
        { nombre: "Direccion", tipo: "text" },
        { nombre: "Email", tipo: "text" },
        { nombre: "FechaIngreso", tipo: "date" },
        { nombre: "FechaNacimiento", tipo: "date" }
    ]);
    const { items, formNuevo, eliminarItem, toggleForm, guardarNuevoItem, editarItem, fetchData } = DAO("empleado");

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Sidebar></Sidebar>
            <div className="workSpace">
                <TopPart titulo={"Empleados"} bntNuevoTxt={formNuevo ? "Cerrar" : "Nuevo empleado"} route={"#"}
                    btnListener={toggleForm}></TopPart>
                {formNuevo && <Form txtBtn="Guardar Empleado" estructura={estructura.current} guardarNuevoFn={guardarNuevoItem}></Form>}
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

export default Empleados