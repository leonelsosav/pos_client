import React, { useState } from 'react'
import '../components/styles/Login.css'
import Logo from '../assets/logo.png'
import DAOItem from '../components/logic/DAOItem'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const { getItem, data } = DAOItem("empleado");
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        if (data.Nombre === pass && pass !== "") {
            localStorage.setItem("empleado", data.Nombre);
            localStorage.setItem("idEmpleado", usuario);
            history.push('/empleados')
        }
        else alertify.alert('Kasterz', '¡Error en sus credenciales!', function () { alertify.success('Ok'); });
    }
    return (
        <>
            <img src={Logo} alt="logo" className="logo" />
            <form className="login-form" onSubmit={onSubmit}>
                <h2 className="txt centrado">Iniciar Sesion</h2>
                <div className="inputs">
                    <label >Usuario: </label>
                    <input type="text" value={usuario} onBlur={() => getItem(usuario)} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="inputs">
                    <label >Contraseña: </label>
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <br />
                <input type="submit" value="Iniciar Sesion" className="btn-iniciar" />
            </form>
        </>
    )
}

export default Login
