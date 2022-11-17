function Id(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let sexo = document.getElementById('sexo').value

    document.getElementById('cpf').innerHTML = nome + ' ' + altura/100 + 'Metros ' + sexo
    
}

