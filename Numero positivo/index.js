let numero = parseFloat(prompt("Insira o seu numero"));

if (isNaN(numero)) {
    alert('Numero invalido');
}

if (!isNaN(numero)) {

    if (numero > 0) { //Se o seu numero for maior que 0 ele é positivo e se ele for menor que 0 ele é negativo
        alert("O seu numero é positivo");
    }
}