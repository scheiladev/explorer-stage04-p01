let number1 = Number(prompt('Digite um número qualquer:'));
let number2 = Number(prompt('Digite outro número qualquer:'));

let soma = number1 + number2;
alert(`A soma dos dois números é: ${soma}`);

let subtracao = number1 - number2;
alert(`A subtração dos dois números é: ${subtracao}`);

let multiplicacao = number1 * number2;
alert(`A multiplicação dos dois números é: ${multiplicacao}`);

let divisao = number1 / number2;
alert(`A divisão dos dois números é: ${divisao}`);

let resto = number1 % number2;
alert(`O resto da divisão dos dois números é: ${resto}`);

if (soma%2 === 0) {
  alert(`A soma dos dois números é par! ${soma}`)
} else {
  alert(`A soma dos dois números é ímpar! ${soma}`)
}

if (number1 === number2) {
  alert('Os dois números são iguais!')
} else {
  alert('Os dois números são diferentes!')
}