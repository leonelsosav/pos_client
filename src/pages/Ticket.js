import React, { useEffect } from 'react'
import DAOTicket from '../components/logic/DAOTicket'
import { useHistory } from "react-router-dom";
import '../components/styles/Ticket.css';

const Ticket = () => {
    const history = useHistory();
    const idVenta = history.location.state.idVenta;
    const { data, getVenta } = DAOTicket("venta");
    const cliente = DAOTicket("cliente");
    const empleado = DAOTicket("empleado");

    useEffect(() => {
        getVenta(idVenta);
        cliente.getVenta(data.IdCliente);
        empleado.getVenta(data.IdEmpleado);
    }, []);

    useEffect(() => {
        cliente.getVenta(data.IdCliente);
        empleado.getVenta(data.IdEmpleado);
    }, [data]);

    const goBack = () => {
        history.push(`/venta`);
    };

    return (
        <>
            <button className="btn-regresar" onClick={goBack}>Regresar</button>
            <div className="ticket">
                <h1 className="txt centrado bold">KASTERZ</h1>
                <h3 className="txt">Le atendio: {cliente.data.Nombre}</h3>
                <h3 className="txt">Cliente: {empleado.data.Nombre}</h3>
                <h3 className="txt">{`Fecha: ${data.Fecha.substring(0, 10)}`}</h3>
                <div className="tablaT">
                    <h2 className="txt bold">Cantidad</h2>
                    <h2 className="txt bold">Producto</h2>
                </div>
                {data.Productos.map((element, idx) => {
                    return (
                        <div key={idx} className="tablaT">
                            <h3 className="txt centrado">{element.cantidad}</h3>
                            <h3 className="txt centrado">{element.producto}</h3>
                        </div>
                    )
                })}
                <div className="tablaT">
                    <h3 className="txt bold">Subtotal</h3>
                    <h3 className="txt">${(data.Productos.reduce((prev, curr) => prev + Number(curr.total), 0) * 100 / 116).toFixed(2)}</h3>
                    <h3 className="txt bold">IVA</h3>
                    <h3 className="txt">${(data.Productos.reduce((prev, curr) => prev + Number(curr.total), 0) * 100 / 116 * 0.16).toFixed(2)}</h3>
                    <h3 className="txt bold">Total</h3>
                    <h3 className="txt">${data.Productos.reduce((prev, curr) => prev + Number(curr.total), 0)}</h3>
                </div>
            </div>
        </>
    )
}

export default Ticket
