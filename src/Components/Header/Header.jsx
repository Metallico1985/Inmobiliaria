import React from "react";
import "./Header.css";
import NavBar from './Navbar/NavBar'
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
  return (
    <div className="headerContainer">
      < div className="header">
        < Link to="/main" >
          <div className="logoContainer">
            <img src="./Images/logoInmobiliaria.png"></img>
          </div>
        </Link >

        <NavBar />


      </div>
      <div className="btnsContainer">
        {tokenActivo ? <div className="btnAdmin">
          <button onClick={handleOpen} >ADMINISTRAR</button>
          <button onClick={closeSesion} >CERRAR SESIÓN</button>
          <ModalAdm open={open} close={handleClose} /></div>
          : <div className="btnLogin">
            <button onClick={() => navigate("/login")}>INICIAR SESIÓN</button>
            <button onClick={() => navigate("/registro")}>Registrar</button>
          </div>

        }
      </div>`
    </div >
  );
}

export default Header;
