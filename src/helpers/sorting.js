function sorting(words){
    let temp;
    for(let i = 0; i < (words.length - 1);i++){
        if(words[i+1].length> words[i].length){
            temp = words[i+1];
            words[i+1] = words[i];
            words[i] = temp; 
        }
    }
    return words;
}
export default sorting;