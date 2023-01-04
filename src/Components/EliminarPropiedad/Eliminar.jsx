import React from 'react'
import './Eliminar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { eliminarInmueble } from '../../API/Rule_inmuebles'

function Eliminar() {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const handleId = (e) => { setId(e.target.value) };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datosPropiedad = { id: id };

        await eliminarInmueble(datosPropiedad)
            .then(() => {
                alert("Propiedad eliminada correctamente")
                navigate("/main")
            })
            .catch((error) => {
                alert(error);
            })
    };

    return (
        <div className='mainEliminar'>
            <form onSubmit={handleSubmit} action="">
                <h2>Eliminar inmueble</h2>
                <input type="text" required placeholder='ID propiedad' onChange={handleId} />
                <button type='submit'>Eliminar</button>
            </form>
        </div>
    )
}

export default Eliminar