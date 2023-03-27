let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4

//console.log(num1 + num2);
//console.log(num1.toString() + num2); //<-- num1 passa a se comportar como string e o valor é concatenado
//num1 = num1.toString(); //<-- num1 passou a se comportar como string
//console.log(num1.toString(2)); <-- muda para apresentação binária
//console.log(num1.toFixed(2)); <-- para arredondar (aqui se insere o número de casas decimais)
//console.log(num1.isInteger(ex: num1));// verifica se o num é inteiro
//console.log(Number.isNaN(nomeDaVariavel) // verifica se é NaN

//num1 = Number(num1.toFixed(2)); <-- para deixar o número inteiro


//Outra forma de resolver:

//num1 - ((num1 * 100) + (num2 * 100)) / 100; // 0.8
//num1 - ((num1 * 100) + (num2 * 100)) / 100; // 0.9
//num1 - ((num1 * 100) + (num2 * 100)) / 100; // 1.0
