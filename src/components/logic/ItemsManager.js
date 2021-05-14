import { useEffect, useState } from 'react'
import db from '../../db/firebase'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const ItemsManager = (route) => {
    const [items, setItems] = useState([]);
    const [formNuevo, setFormNuevo] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${process.env.REACT_APP_API_URL}/${route}`)
                .then(response => response.json())
                .then(data => {
                    console.log(`${process.env.REACT_APP_API_URL}/${route}`);
                    console.log(data);
                    setItems(data)
                });
        };
        fetchData();
    }, []);

    const eliminarItem = (idxItem) => {
        const eliminar = async () => {
            let nuevoArr = items.filter((value, index) => index !== idxItem);
            await fetch(`${process.env.REACT_APP_API_URL}/${route}/${items[idxItem].Id}`, {
                method: 'DELETE'
            });
            setItems(nuevoArr);
        }
        alertify.confirm('Kasterz', `¿Desea eliminar este ${route}?`, () => { alertify.success('Ok'); eliminar(); }
            , () => { alertify.error('Cancel') });
    }

    const guardarNuevoItem = async (data) => {
        try {
            let nuevoId = 1;
            if (items.length > 0) {
                nuevoId = items.reduce((acc, currValue) => Number(acc.Id) > Number(currValue.Id) ? acc : currValue);
                nuevoId = Number(nuevoId.Id) + 1;
            }
            data.Id !== undefined && (nuevoId = data.Id);
            let dataC = { ...data, Id: nuevoId.toString() }
            await fetch(`${process.env.REACT_APP_API_URL}/${route}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataC)
            });
            setItems([...items, dataC]);
            alertify.alert('Kasterz', `${route} creado con el Id: ${nuevoId.toString()}`, () => { alertify.success('Ok'); });
            toggleForm();
        } catch (e) {
            console.log(e);
        }
    };

    const editarItem = async (data, itemIdx) => {
        let nuevoArrItems = await items.map((value, index) => index === itemIdx ? { ...value, ...data } : value);
        await fetch(`${process.env.REACT_APP_API_URL}/${route}/${items[itemIdx].Id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        setItems(nuevoArrItems);
    }

    const toggleForm = () => setFormNuevo(!formNuevo);

    return {
        items, setItems,
        formNuevo, setFormNuevo,
        eliminarItem, toggleForm,
        guardarNuevoItem, editarItem
    }
}

export default ItemsManager
