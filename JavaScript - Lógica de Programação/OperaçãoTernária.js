// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;

/*
if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário normal');
}
*/

// serve para otimizar a linha de codigo quando é simples de sim ou não ou com apenas um if e um else
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const userColor = 'Pink';
const standardColor = userColor || 'Black';

console.log(nivelUsuario, standardColor);

