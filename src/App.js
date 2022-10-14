import React from 'react';
import { useState } from "react";
import "./assets/styles/App.css";

import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
  GameOverModal,
  AddWord
} from "./components";
import { WORDS } from './constants';
import { shuffleArray, sorting, crossWord, resetCrossWords, Scorer } from './helpers';

/*
  nivel 1: 5 palavras
  nivel 2: 8 palavras
  nivel 3: 10 palavras
  --------------------
  react
  javascript
  html
  css
  java
  angular
  express
  assembly
  ruby
  matlab
*/

function App() {
  var numWords = 0;
  const [timer, setTimer] = useState();
  const [allWords, setAllWords] = useState(WORDS);
  const [tamanho, setTamanho] = useState(0);
  const [words, setWords] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [foundWords, setFoundWords] = useState([]);
  const [alreadyFoundWords, setAlreadyFoundWords] = useState([]);
  const [isOpen, setIsOpen] = useState(0);
  const [flagCheat, setFlagCheat] = useState(false);

  /**
  * When the game starts
  */
  const handleGameStart = () => {
    if (gameStarted) {
      setGameStarted(false);
    } else {
      setGameStarted(true);
    }
    Scorer(1);
    resetCrossWords(words.length, foundWords, alreadyFoundWords);
  };

  /**
  * When a word is found
  */
  const handleFoundWord = (word) => {
    let number=0, count=0;
    foundWords.push(word);
    for(let i=0;i<words.length;i++){
      if(word == words[i] && alreadyFoundWords[i] != words[i]){
        number = i+1;
        foundWords.push(word);
      }
    }
    for(let i=0;i<words.length;i++){
      if(words[i] == word){
        alreadyFoundWords[i] = word;
      }
    }
    for(let i=0;i<words.length;i++){
      if(alreadyFoundWords[i] == words[i]){
        count++;
      }
    }
    if(count == words.length){
      handleGameOver();
    }
    else if(number != 0){
      crossWord(number);
      Scorer(0);
    }
  };
  /**
  * When the user selects a new level,
  * this callback function is executed
  */
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    switch(value){
      case "0":
        setTamanho(0);
      break;
      case "1":
        numWords = 5;
        setTimer(120);
        setTamanho(14);
      break;
      case "2":
        numWords = 8;
        setTimer(180);
        setTamanho(16);
      break;
      case "3":
        numWords = 10;
        setTimer(220);
        setTamanho(18);
      break;
    }
    words.length = 0;
    for(let i = 0; i < allWords.length;i++){
      words.push(allWords[i]);
    }
    const temp = shuffleArray(words);
    words.length = 0;
    for(let i = 0; i < numWords; i++){
      words.push(temp[i]);
    }
    sorting(words);
    resetCrossWords(numWords, foundWords, alreadyFoundWords);
  }
  
  /**
  * When a game is won
  */
  const handleGameOver = () => {
    setIsOpen(1);
    Scorer(2);
  }

  const handleClose = () => {
    setIsOpen(0);
    handleGameStart();
  }

  const handleAddWord = () => {
    //adds a word
    let element = document.getElementById("txtWord");
    let flag=0, word;
    if(element){
      if(element.value != ""){
        word = element.value;
        word = word.toLowerCase();
        word = word.replace(/\s+/g, '');
        if(word.length < 12){
          for(let i=0;i<allWords.length;i++){
            if(allWords[i] == word){
              flag = 1;
            }
          }
          if(flag == 0){
            element.value = "";
            if(word === "cheat")
              setFlagCheat(true);
            else if(word === "legit")
              setFlagCheat(false);
            else
              allWords[allWords.length] = word;
              element = document.getElementById("btLevel");
              element.value = 0;
              handleLevelChange({currentTarget: {value: 0}});
          }
        }
        else{
          element.value = "";
        }
      }
    }
  }

  const handleRemoveWord = () => {
    //removes a word
    let element = document.getElementById("txtWord");
    let flag=0, word, array = allWords;
    if(element){
      if(element.value != ""){
        word = element.value;
        word = word.toLowerCase();
        word = word.replace(/\s+/g, '');
        for(let i=0;i<array.length;i++){
          if(array[i] == word){
            flag = 1;
            array[i] = "";
            break;
          }
        }
        if(flag){
          element.value = "";
          let temp = [];
          for(let i=0;i<array.length;i++){
            if(array[i] != ""){
              temp.push(array[i]);
            }
          }
          setAllWords(temp);
          element = document.getElementById("btLevel");
          element.value = 0;
          handleLevelChange({currentTarget: {value: 0}});
        }
      }
    }
  }

  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          words={words}
          tamanho={tamanho}
          timer={timer}
          handleGameOver={handleGameOver}
        />
        <GameOverModal
          isOpen={isOpen}
          handleClose={handleClose}
          gameStarted={gameStarted}
        />
        <AddWord
          allwords={allWords}
          gameStarted={gameStarted}
          selectedLevel={selectedLevel}
          handleAddWord={handleAddWord}
          handleRemoveWord={handleRemoveWord}
        />
        <GamePanel
          words={words}
          gameStarted={gameStarted}
          tamanho={tamanho}
          selectedLevel={selectedLevel}
          foundWords={handleFoundWord}
          flagCheat={flagCheat}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
