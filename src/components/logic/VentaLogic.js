import { useState, useEffect } from 'react'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import DAO from './DAO'
import DAOTicket from './DAOTicket'
import { useHistory } from "react-router-dom";


const VentaLogic = (items) => {
    const [cartProducts, setCartProducts] = useState([]);
    const history = useHistory();
    const [cliente, setCliente] = useState("");
    const [idClienteSeleccionado, setIdClienteSeleccionado] = useState("");
    const [total, setTotal] = useState(0);
    const { guardarNuevoItem } = DAOTicket("venta")
    const clientes = DAO("cliente");

    useEffect(() => {
        clientes.fetchData();
        cartProducts.length > 0 ? setTotal(cartProducts.reduce((prev, current) => parseInt(prev) + parseInt(current.total), 0)) : setTotal(0);
    }, [cartProducts]);

    const editIdCliente = (idCliente) => {
        setIdClienteSeleccionado(idCliente);
        const res = clientes.items.find(item => item.Id === idCliente);
        if (res !== undefined) setCliente(res.Nombre);
        else {
            alertify.alert('Kasterz', '¡No se encontro ningun cliente con el id ingresado!', function () { alertify.success('Ok'); });
            setCliente("");
        }
    }

    const addProductToCart = (idx) => {
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

    const checkoutFn = async () => {/*TODO: Actualizar id empleado y propina*/
        if (cliente === "") return alertify.alert('Kasterz', '¡Debe ingresar un id de cliente valido!', function () { alertify.success('Ok'); })
        if (cartProducts.length > 0) {
            let venta = await guardarNuevoItem({
                IdCliente: idClienteSeleccionado, IdEmpleado: "1",
                Productos: cartProducts, Fecha: new Date(), Propina: 100
            });

            history.push({
                pathname: `/ticket`,
                state: { idVenta: venta.idVenta }
            });
        }
        else alertify.alert('Kasterz', '¡Debe existir al menos un elemento en el carrito!', function () { alertify.success('Ok'); });
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
        addProductToCart, checkoutFn,
        addFn, subtractFn, deleteFn,
        cliente, editIdCliente
    }
}

export default VentaLogic
