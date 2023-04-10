/*

Array: coleção de coisas
[ array ]
string são indexadas pelos seus valores, já os arrays são por elementos
nomeDaVariavel.push = adiciona ao final
nomeDaVariavel.unshift = adiciona ao começo
nomeDaVariavel.pop = remove o elemento do final do array --> com essa função podemos ver qual elemento por removido |
pode ser feito fatiamento atráves do slice. ex: console.log(nomeDaVariavel.slice(0, 2));

EX:
                  0        1       2
const alunos = [`Luiz`, `Maria`, `João`];

const removido = alunos.pop();

console.log(removido);
console.log(alunos);

é possível também deletar um elemento em específico:

delete alunos[1];
console.log(alunos[1]);

(isso faria com que a "maria" da lista fosse excluída).

Para verificar se o item trabalhado é de fato um array:

console.log(nomeDaVariavel instanceof Array);

--> Array pode ser qualquer coisa: número, função, variável ou qualquer outro tipo de dados.
--> são contados com indíce, mas diferente das strings, não são contados por letras e sim por `palavras`, |

*/
