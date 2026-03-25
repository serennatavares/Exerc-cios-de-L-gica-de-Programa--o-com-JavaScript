function folhaPagamento() {
    let nome = (prompt("Qual o nome do funcionário?"));
    let salarioBruto = parseInt(prompt("Qual o salário bruto?"));

    let valorDesconto = salarioBruto * 8/100
    let salarioLiquido = salarioBruto - valorDesconto

    alert("O nome do funcionário é: "+ nome)
    alert("O salário bruto é: "+ salarioBruto)
    alert("O valor do desconto é: "+ valorDesconto)
    alert("O salário líquido é: "+ salarioLiquido)

}