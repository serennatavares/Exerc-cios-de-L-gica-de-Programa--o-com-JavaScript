function ordenaçaoNumeros() {
    let n1 = parseInt(prompt("Digite o primeiro número:"));
    let n2 = parseInt(prompt("Digite o segundo número:"));

    let resultado = n1 - n2
     if (resultado > 0) {
        console.log(n1);
        console.log(n2);
        alert(n1);
        alert(n2);
    } else if (resultado < 0) {
        console.log(n2);
        console.log(n1);
        alert(n2);
        alert(n1);
    }
}