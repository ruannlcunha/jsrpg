import { useRolarDado } from "../../batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";

export function useAtaques() {
  const { rolarDado } = useRolarDado();
  const { iniciarEfeito, causarDano, finalizarAcao } = useAcoesBase();

  function soco(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const dano = rolarDado(3, personagem.atributos.forca);
    functions.ativarBannerRolagem(dano.resultadoTotal, 2, personagem.corTema);

    setTimeout(() => {
      const novoAlvo = causarDano(alvo, dano, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SOCO_EFFECT, ACOES_AUDIO.SOCO);

      finalizarAcao(functions, novoAlvo, duracao);
    }, (BANNER_DURACAO.ROLAGEM)+100);
  }

  return { soco };
}
