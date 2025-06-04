// let num1 = parseFloat("Digite o primiero numero: "); 
// let num2 = parseFloat("Digite o segundo numero: ");

// if (num1 > num2) {
//     alert(`O primiero numero digitado (${num1}) é maior que o segundo (${num2})`)
// } else if (num2 > num1) {
//     alert(`O segundo numero digitado (${num2}) é maior que o primeiro (${num1})`)
// } else {
//     alert("os números são iguais");
// }
let

while (true) {
    let peso = parseFloat(prompt("Digite seu peso:"));
    let altura = parseFloat(prompt("Digite sua altura:"));
 
    let imc = peso / (altura * altura);
 
    if (imc <= 18.5){
        alert(`IMC: ${imc.toFixed(1)} - Está Abaixo do peso`);
    } else if (imc <= 24.9) {
        alert(`IMC: ${imc.toFixed(1)} - Está no Peso ideal`);
    } else if (imc <= 29.9) {
        alert(`IMC: ${imc.toFixed(1)} - Está Levemente acima do peso`);
    } else if (imc <= 34.9) {
        alert(`IMC: ${imc.toFixed(1)} - Está com Obesidade grau I`);
    } else if (imc <= 39.9) {
        alert(`IMC: ${imc.toFixed(1)} - Está  com Obesidade grau II (severa)`);
    } else {
        alert(`IMC: ${imc.toFixed(1)} - Está com Obesidade grau III (mórbida)`);
    }
}
