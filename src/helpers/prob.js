function prob(){
    let flag = 0;
    if(probEvento(80) == 1){
        if(probEvento(50) == 1){
            if(probEvento(65) == 1){
                //horizontal normal
                flag = 1;
            }
            else{
                //horizontal invertido
                flag = 2;
            }
        }
        else{
            if(probEvento(65) == 1){
                //vertical normal
                flag = 3;
            }
            else{
                //vertical invertido
                flag = 4;
            }
        }
    }
    else{
        if(probEvento(50) == 1){
            if(probEvento(65)){
                //diagonal normal esq-dir
                flag = 5;
            }
            else{
                //diagonal invertido esq-dir
                flag = 6;
            }
        }
        else{
            if(probEvento(65) == 1){
                //diagonal normal dir-esq
                flag = 7;
            }
            else{
                //diagonal invertido dir-esq
                flag = 8;
            }
        }
    }
    return flag;
}

function probEvento(probabilidade){
    return probabilidade > (Math.floor(Math.random() * 100));
}

export default prob;