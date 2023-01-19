const tabelaExposicao = { // nível de ruído (dB(A)) x Tempo máximo diário permissível (Minutos)
  80: 1523.90,
  81: 1209.52,
  83: 960,
  84: 604.76,
  85: 480,
  86: 380.97,
  87: 302.38,
  88: 240,
  89: 190.48,
  90: 151.19,
  91: 120,
  92: 95.24,
  93: 75.59,
  94: 60,
  95: 47.62,
  96: 37.79,
  97: 30,
  98: 23.81,
  99: 18.89,
  100: 15,
  101: 11.90,
  102: 9.44,
  103: 7.50,
  104: 5.95,
  105: 4.72,
  106: 3.75,
  107: 2.97,
  108: 2.36,
  109: 1.87,
  110: 1.48,
  111: 1.18,
  112: 0.93,
  113: 0.74,
  114: 0.59,
  115: 0.46,
}


const calculaNen = (doseCalc, tempoAmostra, jornada) => {
  const nivelExposicao = 16.61 * Math.log10((doseCalc/100) * 480/tempoAmostra) + 85;
  
  const nivelNormalizado = nivelExposicao + 16.61 * Math.log10(((jornada * 60)/480));

  return nivelNormalizado.toFixed(1);
}

const calculaDose = (doseCalc, tempoAmostra, jornada) => {
  const doseMaxima = doseCalc * (jornada * 60) / tempoAmostra;
  if (doseCalc < doseMaxima) {
    return "Exposição abaixo do limite permitido"
  }
  return "Exposição acima do limite permitido, devem ser previstas ações para proteção do colaborador"
}

export {
  tabelaExposicao,
  calculaNen,
  calculaDose,
};
