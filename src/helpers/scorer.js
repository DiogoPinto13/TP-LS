function Scorer(go){
    var score = document.getElementById("points").innerHTML;
    let setScore = document.getElementById("points");
    let totalpoint = document.getElementById("totalpoint");
    var time = document.getElementById("gameTime").innerHTML;

    if(go==0){
        time = parseInt(time);
        score = parseInt(score);
        score = score+(10*time);
        setScore.innerHTML = score;
    }
    if(go==2){
        totalpoint.textContent = score;
    }   
    if(go==1){
        setScore.innerHTML = 0;
        totalpoint.textContent = 0;
    }
}

export default Scorer;