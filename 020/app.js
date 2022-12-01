function Vogal(){
    let letra = document.getElementById('letra').value

    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        document.getElementById('frio').innerHTML = 'A letra digitada é uma Vogal'
    }else{
        document.getElementById('frio').innerHTML = 'A letra digitada é uma Consoante'
    }

    document.getElementById('letra').value = ''
}