function duasVariaveis() {

    let n1 = parseInt(prompt("Digite o primeiro número:"));
    let n2 = parseInt(prompt("Digite o segundo número:"));

    let diferenca = n1 - n2;

    let dobroTriplo = (2 * n1) + (3 * n2);

    let multiplicacao = n1 * n2;

    alert("Diferença: " + diferenca);
    alert("Dobro da primeira + triplo da segunda: " + dobroTriplo);
    alert("Multiplicação: " + multiplicacao);
}