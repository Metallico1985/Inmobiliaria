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
      <div className="contactoMapa">
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
