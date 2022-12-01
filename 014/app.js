function Idade() {
    let dia = document.getElementById('data').value
    const mes = new Date(dia);

    document.getElementById('mostra').innerHTML = mes
}