function Metros(){
    let value1 = document.getElementById('n1').value

    let metros = parseFloat(value1)/100

    document.getElementById('conversao'). innerHTML = metros + ' Metros'
}