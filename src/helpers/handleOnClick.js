import checksWord from "./checksWord";
import { contador } from "../constants";

function handleOnClick(x, y, words, foundWords, letter_array, tamanho){
    let word;
    if(contador.length != 2){
        contador.push({x, y});
    }
    if(contador.length == 2){
        if(contador[0] == contador[1]){
            contador.length = 0;
        }
        else{
            word = checksWord(words, contador, letter_array, foundWords, tamanho);
            if(word != ""){
                foundWords(word);
            }
            contador.length = 0;
        }
    }
}

export default handleOnClick;