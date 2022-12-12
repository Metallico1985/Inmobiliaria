import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registroUsuario } from '../../API/Rule_auth'
import './Registro.css'

function FormRegistro() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [tipo_usuario, setTipo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const navigate = useNavigate()

    const handleMail = (e) => { setEmail(e.target.value) };
    const handlePass = (e) => { setPass(e.target.value) };
    const handleNombre = (e) => { setNombre(e.target.value) };
    const handleApellido = (e) => { setApellido(e.target.value) }
    const handleTipo = (e) => { setTipo(e.target.value) };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credenciales = { email: email, password: password, nombre: nombre, apellido: apellido, tipo_usuario: tipo_usuario };

        await registroUsuario(credenciales)
            .then(() => {
                alert("Ingreso correctamente")
                navigate("/main");
            })
            .catch((error) => {
                alert(error);
            })
    };
    return (
        <div className='registerMain'>
            <form onSubmit={handleSubmit} action="">
                <h2>Registro nuevo usuario</h2>
                <input type="text" required placeholder="Nombre" onChange={handleNombre} maxLength='20' />
                <input type="text" required placeholder="Apellido" onChange={handleApellido} maxLength='20' />
                <input type="text" placeholder='Tipo usuario' onChange={handleTipo} />
                <input type="email" required onChange={handleMail} placeholder='Email' />
                <input type="password" required onChange={handlePass} placeholder='Password' minLength='8' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormRegistro;