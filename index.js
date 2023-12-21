const readline = require('readline-sync');

// Função para calcular o saldo de ranqueadas e determinar o nível
function calcularNivelRanqueadas(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldo, nivel };
}

// Solicitar entrada de dados do usuário
const vitorias = parseInt(readline.question('Digite a quantidade de vitórias: '));
const derrotas = parseInt(readline.question('Digite a quantidade de derrotas: '));

// Verificar se a entrada é válida
if (isNaN(vitorias) || isNaN(derrotas)) {
  console.log('Por favor, insira números válidos para as vitórias e derrotas.');
} else {
  // Calcular o nível e exibir o resultado
  const resultado = calcularNivelRanqueadas(vitorias, derrotas);
  console.log(`O Herói tem um saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}.`);
}