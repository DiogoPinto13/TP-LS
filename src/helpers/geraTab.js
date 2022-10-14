function geraTab(tamanho){
    let array = [];
    for(let i = 0; i < tamanho; i++){
        array.push(new Array(tamanho));
    }
    return array;
  }

  export default geraTab;