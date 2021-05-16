import React from 'react'
import '../styles/Tabla.css'

const ProductCard = ({ item, idx, onAddProducto, estructura }) => {

    const addProducto = () => onAddProducto(idx);

    return (
        <div className="item-container">
            <h2 className="titulo">{item.Nombre}</h2>
            {estructura.map((estr, index) => {
                if (estr.nombre !== "Nombre") return (
                    <h3 key={index} className="subtitulo">{`${estr.nombre}: ${estr.prefix ? estr.prefix : ""}${item[estr.nombre]}`}</h3>
                );
            })}
            <button className="btn" onClick={addProducto}>Agregar al carrito</button>
        </div>

    )
}

export default ProductCard
