import React from 'react'
import "./Hero.css"
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    return (
        <div className='home'>
            <video src="./videos/Noche.mp4" autoPlay="true" muted="true" loop="true"></video>
            <div className='bienvenida'>
                <h1>Bienvenidos a inmobiliaria Rossi</h1>
            </div>
            <button className='indexBtn' onClick={() => navigate("/main")}>Ingresar al sitio</button>

        </div>
    )
}

export default Home