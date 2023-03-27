/*
Ivan Ranieri Campaneli Junior tem 28 anos, pesa 115 kg tem 1.94
tem de altura e seu IMC é de x
Ivan Campaneli nasceu em 1994
*/

const nome = 'Ivan';
const sobrenome = 'Ranieri Campaneli Junior';
const idade = 28;
const peso = 115;
const altura = 1.94;
let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`);