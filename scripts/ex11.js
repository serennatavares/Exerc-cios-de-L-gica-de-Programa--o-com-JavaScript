function folhaPagamentoVariavel() {
    let salarioBruto = parseInt(prompt("Qual o salário bruto?"));
    let valorDesconto = 0;

    alert("O salário bruto é: " + salarioBruto);

    if (salarioBruto < 1000) {
        valorDesconto = salarioBruto * 8 / 100
        alert("A taxa de desconto é de 8%");
    } else if (salarioBruto > 1000 && salarioBruto < 1501) {
        valorDesconto = salarioBruto * 8.5 / 100
        alert("A taxa de desconto é de 8,5%");
    } else if (salarioBruto > 1500) {
        valorDesconto = salarioBruto * 9 / 100
        alert("A taxa de desconto é de 9%");
    }
    let salarioLiquido = salarioBruto - valorDesconto;
    alert("O valor do desconto é: " + valorDesconto);
    alert("O salário líquido é: " + salarioLiquido);

}
