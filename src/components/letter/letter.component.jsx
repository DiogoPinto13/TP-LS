import React from "react";

import "./letter.css";

function Letter(props){
  const { array, tamanho, words, onClick, foundWords } = props;
  const letter = [];
  for(let i=0;i<tamanho;i++){
    for(let j=0;j<tamanho;j++){
      letter.push({
        letter: array[i][j],
        x: j,
        y: i
      });
    }
  }
  return (
    letter.map((obj, index) => {
      return <div className={"grid-item"} id={obj.x +" "+obj.y} key = {index} onClick={() => onClick(obj.x, obj.y, words, foundWords, array, tamanho)}>{ obj.letter }</div>
    })
  );
}
export default Letter;
