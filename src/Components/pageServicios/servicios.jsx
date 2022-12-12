import React from "react";
import "./servicios.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Servicios = () => {
  return (
    <div class="container marketing">
      <Header />
      <div class="row">
        <div class="col-3">
          <img
            class="img-circleB"
            src="https://res.cloudinary.com/djtzwpqga/image/upload/v1482111662/website_al6qpj.jpg"
            alt="Globe"
            width="140"
            height="140"
          />
          <h2>Prestamos </h2>
          <p>Informate y accede a tu prestamo</p>
          <p className="pServicios">
            <a class="btn btn-default" href="#first" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-3">
          <img
            class="img-circleB"
            src="Images/alquilerchico.jpg"
            alt="Globe"
            width="140"
            height="140"
          />
          <h2>Alquileres</h2>
          <p>Consulta sobre nuestros alquileres</p>
          <p className="pServicios">
            <a class="btn btn-default" href="#first" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-3">
          <img
            class="img-circleB"
            src="Images/venta.jpg"
            alt="Computer"
            width="140"
            height="140"
          />
          <h2>Ventas</h2>
          <p>Los mejores precios en ventas</p>
          <p>
            <a class="btn btn-default" href="#second" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-3">
          <img
            class="img-circleB"
            src="https://res.cloudinary.com/djtzwpqga/image/upload/v1482111659/idea_kdgaws.jpg"
            alt="Phone"
            width="140"
            height="140"
          />
          <h2>Tasacciones</h2>
          <p>Comunicate con nuestro equipo y responderemos tus preguntas</p>
          <p className="pServicios">
            <a class="btn btn-default" href="#third" role="button">
              View details &raquo;
            </a>
          </p>
        </div>

        {/* home */}
      </div>
      <hr class="featurette-divider" />
      <div class="row featurette" id="first">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Prestamos <span class="text-muted">Inmobiliarios</span>
          </h2>
          <p class="lead">
            Inmobiliaria Rossi cuenta con los mejores prestamos hipotecarios,
            contando con destacados profesionales en la materia, los cuales se
            encargaran de brindar el apoyo necesario para su objetivo.
            <br></br>
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="img-rounded img-responsive center-block"
            src="Images/prestamos.jpg"
            alt="Website"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette" id="second">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Alquileres{" "}
            <span class="text-muted">
              15% off en impuestos hasta el 28 de Febrero de2023.
            </span>
          </h2>
          <p class="lead">
            Contamos con la gestion de integral del arrendamiento urbano,
            orientados en casas, comercios, u otros desintos, brindandole al
            propietario una renta sencilla, para que pueda disfrutarla al
            instante.
          </p>
        </div>
        <div class="col-md-4">
          <img
            class="img-rounded img-responsive center-block"
            src="/Images/alquileres.jpg"
            alt="Sysadmins"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette" id="second">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Ventas <span class="text-muted"></span>
          </h2>
          <p class="lead">
            Consulta sobre las ventas de propiedades en nuestra web. Cumplimos
            mas de 100 años brindandole al pueblo uruguayo ventas exitosas y al
            mejor precio. Comprometiendonos dia a dia con nuestros clientes.{" "}
          </p>
        </div>
        <div class="col-md-4">
          <img
            class="img-rounded img-responsive center-block"
            src="/Images/ventas.jpg"
            alt="Sysadmins"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette" id="third">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Tasacciones,{" "}
            <span class="text-muted">comunicate con nuestro equipo. </span>
          </h2>
          <p class="lead">
            Tasamos tu solicitud al instante. Comunicate a traves de nuestro
            whatsapp y te responderemos con todos los detalles que debes tener
            al momento de completar un movimiento de esta magnitud.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="img-rounded img-responsive center-block"
            src="/Images/tasacciones.jpg"
            alt="Phone"
          />
        </div>
        <hr class="featurette-divider" />
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
