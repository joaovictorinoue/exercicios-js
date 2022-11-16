function Saudacao(){
    let nome =  document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value

    document.getElementById('ola').innerHTML = 'Olá ' + nome + ' ' + sobrenome
}