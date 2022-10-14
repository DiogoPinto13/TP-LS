function crossWord(number){
    let element = document.getElementById("word"+number);
    element.className = "crossed";
    alert("Palavra encontrada!");
}

export default crossWord;