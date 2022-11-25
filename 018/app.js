function Positivo(){
    let n1 = document.getElementById('n1').value
    if(parseInt(n1) > 0){
        document.getElementById('resposta').innerHTML = "O número é Positivo"
    }else if(parseInt(n1) == 0){
        document.getElementById('resposta').innerHTML = "O número é Neutro"
    }
    else{
        document.getElementById('resposta').innerHTML = "O número é Negativo"
    }
}