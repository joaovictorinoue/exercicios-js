function Idade(){
    let data = document.getElementById('data').value
    data = new Date(date);

    document.getElementById('mostra').innerHTML = document.write ("Hoje é " + date.getDay() + ", " + date.getDate() + " de " + date.getMonth() + " de " + date.getFullYear() )
}