import React from "react";
import "./Footer.css";
import { SlCallIn, SlEnvolope, SlLocationPin } from "react-icons/sl";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="mainFooter">
      <div class="top_header">
        <section>
          <IconContext.Provider value={{ color: "red", size: "25px" }}>
            <SlCallIn />
          </IconContext.Provider>
          <span>Contactanos 123 456 789</span>
        </section>
        <section>
          <IconContext.Provider value={{ color: "red", size: "25px" }}>
            <SlEnvolope />
          </IconContext.Provider>
          <span>contacto@inmobiliaria.com.uy</span>
        </section>

        <section>
          <IconContext.Provider value={{ color: "red", size: "30px" }}>
            <SlLocationPin />
          </IconContext.Provider>
          <span>Ruta 48 | Las Brujas | Uruguay</span>
        </section>
      </div>

      <span class="border-shape"></span>
      <div class="bottom_content"></div>

      <section class="copyright">
        <p>Desde 1990, junto a usted.</p>
        <p>Copyright © 2023 Inmobiliaria - All rights reserved</p>
      </section>
    </footer>
  );
}
export default Footer;
