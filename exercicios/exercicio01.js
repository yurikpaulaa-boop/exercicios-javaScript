const numero = Number(prompt("Digite um número:"));
const numeroTitulo =document.getElementById("numero-titulo");
const raizQuadrada = document.getElementById("texto-paragrafo1");
const verificarInteiro = document.getElementById("texto-paragrafo2");
const arredondandoParaCima = document.getElementById("texto-paragrafo3");
const arredondandoParaBaixo = document.getElementById("texto-paragrafo4");
const numeroComDuasCasasDecimais = document.getElementById("texto-paragrafo5");





numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>A raiz quadrada do seu número é: ${Math.sqrt(numero)}</p>`;
verificarInteiro.innerHTML = `<p>o numero ${numero} é inteiro ? ${Number.isInteger(numero)}</p>`;
arredondandoParaCima.innerHTML = `<p>Seu numero arredondado para CIMA é ${Math.ceil(numero)}</p>`;
arredondandoParaBaixo.innerHTML = `<p>Seu numero arredondadno para BAIXO é ${Math.floor(numero)}</p>`;
numeroTitulo.innerHTML += `<p>O Numero com duas casas decimais é: ${numero.toFixed(2)}</p>`;
numeroComDuasCasasDecimais = `<p>O Numero com duas casas decimais é: ${numero.toFixed(2)}</p>`;

