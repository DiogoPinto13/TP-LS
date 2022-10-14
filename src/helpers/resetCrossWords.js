function resetCrossWords(num_words, foundWords, alreadyFoundWords, score){
    let element;
    for(let i=1;i<=num_words;i++){
        element = document.getElementById("word"+i);
        if(element){
            element.className = "";
        };
    }
    if(foundWords){
        foundWords.length = 0;
    }
    if(alreadyFoundWords){
        alreadyFoundWords.length = 0;
    }
}

export default resetCrossWords;