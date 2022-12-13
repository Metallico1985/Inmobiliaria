import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../src/Components/FormLogin/Login";
import FormRegistro from "../src/Components/FormRegistro/FormRegistro";
import Eliminar from "../src/Components/EliminarPropiedad/Eliminar";
import DetalleProp from "./Components/DetallePropiedad/DetalleProp";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Contacto from "./Components/Contacto/Contacto";
import Estudio from "./Components/Estudio/Estudio";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Empresa from "./Components/pageEmpresa/empresa";
import FormModificar from "./Components/FormModificar/FormModificar";
import Servicios from "./Components/pageServicios/servicios";
import FormIngresoPropiedad from "./Components/FormIngresoPropiedad/FormIngresoPropiedad";
import ListadoInmuebles from "./Components/ListadoInmuebles/ListadoInmuebles"

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={'/main'} replace />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/registro",
    element: <FormRegistro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/nueva_propiedad",
    element: <ProtectedRoute><FormIngresoPropiedad /></ProtectedRoute>,
  },
  {
    path: "/modificar",
    element: <ProtectedRoute><FormModificar /></ProtectedRoute>,
  },
  {
    path: "/eliminar",
    element: <ProtectedRoute> <Eliminar /></ProtectedRoute>,
  },
  {
    path: "/lista",
    element: <ListadoInmuebles />
  },
  {
    path: "/detalle/:id",
    element: <DetalleProp />,
  },

  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/estudio",
    element: <Estudio />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
