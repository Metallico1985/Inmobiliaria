import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import emailjs from "@emailjs/browser";
import Popup from "./Popup/Popup";
import "reactjs-popup/dist/index.css";
import Mapa from "./Mapa/Mapa";
import Footer from "../Footer/Footer";
import { SlLocationPin, SlCallIn, SlEnvolope } from "react-icons/sl";
import { IconContext } from "react-icons";

//npm install reactjs-popup
//npm install @emailjs/browser --save

import "./Contacto.css";

function Contacto() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_ih99u6w",
        "template_kskp2bg",
        form.current,
        "-eIVvVkH1oJsOSlDL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Header />
      <div id="contactoMapa">
        <div className="contacto">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <h1 className="titulo">Contáctenos</h1>
            <input
              className="name"
              placeholder="Nombre"
              type="text"
              name="user_name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <input
              className="email"
              placeholder="Email"
              type="email"
              name="user_email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <textarea
              className="message"
              placeholder="Mensaje"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />

            <input className="send" type="submit" value="Enviar" />
          </form>
        </div>

        <div className="mapa">
          <Mapa />
        </div>
      </div>
      {/* <div className="datos">
        <div className="direccion">
          <IconContext.Provider value={{ color: "red", size: "40px" }}>
            <SlLocationPin />
          </IconContext.Provider>
          ;<p>Rivera 641</p>
          <p>Las Piedras</p>
          <p>Uruguay</p>
        </div>
        <div className="telefono">
          <IconContext.Provider value={{ color: "red", size: "40px" }}>
            <div>
              <SlCallIn />
            </div>
          </IconContext.Provider>
          <div className="telefonos">
            <p>+598 2 365 6520</p>
            <p>+598 99 867 688</p>
          </div>
        </div>
        <div className="mail">
          <IconContext.Provider value={{ color: "red", size: "40px" }}>
            <SlEnvolope />
          </IconContext.Provider>
          <p className="mail1">contacto@inmobiliariarossi.com.uy</p>
        </div>
      </div> */}

      <div className="footer">
        <Footer />
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} s>
        <h3 className="popupTitle">Su Email ha sido enviado correctamente</h3>
      </Popup>
    </div>
  );
}

export default Contacto;
