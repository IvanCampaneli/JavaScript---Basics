//const tresHoras = 60 * 60 * 3 * 1000
//const data = new Date(0 + tresHoras) //01/01/1970 Timestamp unix
//0-11 (0- janeiro | 11 dezembro) (0- domingo | 6- sabado)
//const data = new Date(2023, 3, 5, 13, 17, 999); //ano, mês, dia, horas, minutos, milésimos de segundos 
/*
const data = new Date(1680712214411); //toString | 1680712214411 valor recebido de Date.now
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
console.log(data.toDateString());
//console.log(Date.now());
*/

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`; // se o num for maior ou igual a 10 retorna(?) o número, caso o contrário(:) adiciona um `0 na frente do ${num}`;
}

function formataData(data) {
  //console.log(data);
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);