import "./empresa.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Empresa = () => {
  return (
    <div class="containerEmpresa">
      <Header />
      <div class="circleImgContainer">
        <div class="col-lg-4">
          <img
            class="img-circle"
            src="/Images/logoInmobiliaria.png"
            alt="Globe"
            width="140"
            height="140"
          />
          <h2>Nuestra empresa</h2>
          <p>Lideres en el sector inmobiliario</p>
          <p>
            <a class="btn btn-default" href="#first" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="img-circle"
            src="https://parquebatalladelaspiedras.imcanelones.gub.uy/media/zoo/images/estacion-las-piedras-desarrollo_b7087337d710cff3a5da89e4ae07060a.jpg"
            alt="Computer"
            width="140"
            height="140"
          />
          <h2>Fundacion</h2>
          <p>Fundada el 28 de septiembre de 1996.</p>
          <p>
            <a class="btn btn-default" href="#second" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="img-circle"
            src="https://thumbs.dreamstime.com/z/okr-en-la-pizarra-o-texto-dominante-objetivo-de-las-siglas-los-resultados-con-muchas-bombillas-que-brillan-intensamente-140412308.jpg"
            alt="Phone"
            width="140"
            height="140"
          />
          <h2>Objetivos</h2>
          <p>Ofrecerle al cliente un comfort unico.</p>
          <p>
            <a class="btn btn-default" href="#third" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>
      <hr class="divider" />
      <div class="row featurette" id="first">
        <div class="textSections">
          <h2 class="featurette-heading">
            Nuestra empresa, <span class="text-muted">tu empresa.</span>
          </h2>
          <p class="lead">
            Nuestra empresa esta conformada por los mejores profesionales de
            Uruguay, brindadole asi a todos nuestros clientes una tranquilidad a
            la hora de poder hacer un cambio en sus vidas. Toma la mejor
            decisión con Inmobilaria Rossi.<br></br>
            <strong>
              ¡Te esperamos con la mejor atencion, como desde 1996, siendo
              lideres en el mercado!
            </strong>
          </p>
        </div>
        <div class="col-md-5 image">
          <img
            class="img-rounded img-responsive center-block "
            src="https://www.grupoioe.es/wp-content/uploads/2021/12/Fortalezas-de-una-empresa-mejorar.jpg"
            alt="Website"
          />
        </div>
      </div>

      <hr class="divider" />

      <div class="row featurette" id="second">
        <div class="textSections">
          <h2 class="featurette-heading">
            Nuestros inicios <span class="text-muted">junto a ustedes.</span>
          </h2>
          <p class="lead">
            La empresa Inmobiliaria Rossi fue fundanda en 1990, de la mano de
            Henry Edison Rossi Pasina. Este proyecto tuvo su punto clave en la
            seriedad, compromiso e impronta particular.{" "}
            <strong>
              Contando con mas de 30 años en el area, confirmando nuestro
              trabajo, y proyectandonos hacia el futuro, a traves de las nuevas
              generaciones.
            </strong>
          </p>
        </div>
        <div class="col-md-4 image">
          <img
            class="img-rounded img-responsive center-block"
            src="Images/laspiedras.jpg"
            alt="Sysadmins"
          />
        </div>
      </div>

      <hr class="divider" />

      <div class="row featurette" id="third">
        <div class="textSections">
          <h2 class="featurette-heading">
            Nuestros objetivos,{" "}
            <span class="text-muted">proyectado al publico. </span>
          </h2>
          <p class="lead">
            A traves del tiempo, hemos ido creciendo gracias a nuestros
            clientes, es por eso que les ofrecemos mejoras que van de la mano
            con las nuevas tecnologias. A traves de nuestra web podran obtener
            todas las novedades con un solo click, facilitandole a nuestros
            clientes la busqueda y sus pretensiones.
          </p>
        </div>
        <div class="col-md-5 image">
          <img
            class="img-rounded img-responsive center-block"
            src="https://img.freepik.com/foto-gratis/hermoso-elegante-personal-sentado-oficina-escritorio-usando-computadora-portatil-escuchando-colega_146671-15600.jpg?w=1380&t=st=1673452815~exp=1673453415~hmac=4ae5962ed213546d6e9871ef9618a8989c59babbb5d0e65f579afe59ce470fc5"
            alt="Phone"
          />
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Empresa;
