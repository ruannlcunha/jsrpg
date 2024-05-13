import { getGifDuration } from "../../../utils";
import { usePularTurno } from "../../batalha";

export function useAcoesBase() {
  const { pularTurno } = usePularTurno();

  function _matarPersonagem(alvo) {
    return { ...alvo, isMorto: true };
  }

  function _alterarPersonagem(setPersonagens, novoPersonagem) {
    setPersonagens((old) => {
      return old.map((personagem) => {
        if (personagem.idCombate === novoPersonagem.idCombate) {
          if (novoPersonagem.pvAtual < 1) {
            return _matarPersonagem(novoPersonagem);
          }
          return novoPersonagem;
        }
        return personagem;
      });
    });
  }

  async function iniciarEfeito(alvo, functions, effect) {
    const duracao = await getGifDuration(effect);

    const novoAlvo = {
      ...alvo,
      effect: { asset: effect, isAtivo: true },
    };
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return duracao;
  }

  function causarDano(alvo, dano, functions) {
    let novaVida = Number(alvo.pvAtual - dano.resultadoTotal);
    novaVida < 0 ? (novaVida = 0) : null;

    const novoAlvo = {
      ...alvo,
      pvAtual: novaVida,
    };
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return novoAlvo;
  }

  function gastarMana(alvo, custo, functions) {
    let novaMana = Number(alvo.pmAtual - custo);
    if (novaMana < 0) {
      throw { message: "Personagem não tem mana suficiente." };
    }

    const novoAlvo = {
      ...alvo,
      pmAtual: novaMana,
    };
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return novoAlvo;
  }

  function restaurarVida(alvo, cura, functions) {
    let novaVida = Number(alvo.pvAtual + cura.resultadoTotal);
    novaVida > alvo.pvTotal ? (novaVida = alvo.pvTotal) : null;

    if (alvo.isMorto) {
      throw { message: "Personagens mortos não podem ser curados." };
    }

    const novoAlvo = {
      ...alvo,
      pvAtual: novaVida,
    };
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return novoAlvo;
  }

  async function finalizarAcao(functions, novoAlvo, duracao) {
    setTimeout(() => {
      functions.setAcaoAtiva({ personagem: null, evento: null });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
      pularTurno(functions.setTurno);
      _alterarPersonagem(functions.setPersonagens, {
        ...novoAlvo,
        effect: { asset: null, isAtivo: false },
      });
    }, await duracao);
  }

  return {
    iniciarEfeito,
    causarDano,
    restaurarVida,
    finalizarAcao,
    gastarMana,
  };
}
