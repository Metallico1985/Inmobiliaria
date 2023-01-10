import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { iniciarSesion } from '../../API/Rule_auth'
import { Backdrop, CircularProgress } from '@mui/material'
import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const navigate = useNavigate()

    const handleMail = (e) => { setEmail(e.target.value) }
    const handlePass = (e) => { setPass(e.target.value) }

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen() }

    const handleSubmit = async (e) => {
        handleOpen(true)
        e.preventDefault();

        const credenciales = { email: email, password: password };
        await iniciarSesion(credenciales)
            .then(() => {
                handleOpen(false)
                alert("Logueado correctamente")
                navigate("/main");
            })
            .catch((error) => {
                handleOpen(false)
                alert(error);
            })
    };

    return (
        <div className='mainLogin'>
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
            <div className='formCont'>
                <form onSubmit={handleSubmit} action="">
                    <h2>Iniciar sesión</h2>
                    <input type="email" required onChange={handleMail} placeholder='Email' maxLength='25' />
                    <input type="password" required onChange={handlePass} placeholder='Password' minLength="8" />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login