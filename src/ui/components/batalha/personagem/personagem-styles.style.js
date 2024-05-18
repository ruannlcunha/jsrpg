
function personagemStyle(personagem, estaAtivo, escolhendoAlvo) {
    return {
        animation: `${
          estaAtivo && !escolhendoAlvo && !personagem.isMorto
            ? `battle-${
                personagem.isInimigo ? "inimigo" : "personagem"
              } 1s alternate infinite ease-in-out,
              bright-${
                personagem.isInimigo ? "inimigo" : "personagem"
              } 0.8s alternate infinite ease-in-out`
            : ""
        }`,
        filter: `${personagem.isMorto ? "grayscale(100%)" : null}`,
      }
}

export { personagemStyle }