function printTab(array, tamanho){
    for(let i = 0; i < tamanho; i++){
      for(let j = 0; j < tamanho; j++){
        console.log(array[i][j]);
      }
    }
}

export default printTab;