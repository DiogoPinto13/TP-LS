import React from "react";
import "./game-over-modal.css";

import { Footer } from "../index";
function GameOverModal({ isOpen, scorer, handleClose, gameStarted }) {
  const modalClass = `modal ${isOpen ? "" : "hide-modal"}`;
  return (
    <div id="modal-gameOver" className={modalClass}>
      <div className="w3-modal-content w3-card-4 w3-animate-zoom estilos">
        <header>
          <span
            className="w3-button w3-display-topright closeModal"
            data-modalid="gameOver"
            onClick={() => {handleClose()}}
          >
            &times;
          </span>
          <div>Jogo Terminado</div>
        </header>
        <div className="info" id="messageGameOver">
          <p>Pontuação:</p>
          <div id="totalpoint">0</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default GameOverModal;
