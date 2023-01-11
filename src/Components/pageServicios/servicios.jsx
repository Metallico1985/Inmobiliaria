import React from "react";
import "./servicios.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Servicios = () => {
  return (
    <div class="containerServicios">
      <Header />
      <div class="infoImgSuperiorContainer">
        <div class="infoImgSuperior">
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
        <div class="infoImgSuperior">
          <img
            class="img-circleB"
            src="https://www.finect.com/image/41d98466022082c61cb89fd83e6a0e5a5167918bf44"
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
        <div class="infoImgSuperior">
          <img
            class="img-circleB"
            src="https://www.cronista.com/files/image/456/456533/6252f99cd7101.jpg"
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
        <div class="infoImgSuperior">
          <img
            class="img-circleB"
            src="https://jpcarrau.com.uy/wp-content/uploads/2021/03/535x729-tasaciones.png"
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
      <hr class="divider" />
      <div class="containersSections" id="first">
        <div class="textSection">
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
        <div class="image">
          <img
            class="img-rounded img-responsive center-block"
            src="https://menorcaaldia.com/wp-content/uploads/2020/10/Sin-ti%CC%81tulo-1024x675.jpeg"
            alt="Website"
          />
        </div>
      </div>

      <hr class="divider" />

      <div class="containersSections" id="second">
        <div class="textSection">
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
        <div class="image">
          <img
            class="img-rounded img-responsive center-block"
            src="https://d1ih8jugeo2m5m.cloudfront.net/2022/01/negocio-exitoso-1200x685.jpg"
            alt="Sysadmins"
          />
        </div>
      </div>

      <hr class="divider" />

      <div class="containersSections" id="second">
        <div class="textSection">
          <h2 class="featurette-heading">
            Ventas <span class="text-muted"></span>
          </h2>
          <p class="lead">
            Consulta sobre las ventas de propiedades en nuestra web. Cumplimos
            mas de 100 años brindandole al pueblo uruguayo ventas exitosas y al
            mejor precio. Comprometiendonos dia a dia con nuestros clientes.{" "}
          </p>
        </div>
        <div class="image">
          <img
            class="img-rounded img-responsive center-block"
            src="https://www.wallstreetenglish.cl/hs-fs/hubfs/smm-post/blog-posts/10-exoresiones-de-negocios-en-ingles.jpeg?width=1206&name=10-exoresiones-de-negocios-en-ingles.jpeg"
            alt="Sysadmins"
          />
        </div>
      </div>

      <hr class="divider" />

      <div class="containersSections" >
        <div class="textSection">
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
        <div class="image">
          <img
            class="img-rounded img-responsive center-block"
            src="https://blog.tasaciones.com/wp-content/uploads/tasacionvivienda.jpg"
            alt="Phone"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
