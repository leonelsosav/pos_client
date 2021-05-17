import { useState } from 'react'

const DAOTicket = (route) => {
    const [data, setData] = useState({ Productos: [], Fecha: "", Nombre: "" });

    const guardarNuevoItem = async (data) => {
        try {
            let idTicket = await fetch(`${process.env.REACT_APP_API_URL}/${route}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return idTicket.json();
        } catch (e) {
            console.log(e);
        }
    };

    const getVenta = async (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/${route}/${id}`)
            .then(response => response.json())
            .then(dataVenta => {
                setData(dataVenta);
            });
    }


    return {
        guardarNuevoItem, getVenta, data
    }
}

export default DAOTicket
