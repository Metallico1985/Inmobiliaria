import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./ModalAdm.css";

function ModalAdm(props) {
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.close}
      className="modalAdmin"
    >
      <div className="modalMain">
        <button class="modalBtn" onClick={() => navigate("/nueva_propiedad")}>
          Registrar nuevas propiedades
        </button>
        <button class="modalBtn" onClick={() => navigate("/modificar")}>
          Modificar propiedades
        </button>
        <button class="modalBtn" onClick={() => navigate("/eliminar")}>
          Eliminar propiedades
        </button>
        <button class="modalBtn" onClick={() => navigate("/lista")}>
          Lista de propiedades
        </button>
        <button class="modalBtn" onClick={() => navigate("/registro")}>
          Registrar Usuario
        </button>
      </div>
    </Modal>
  );
}

export default ModalAdm;
