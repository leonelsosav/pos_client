import React, { useState } from 'react'
import '../styles/Form.css'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

//TODO: cambiar a logic
const Form = ({ estructura, txtBtn, guardarNuevoFn }) => {
    const [inputs, setInputs] = useState(Array(estructura.length).fill(""));

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        if (inputs.includes("")) alertify.alert('Kasterz', 'No puede dejar ningun campo vacio!', () => { alertify.success('Ok'); });
        else {
            let result = {};
            estructura.forEach((estr, index) => {
                result = { ...result, [estr.nombre]: inputs[index] }
            });
            guardarNuevoFn(result);
        }

    }
    return (
        <form className="form" onSubmit={onSubmit}>
            {estructura.map((est, index) => {
                return (
                    <div key={index} className="form-control">
                        <label>{est.nombre}</label>
                        <input type={est.tipo} placeholder={est.nombre} value={inputs[index]}
                            onChange={(e) => setInputs(inputs.map((value, idx) => idx === index ? e.target.value : value))} />
                    </div>
                );
            })}
            <input type="submit" value={txtBtn} className="btnGuardar" />
        </form>
    )
}

export default Form
