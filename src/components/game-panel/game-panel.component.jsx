import React from "react";
import Letter from "../letter/letter.component";
import { handleOnClick, geraTab, preencheTab } from "../../helpers";

import "./game-panel.css";

function GamePanel(props) {
  const { words, tamanho, selectedLevel, foundWords, contador, gameStarted, flagCheat } = props;
  const letter_array = geraTab(tamanho);
  if(gameStarted){
    preencheTab(letter_array, tamanho, words, flagCheat);
  }
  
  return (
    <section className={gameStarted ? "game-panel" : "game-panel disabled"}>
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game">
        <div id="game-panel-grid" className={selectedLevel === "1" ? "basico" : selectedLevel === "2" ? "intermedio" : selectedLevel === "3" ? "avancado" : "nothing"}>
          {gameStarted ? 
          <Letter 
            array={letter_array}
            tamanho={tamanho}
            words={words}
            onClick={handleOnClick}
            contador={contador}
            foundWords={foundWords}
          /> : ""}
        </div>
      </div>
    </section>
  );
}
export default GamePanel;
