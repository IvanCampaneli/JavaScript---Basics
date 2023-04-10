/*

//Strings são indexadas (cara caracter de um índice) ex: "Olá" = O:1, L:2, Á:3
// índice começa do 0 (0123456789.....)

//let umaString = 'Um texto';

//console.log(umaString[4]);
//                   [4] <- busca o índice de número 4 nesse exemplo, ou seja, letra "e"

//console.log(umaString + ' em um lindo dia');
//console.log(umaString.concat(' em um lindo dia'));

//console.log(`${umaString} em um lindo dia`); // <-- melhor método

//console.log(umaString.indexOf('texto')); 
//indexOf serve para informar onde começa o índice da palavra desejada, no exemplo "texto" = índice 3
//lastIndexOf (começa de trás para frente)

let outraString = "O rato roeu a roupa do rei de roma.";

console.log(outraString.replace(/r/g, '#'));
//replace pode substituir uma palavra por outra, nesse ex vai substituir (/r/ <- o primeiro "r" do texto por '#'  // (/r/g <-- o g no final da expressão faz com que selecione todos os "r" do texto))

console.log(outraString.match(/[a-z]/g/));
//match /[a-z/g/ faz com que o motor do js mostre todas as letrar utilizadas no texto dentro de a-z]

console.log(outraString.search(/x/)); 
//parecido com indexOf, porém, aceita expressões regulares

console.log(outraString.length); //(conta os índices contando os espaços)

console.log(outraString.slice(1, 4)) // ou console.log(outraString.slice(-1, 4)) //serve para fatiar o código de acordo com as partes dos indices desejadas (no negativa corre de trás para frente)

console.log(outraString.split(' ')); // ou console.log(outraString.split(' ', 4)); // vai separar as palavras do texto por indice (' ', number)<-- o número seleciona os índeces que quer selecionar

console.log(outraString.toUpperCase();// deixa o texto inteiro maíusculo ou .toLowerCase()); em minúsculo

*/
