
function personagemStyle(personagem, estaAtivo, isAlvo, escolhendoAlvo) {
    return {
        animation: `${
          estaAtivo && !escolhendoAlvo && !personagem.isMorto || isAlvo
            ? `battle-${
                personagem.isInimigo ? "inimigo" : "personagem"
              } 1s alternate infinite ease-in-out,
              bright-${
                personagem.isInimigo ? "inimigo" : isAlvo ? "aliado" : "personagem"
              } 0.8s alternate infinite ease-in-out`
            : ""
        }`,
        filter: `${personagem.isMorto ? "grayscale(100%)" : null}`,
      }
}

export { personagemStyle }