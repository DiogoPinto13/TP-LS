function checksWord(words, coords, letter_array, foundWords, tamanho){
    let correct_word="", test_word, found_word=1, flag=0, element;
    for(let i=0;i<words.length;i++){
        for(let j=0;j<foundWords.length;j++){
            if(foundWords[j] == words[i]){
                found_word = 0;
            }
        }
        if(found_word != 0){
            if(coords[0].x < coords[1].x && coords[0].y == coords[1].y){
                //horizontal normal
                test_word = words[i].split("");
                if(coords[0].x+test_word.length-1 >= 0 && coords[0].x+test_word.length-1 <= tamanho){
                    if(coords[0].x+test_word.length-1 == coords[1].x){
                        for(let j=0;j<test_word.length;j++){
                            if(test_word[j] != letter_array[coords[0].y][coords[0].x+j]){
                                flag = 1;
                            }
                            if(j+1==test_word.length && flag == 0){
                                correct_word = words[i];
                                for(let k=0;k<test_word.length;k++){
                                    element = document.getElementById((coords[0].x+k)+" "+coords[0].y);
                                    element.className = "grid-item "+(coords[0].x+k)+" "+coords[0].y+ " found";
                                }
                            }
                        }
                    }
                }
            }
            else if(coords[0].x > coords[1].x && coords[0].y == coords[1].y){
                //horizontal invertido
                test_word = words[i].split("");
                test_word.reverse();
                if(coords[0].x-test_word.length+1 >= 0 && coords[0].x-test_word.length+1 <= tamanho){
                    if(coords[0].x-test_word.length+1 == coords[1].x){
                        for(let j=test_word.length-1;j>=0;j--){
                            if(test_word[j] != letter_array[coords[0].y][coords[1].x+j]){
                                flag = 1;
                            }
                            if(j==0 && flag == 0){
                                correct_word = words[i];
                                for(let k=0;k<test_word.length;k++){
                                    element = document.getElementById((coords[1].x+k)+" "+coords[0].y);
                                    element.className = "grid-item "+(coords[1].x+k)+" "+coords[0].y+ " found";
                                }
                            }
                        }
                    }
                }
            }
            else if(coords[0].y < coords[1].y && coords[0].x == coords[1].x){
                //vertical normal
                test_word = words[i].split("");
                if(coords[0].y+test_word.length-1 >= 0 && coords[0].y-test_word.length+1 <= tamanho){
                    if(coords[0].y+test_word.length-1 == coords[1].y){
                        for(let j=0;j<test_word.length;j++){
                            if(test_word[j] != letter_array[coords[0].y+j][coords[0].x]){
                                flag = 1;
                            }
                            if(j+1==test_word.length && flag == 0){
                                correct_word = words[i];
                                for(let k=0;k<test_word.length;k++){
                                    element = document.getElementById(coords[0].x+" "+(coords[0].y+k));
                                    element.className = "grid-item "+coords[0].x+" "+(coords[0].y+k)+ " found";
                                }
                            }
                        }
                    }
                }
            }
            else if(coords[0].y > coords[1].y && coords[0].x == coords[1].x){
                //vertical invertida
                test_word = words[i].split("");
                if(coords[0].y-test_word.length+1 >= 0 && coords[0].y-test_word.length+1 <= tamanho){
                    if(coords[0].y-test_word.length+1 == coords[1].y){
                        for(let j=test_word.length-1;j>=0;j--){
                            if(test_word[j] != letter_array[coords[0].y-j][coords[0].x]){
                                flag = 1;
                            }
                            if(j==0 && flag == 0){
                                correct_word = words[i];
                                for(let k=0;k<test_word.length;k++){
                                    element = document.getElementById(coords[0].x+" "+(coords[1].y+k));
                                    element.className = "grid-item "+coords[0].x+" "+(coords[1].y+k)+ " found";
                                }
                            }
                        }
                    }
                }
            }
            else if(coords[0].x != coords[1].x && coords[0].y != coords[1].y){
                //diagonais
                if(coords[0].x < coords[1].x && coords[0].y < coords[1].y){
                    //diagonal normal esq-dir
                    test_word = words[i].split("");
                    if(coords[0].y+test_word.length-1 >= 0 && coords[0].y+test_word.length-1 < tamanho){
                        if(coords[0].y+test_word.length-1 == coords[1].y && coords[0].x+test_word.length-1 == coords[1].x){
                            for(let j=0;j<test_word.length;j++){
                                if(test_word[j] != letter_array[coords[0].y+j][coords[0].x+j]){
                                    flag = 1;
                                }
                                if(j+1==test_word.length && flag == 0){
                                    correct_word = words[i];
                                    for(let k=0;k<test_word.length;k++){
                                        element = document.getElementById((coords[0].x+k)+" "+(coords[0].y+k));
                                        element.className = "grid-item "+(coords[0].x+k)+" "+(coords[0].y+k)+ " found";
                                    }
                                }
                            }
                        }
                    }
                }
                else if(coords[0].x > coords[1].x && coords[0].y > coords[1].y){
                    //diagonal invertida esq-dir
                    test_word = words[i].split("");
                    test_word.reverse();
                    if(coords[0].y-test_word.length+1 >= 0 && coords[0].y-test_word.length+1 <= tamanho){
                        if(coords[0].y-test_word.length+1 == coords[1].y && coords[0].x-test_word.length+1 == coords[1].x){
                            for(let j=test_word.length-1;j>=0;j--){
                                if(test_word[j] != letter_array[coords[1].y+j][coords[1].x+j]){
                                    flag = 1;
                                }
                                if(j==0 && flag == 0){
                                    correct_word = words[i];
                                    for(let k=0;k<test_word.length;k++){
                                        element = document.getElementById((coords[1].x+k)+" "+(coords[1].y+k));
                                        element.className = "grid-item "+(coords[1].x+k)+" "+(coords[1].y+k)+ " found";
                                    }
                                }
                            }
                        }
                    }
                }
                else if(coords[0].x > coords[1].x && coords[0].y < coords[1].y){
                    //diagonal normal dir-esq
                    test_word = words[i].split("");
                    if(coords[0].y+test_word.length-1 >= 0 && coords[0].y+test_word.length-1 < tamanho){
                        if(coords[0].y+test_word.length-1 == coords[1].y && coords[0].x-test_word.length+1 == coords[1].x){
                            for(let j=0;j<test_word.length;j++){
                                if(test_word[j] != letter_array[coords[0].y+j][coords[0].x-j]){
                                    flag = 1;
                                }
                                if(j+1==test_word.length && flag == 0){
                                    correct_word = words[i];
                                    for(let k=0;k<test_word.length;k++){
                                        element = document.getElementById((coords[0].x-k)+" "+(coords[0].y+k));
                                        element.className = "grid-item "+(coords[0].x-k)+" "+(coords[0].y+k)+ " found";
                                    }
                                }
                            }
                        }
                    }
                }
                else if(coords[0].x < coords[1].x && coords[0].y > coords[1].y){
                    //diagonal invertida dir-esq
                    test_word = words[i].split("");
                    if(coords[0].y-test_word.length+1 >= 0 && coords[0].y-test_word.length+1 <= tamanho){
                        if(coords[0].y-test_word.length+1 == coords[1].y && coords[0].x+test_word.length-1 == coords[1].x){
                            for(let j=0;j<test_word.length;j++){
                                if(test_word[j] != letter_array[coords[0].y-j][coords[0].x+j]){
                                    flag = 1;
                                }
                                if(j+1==test_word.length && flag == 0){
                                    correct_word = words[i];
                                    for(let k=0;k<test_word.length;k++){
                                        element = document.getElementById((coords[0].x+k)+" "+(coords[0].y-k));
                                        element.className = "grid-item "+(coords[0].x+k)+" "+(coords[0].y-k)+ " found";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            flag = 0;
        }
    }
    coords.length = 0;
    return correct_word;
}

export default checksWord;