export function useInstanciarPersonagens() {
  function instanciarPersonagens(aliadosData, inimigosData) {
    const aliados = aliadosData.map((personagem, index) => {
      return {
        ...personagem,
        posicaoEmCampo: index + 1,
        idCombate: index + 1,
        ordemInicial: index + 1,
        isInimigo: false,
        isMorto: false,
        effect: { asset: null, isAtivo: true },
      };
    });

    const inimigos = inimigosData.map((personagem, index) => {
      return {
        ...personagem,
        posicaoEmCampo: index + 1,
        isInimigo: true,
        isMorto: false,
        effect: { asset: null, isAtivo: true },
      };
    });

    const personagens = [...aliados, ...inimigos].map((personagem, index) => {
      return {
        ...personagem,
        idCombate: index + 1,
        ordemInicial: index + 1,
      };
    });

    return personagens;
  }

  return { instanciarPersonagens };
}
