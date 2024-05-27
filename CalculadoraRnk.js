// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularRank(vitorias, derrotas) {
  // Calcular saldo de vitórias
  const saldoVitorias = vitorias - derrotas;

  // Determinar o nível do jogador
  let nivel;
  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else if (vitorias >= 101) {
    nivel = 'Imortal';
  }

  // Mensagem final
  const mensagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
  return mensagem;
}

// Exemplo de uso da função
const vitorias = 55;
const derrotas = 20;
const resultado = calcularRank(vitorias, derrotas);
console.log(resultado);

