function Maior(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = document.getElementById('n3').value

    if(n1 > n2 && n1 > n3){
        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n1
    }else if(n2 > n1 && n2 > n3){
        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n2
    }else{
        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n3
    }
}