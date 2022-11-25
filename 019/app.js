function VerificarPeriodo(){
    let periodo = document.getElementById('periodo').value

    if(periodo == "d"){
        document.getElementById('mostrar').innerHTML = "Dia"
    }
    else if(periodo == "n"){
        document.getElementById('mostrar').innerHTML = "Noite"
    }
    else{
        document.getElementById('mostrar').innerHTML = "Período Inválido"
    }

    document.getElementById('periodo').value = ''
}