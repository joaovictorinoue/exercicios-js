function Operacao(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value

    document.getElementById('conta').innerHTML = parseFloat(valor1) + parseFloat(valor2)
    document.getElementById('conta1').innerHTML = parseFloat(valor1) - parseFloat(valor2)
    document.getElementById('conta2').innerHTML = parseFloat(valor1) * parseFloat(valor2)
    document.getElementById('conta3').innerHTML = parseFloat(valor1) / parseFloat(valor2)
}
