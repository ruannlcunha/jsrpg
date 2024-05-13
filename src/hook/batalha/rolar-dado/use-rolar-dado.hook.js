import { getRandomInt } from "../../../utils";

export function useRolarDado() {
  function rolarDado(tipo, modificador) {
    const resultadoDado = getRandomInt(1, tipo);
    const resultadoTotal = resultadoDado + modificador;

    return { resultadoDado, resultadoTotal };
  }

  return { rolarDado };
}
