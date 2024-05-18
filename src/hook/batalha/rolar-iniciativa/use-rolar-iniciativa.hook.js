import { useSound } from "../../audio/sound/use-sound.hook";
import { useRolarDado } from "../rolar-dado/use-rolar-dado.hook";

export function useRolarIniciativa() {
  const { rolarDado } = useRolarDado();
  const { playDado } = useSound()

  function rolarIniciativa(personagens) {
    playDado()
    const personagensNovos = [];

    personagens.map((personagem, index) => {
      const rolagem = rolarDado(20, personagem.atributos.destreza);
      personagensNovos.push({
        resultadoIniciativa: rolagem.resultadoTotal,
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
