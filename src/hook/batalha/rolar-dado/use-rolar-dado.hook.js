import { getRandomInt } from "../../../utils";

export function useRolarDado() {

  function rolarDado(quantidade, tipo, modificadores) {
    const dados = []

    for(let i=0;i<quantidade;i++) {
      const resultadoDado = getRandomInt(1, tipo);
      dados.push({resultado: resultadoDado, tipo: `d${tipo}`})
    }
    
    const resultadoTotalDados = dados.reduce((acc, obj) => acc + obj.resultado, 0);
    
    const resultadoTotalModificadores = modificadores ?
    modificadores.reduce((acc, obj) => acc + obj.valor, 0) : 0

    const total = resultadoTotalDados + resultadoTotalModificadores
    
    return {dados, total};
  }

  return { rolarDado };
}
