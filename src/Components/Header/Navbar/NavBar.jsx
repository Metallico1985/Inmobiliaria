import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div class="navbar">
            <ul class="navbarList">
                <li class="navbarItems" data-animation="to-center">
                    <Link to="/main" >
                        Inicio
                    </Link>
                </li>
                <li class="navbarItems">
                    <Link to="/Empresa">
                        Empresa
                    </Link>
                </li>
                <li class="navbarItems">
                    <Link to="/Servicios">
                        Servicios
                    </Link>
                </li>
                <li class="navbarItems">
                    <Link to="/Estudio">
                        Estudio
                    </Link>
                </li>
                <li class="navbarItems">
                    <Link to="/Contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </div >
    );
}

export default NavBar;
