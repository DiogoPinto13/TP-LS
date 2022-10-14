import React from "react";

import Timer from "../timer/timer.component";

import "./control-panel.css";

function ControlPanel(props) {
  const { gameStarted, selectedLevel, onGameStart, onLevelChange, words, tamanho, timer, handleGameOver } = props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";
  let thing = [];
  if(gameStarted){
    for(let i=0;i<words.length;i++){
      thing.push({
        word: words[i],
        number: i+1
      });
    }
  }

  return (
    <section id="panel-control">
      <h3 className="sr-only">Escolha do Nível</h3>
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onLevelChange}
            disabled={gameStarted}
          >
            <option value="0">Seleccione...</option>
            <option value="1">Básico (5 palavras)</option>
            <option value="2">Intermédio (8 palavras)</option>
            <option value="3">Avançado (10 palavras)</option>
          </select>
        </fieldset>
        <button
          type="button"
          id="btPlay"
          disabled={selectedLevel == 0 || selectedLevel == undefined}
          onClick={onGameStart}
        >
          
          {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
          
        </button>
        
      </form>
      <div className="form-metadata">
        <p id="message" role="alert" className="hide">
          Clique em Iniciar o Jogo!
        </p>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{gameStarted ? <Timer originalTimer={timer} gameStarted={gameStarted} handleGameOver={handleGameOver}/> : ""}</dd>
        </dl>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>
      </div>
      <div className="form-metadata">
        <div className={`list-item left words ${gameStartedClass}`}>
          <p>Palavras em Jogo:</p>
          <div className={tamanho == 18 ? "words-div-big" : "words-div"}>
            {thing.map((obj, index) => {
              return <div id={"word"+obj.number} key={index}>{ obj.word }</div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
