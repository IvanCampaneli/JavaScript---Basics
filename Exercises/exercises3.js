/*
  <script>
    
    const num1 = prompt('Digite seu número:');

    document.body.innerHTML += `Raiz quadrada: ${num1 ** 0.5} <br />`;
    document.body.innerHTML += `${num1.isInteger(num1)} <br />`;
    document.body.innerHTML += `É NaN: ${Number.isNaN(num1)} <br />`;
    document.body.innerHTML += `Arredondando para baixo: ${num2= Math.floor(num1)} <br />`;
    document.body.innerHTML += `Arredondando para cima: ${num2= Math.ceil(num1)} <br />`;
    document.body.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)} <br />`;
    
 </script>
*/

const numero = Number(prompt('Digite um número:'));
const numeroTítulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTítulo.innerHTML = numero;

texto.innerHTML += ``;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${(numero.toFixed(2))}</p>`;

