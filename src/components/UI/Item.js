import React, { useState } from 'react'
import '../styles/Tabla.css'

const Item = ({ item, idx, onDelete, onEdit, estructura }) => {
    const [inputs, setInputs] = useState(estructura.map(value => item[value.nombre]));
    const [editMode, setEditMode] = useState(false);

    const deleteFn = () => onDelete(idx);

    const editFn = () => {
        let result = {};
        estructura.forEach((estr, index) => {
            result = { ...result, [estr.nombre]: inputs[index] }
        });
        onEdit(result, idx);
        setEditMode(false);
    };
    return (
        <div className="item-container">
            {!editMode ? <>
                <h2 className="titulo">{item.Nombre}</h2>
                {Object.entries(item).sort().map((entry, index) => {
                    if (entry[0] !== "Nombre") return (
                        <h3 key={index} className="subtitulo">{`${entry[0]}: ${entry[1]}`}</h3>
                    );
                })}
                <button className="btn" onClick={deleteFn}>Eliminar</button>
                <button className="btn" onClick={() => setEditMode(true)}>Editar</button>
            </> :

                <>
                    {estructura.map((est, index) => {
                        return (
                            <div key={index} className="form-control">
                                <label>{est.nombre}</label>
                                <input type={est.tipo} placeholder={est.nombre} value={inputs[index]}
                                    onChange={(e) => setInputs(inputs.map((value, idx) => idx === index ? e.target.value : value))} />
                            </div>
                        );
                    })}
                    <button className="btn" onClick={() => setEditMode(false)}>Cerrar</button>
                    <button className="btn" onClick={editFn}>Guardar</button>
                </>}
        </div >
    )
}

export default Item
