import { useSound } from "../../audio/sound/use-sound.hook";
import { useRolarDado } from "../rolar-dado/use-rolar-dado.hook";

export function useRolarIniciativa() {
  const { rolarDado } = useRolarDado();
  const { playDado } = useSound()

  function rolarIniciativa(personagens) {
    playDado()
    const personagensNovos = [];

    personagens.map((personagem) => {
      const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
      const {total} = rolarDado(1, 20, [modificadorAgilidade]);
      personagensNovos.push({
        resultadoIniciativa: total,
        ...personagem,
      });
    });

    const personagensOrdenados = personagensNovos.sort(function (a, b) {
      return b.resultadoIniciativa - a.resultadoIniciativa;
    });

    return personagensOrdenados;
  }

  return { rolarIniciativa };
}
