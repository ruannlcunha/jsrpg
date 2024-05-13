import { useEffect, useState } from "react";
import "./turnos.style.css";

export function Turnos({ personagens, idAtivo, animacoes }) {
  const [personagensAtuais, setPersonagensAtuais] = useState(personagens);

  useEffect(() => {
    if (animacoes.iniciativaTerminou) {
      setPersonagensAtuais((item) => {
        const ordenados = personagens.sort(function (a, b) {
          return b.resultadoIniciativa - a.resultadoIniciativa;
        });
        return [...ordenados];
      });
    }
  }, [animacoes.iniciativaTerminou]);

  function renderDado(iniciativa) {
    return animacoes.isDadosAtivos ? (
      <div className="d20-turnos">{iniciativa}</div>
    ) : null;
  }

  function renderPerfilTurno(personagem, index) {
    const ativo =
      animacoes.iniciativaTerminou &&
      personagem.idCombate === idAtivo &&
      idAtivo;
    const novoPersonagem = personagens.find(
      (item) => item.idCombate === personagem.idCombate
    );

    const perfilStyle = {
      backgroundImage: `url(${novoPersonagem.perfil})`,
      filter: `${novoPersonagem.isMorto ? "grayscale(100%)" : null}`,
    };
    return (
      <div
        key={index}
        style={perfilStyle}
        className={ativo ? "turnos-ativo" : null}
      >
        {renderDado(novoPersonagem.resultadoIniciativa)}
      </div>
    );
  }

  return (
    <div className="turnos">
      {!animacoes.escolhendoAlvo ? (
        <>
          <header>Turnos</header>
          <section>
            <div className="turnos-ponta"></div>
            {personagensAtuais
              ? personagensAtuais.map((personagem, index) => {
                  return renderPerfilTurno(personagem, index);
                })
              : null}
            <div className="turnos-ponta"></div>
          </section>
        </>
      ) : null}
    </div>
  );
}
