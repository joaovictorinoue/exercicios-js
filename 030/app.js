function Sequencia(){
    let idade = document.getElementById('idade').value

    if(idade >= 18){
        document.getElementById('mostra').innerHTML = "Foi Permitida a Sua Entrada"
    }else{
        document.getElementById('mostra').innerHTML = "A Entrada Não é Permitida Para Menores De 18"
    }
}