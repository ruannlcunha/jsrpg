import { useEffect } from "react";
import { HUDAcoes, StatusHUD } from "../../";
import "./batalha-hud.style.css";
import { useIniciarTurno } from "../../../../hook/batalha/iniciar-turno/use-iniciar-turno.hook";

export function BatalhaHUD({ personagens, personagemAtivo, turno, animacoes, functions }) {
  const { iniciarTurno } = useIniciarTurno();

  useEffect(() => {
    personagemAtivo && animacoes.iniciativaTerminou
    ? iniciarTurno(personagemAtivo, personagens, turno, functions) : null;

    if(animacoes.hudAtivo) {
      functions.setAnimacoes((old) => {return { ...old, hudAtivo: false };});
      setTimeout(()=>{
        functions.setAnimacoes((old) => {return { ...old, hudAtivo: true };});
      },100)
    }
    
  }, [personagemAtivo, animacoes.iniciativaTerminou]);

  function handleCancelarAcao() {
    functions.setAcaoAtiva({ personagem: null, evento: null, alvos: [] });
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false, hudAtivo: true };
    });
  }

  function renderHud() {
    if (animacoes.hudAtivo) {
      return (
        <div
          className="batalha-hud"
          style={
            personagemAtivo.isInimigo
              ? {
                  flexDirection: "row-reverse",
                }
              : null
          }
        >
          <StatusHUD personagem={personagemAtivo} />
          <HUDAcoes personagem={personagemAtivo}  personagens={personagens} functions={functions} />
        </div>
      );
    }

    if (animacoes.escolhendoAlvo) {
      return (
        <>
          <header className="escolhendo-alvo">Escolha um alvo</header>
          <footer className="cancelar-acao" onClick={handleCancelarAcao}>
            Cancelar
          </footer>
        </>
      );
    }
    return null;
  }

  return renderHud();
}
