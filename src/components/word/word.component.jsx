import React from "react";

function Word(props){
  const { word, number } = props;
  return (
      <div id={"word"+number}>{ word }</div>
    
  );
}
export default Word;
