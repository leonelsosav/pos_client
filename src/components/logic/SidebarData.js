import React from 'react'
import { FaUserTie, FaUsers, FaShoppingCart, FaSignOutAlt, FaMoneyBillWave, FaStore } from "react-icons/fa";

export const SidebarData = [
    {
        titulo: "Empleados",
        ruta: "/empleados",
        icono: <FaUserTie />,
        clase: "sidebar-text"
    },
    {
        titulo: "Clientes",
        ruta: "/clientes",
        icono: <FaUsers />,
        clase: "sidebar-text"
    },
    {
        titulo: "Productos",
        ruta: "/productos",
        icono: <FaShoppingCart />,
        clase: "sidebar-text"
    },
    {
        titulo: "Venta",
        ruta: "/venta",
        icono: <FaStore />,
        clase: "sidebar-text"
    },
    {
        titulo: "Cerrar Sesion",
        ruta: "/",
        icono: <FaSignOutAlt />,
        clase: "sidebar-text",
        click: () => {
            localStorage.setItem('empleado', "")
            localStorage.setItem("idEmpleado", "")
        }
    }
]
