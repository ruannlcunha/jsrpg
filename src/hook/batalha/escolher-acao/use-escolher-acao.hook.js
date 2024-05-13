export function useEscolherAcao() {
  function escolherAcao(personagem, evento, functions) {
    //Desativar HUD
    functions.setAnimacoes((old) => {
      return { ...old, hudAtivo: false };
    });

    //Setar evento a ocorrer
    functions.setAcaoAtiva((old) => {
      return { personagem: personagem, evento: evento };
    });

    //Escolher alvo
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: true };
    });

    //Esperar o alvo ser clicado e desencadear o evento
  }

  return { escolherAcao };
}
