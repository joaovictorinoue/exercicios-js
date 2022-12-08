function Sequencia(){
    let n1 = document.getElementById('n1').value

        for(var count=1; count<=10 ; count++)
         document.getElementById('mostra').innerHTML += (n1 +" x "+count+" = " + (n1*count) + "<br />");


    document.getElementById('n1').value = ''
}
function limpar(){
    document.getElementById('mostra').innerHTML = ''
}