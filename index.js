const readline = require('readline-sync');

// Função para calcular o saldo de ranqueadas e determinar o nível
function calcularNivelRanqueadas(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  let nivel;

  switch (true) {
    case vitorias < 10:
      nivel = "Ferro";
      break;
    case vitorias >= 11 && vitorias <= 20:
      nivel = "Bronze";
      break;
    case vitorias >= 21 && vitorias <= 50:
      nivel = "Prata";
      break;
    case vitorias >= 51 && vitorias <= 80:
      nivel = "Ouro";
      break;
    case vitorias >= 81 && vitorias <= 90:
      nivel = "Diamante";
      break;
    case vitorias >= 91 && vitorias <= 100:
      nivel = "Lendário";
      break;
    default:
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