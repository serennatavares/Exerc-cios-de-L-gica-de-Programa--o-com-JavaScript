function balançoFinanceiro() {
let ganhoAnual = 0;
let gastoAnual = 0;

for (let mes = 1; mes <= 12; mes++) {
    let ganho = parseFloat(prompt("Digite o ganho bruto do mês:"));
    let gasto = parseFloat(prompt("Digite o gasto do mês:"));

    ganhoAnual += ganho;
    gastoAnual += gasto;
}

let saldo = ganhoAnual - gastoAnual;

alert("Ganho bruto anual: " + ganhoAnual);
alert("Gasto anual: " + gastoAnual);
alert("Saldo financeiro anual: " + saldo);

if (saldo > 0) {
    alert("A empresa teve lucro");
} else if (saldo < 0) {
    alert("A empresa teve prejuízo");
} 
}
