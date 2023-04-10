/*

Função recebe um valor, pode executar uma ação e pode ou não retornar um valor.

Ex de função com retorno:

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));

//Não é possível alterar nada de dentro da função estando fora da função.
//Tudo abaixo de return não é executado.

É possível também já assumir os valores, por ex:

function soma(x = 1, y = 3) {
  const resultado = x + y;
  return resultado;
}

console.log(soma());

>>**resultaria em 4**<<

*/