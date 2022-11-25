function Idade(){
    let idade = document.getElementById('idade').value
    if(idade <= 17){
        document.getElementById('menor').innerHTML = 'Você é menor de idade'
    }else{
        document.getElementById('menor').innerHTML = 'Você é maior de idade'
    }
}