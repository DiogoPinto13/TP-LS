import prob from "./prob";

function preencheTab(array, tamanho, words, flagCheat){
    //mete tudo com .
  for(let i = 0; i < tamanho; i++){
    for(let j = 0; j < tamanho; j++){
      array[i][j] = '.';
    }
  }

  //console.log("lista de palavras recebida: " + words);
  //iterar sobre todas as palavras no Words
  let flag, tamWord, dirsen, contador;
  for(let i = 0; i < words.length;i++){
    
    //while pro sitio aleatorio
    flag = 0;
    tamWord = 0;
    dirsen = 0;        
    tamWord = words[i].length;

    do{
        //escolher um sitio aleatorio
        let x = Math.floor(Math.random() * (tamanho-1));
        let y = Math.floor(Math.random() * (tamanho-1));

        contador = 0;

        //escolhe o sentido e direção da palavra        
        //dirsen = prob();
        dirsen = prob();
        
        
        //cada caracter da palavra
        const myArray = words[i].split("");
        //console.log(myArray);
        //console.log(dirsen);
        switch(dirsen){
            
            case 1: //horizontal normal
                if(y+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x][y+c] === "." || array[x][y+c] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x][y+c] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                }
                //contador = 0;
                break;
            case 2: //horizontal invertido
                myArray.reverse();
                if(y+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x][y+c] === "." || array[x][y+c] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x][y+c] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                    //contador = 0;
                }
                break;
            case 3: //vertical normal
                if(x+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x+c][y] === "." || array[x+c][y] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x+c][y] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                    //contador = 0;
                }
                break;
            case 4: //vertical invertido
                myArray.reverse();
                if(x+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x+c][y] === "." || array[x+c][y] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x+c][y] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                    //contador = 0;
                }

                break;
            case 5: //diagonal esq dir normal
                if(x+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x+c][y+c] === "." || array[x+c][y+c] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x+c][y+c] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                    //contador = 0;
                }
                break;
            case 6: //diagonal esq dir invertido
                myArray.reverse();
                if(x+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x+c][y+c] === "." || array[x+c][y+c] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x+c][y+c] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                    //contador = 0;
                }
            break;
            case 7: //diagonal dir esq normal
            if(x+tamWord < tamanho){  //se couber
                for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                    //console.log("valor: " + (x-c));
                    if(array[x+c][y-c] === "." || array[x+c][y-c] === myArray[c]){
                        contador++;
                    }
                }
                //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                    for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                        array[x+c][y-c] = myArray[d];
                    }
                    //console.log("ola4");
                    flag = 1;
                }
                //contador = 0;
            }
            break;
            case 8: //diagonal dir esq invertido
                myArray.reverse();
                if(x+tamWord < tamanho){  //se couber
                    for(let c = 0; c < tamWord; c++){  //ver se n tamos a reescrever
                        if(array[x+c][y-c] === "." || array[x+c][y-c] === myArray[c]){
                            contador++;
                        }
                    }
                    //console.log("o contador: " + contador + "o tamanho da palavra" + tamWord);
                    if(contador === tamWord){ //se tiver tudo bem, vamos escrever
                        for(let c = 0, d = 0; c < tamWord, d < tamWord; c++, d++){  //ver se n tamos a reescrever
                            array[x+c][y-c] = myArray[d];
                        }
                        //console.log("ola4");
                        flag = 1;
                    }
                    //contador = 0;
                }
                break;
            default:
                break;
        }

    }while(flag === 0);
  }
  if(flagCheat !== true){
    const arrayRestos = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(let i = 0; i < tamanho; i++){
        for(let j = 0; j < tamanho; j++){
            if(array[i][j] === "."){
                array[i][j] = arrayRestos[Math.floor(Math.random() * arrayRestos.length)];
            }
        }
    }
  }
}

export default preencheTab;
