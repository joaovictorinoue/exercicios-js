function MaiorNumero(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    if(parseInt(n1) > parseInt(n2)){
        document.getElementById('resultado').innerHTML = "O maior número é: " + n1
    }else{
        document.getElementById('resultado').innerHTML = "O maior número é: " + n2
    }
}