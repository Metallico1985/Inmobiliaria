import React from "react";
import "./Footer.css";
import { SlCallIn, SlEnvolope, SlLocationPin } from "react-icons/sl";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="Footer">
      <div class="top_header">
        <section>
          <IconContext.Provider value={{ color: "red", size: "25px" }}>
            <SlCallIn />
          </IconContext.Provider>
          <span>Contactanos (22)2365.6520 - 099867688</span>
        </section>
        <section>
          <IconContext.Provider value={{ color: "red", size: "25px" }}>
            <SlEnvolope />
          </IconContext.Provider>
          <span>contacto@inmobiliariarossi.com.uy</span>
        </section>

        <section>
          <IconContext.Provider value={{ color: "red", size: "30px" }}>
            <SlLocationPin />
          </IconContext.Provider>
          <span>Rivera 641 | Las Piedras | Uruguay</span>
        </section>
      </div>

      <span class="border-shape"></span>
      <div class="bottom_content"></div>

      <section class="copyright">
        <p>DESDE 1990 SIENDO LA EMPRESA MAS SOLICITADA</p>
        <p>Copyright © 2023 Inmobiliaria Rossi - All rights reserved</p>
      </section>
    </footer>
  );
}
export default Footer;
