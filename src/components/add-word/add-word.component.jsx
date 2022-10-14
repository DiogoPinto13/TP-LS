import React from "react";
import Word from "../word/word.component";
import "./add-word.css";

function AddWord(props){
  const { allwords, gameStarted, handleAddWord, handleRemoveWord } = props;
  let thing = [];
  for(let i = 0;i<allwords.length;i++){
    thing.push({
      word: allwords[i],
      number: i
    });
  }

  return (
    <section id="add-word-panel" className={gameStarted ? "disabled" : ""}>
      <p id="title-text">Palavras Guardadas:</p>
      <div id="wordsDiv" className="wordsDiv">
        {thing.map((obj, index) => {
          return <Word
            number={obj.number} 
            key={index}
            word={obj.word}
          />
        })}
      </div>
      <div className="user-inputs">
        <input type="text" id="txtWord"></input>
        <input type="button" id="btAdd" value="Adicionar Palavra" onClick={handleAddWord}></input>
        <input type="button" id="btRemove" value="Remover Palavra" onClick={handleRemoveWord}></input>
      </div>
    </section>
  );
}

export default AddWord;
