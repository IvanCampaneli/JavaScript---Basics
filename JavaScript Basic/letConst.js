// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços com traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// >NÃO utilizar VAR< utilizar >>>LET<<<

/* 
exercises de variáveis onde tempo:

let varA = "A"; --> passe a ter valor de B
let varB = "B"; --> passe a ter valor de C
let varC = "C"; --> passe a ter valor de A

*/

let varA = "A";
let varB = "B";
let varC = "C";

/* Método antigo:

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

*/

// Novo método moderno do JS:

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);