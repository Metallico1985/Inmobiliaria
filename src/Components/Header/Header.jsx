import React from "react";
import "./Header.css";
import { useNavigate, Link } from 'react-router-dom'
import ModalAdm from "../Modal/ModalAdm"
import { useState } from 'react'

function Header() {
  const tokenActivo = localStorage.getItem("token")
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };
  const closeSesion = () => { localStorage.removeItem("token"); navigate("/main"); window.location.reload() }

  const [isOpen, setIsOpen] = useState(false)
  return (


    <div className="navbar">
      <div className="nav_logo"><Link to="/main"><img src="./Images/logoInmobiliaria.png"></img></Link> </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/main" >Inicio</Link>
        <Link to="/Empresa">Empresa</Link>
        <Link to="/Servicios">Servicios</Link>
        <Link to="/Estudio">Estudio</Link>
        <Link to="/Contacto">Contacto</Link>
        <div className="btnsContainer">
        {tokenActivo ? <div className="btnAdmin">
          <button onClick={handleOpen} >ADMINISTRAR</button>
          <button onClick={closeSesion} >CERRAR SESIÓN</button>
          <ModalAdm open={open} close={handleClose} />
        </div> :
          <div className="btnLogin">
            <button onClick={() => navigate("/login")}>INICIAR SESIÓN</button>
          </div>}
      </div>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </div>


  );
}

export default Header;
