import { ICONS } from "../../../../constants/images/icons.constant";
import { calcularPorcentagem } from "../../../../utils";
import "./personagem.style.css";
import { useEffect, useState } from "react";

export function Personagem({
  personagem,
  idAtivo,
  animacoes,
  acaoAtiva,
  functions,
}) {
  const porcentagemVida = calcularPorcentagem(
    personagem.pvAtual,
    personagem.pvTotal
  );
  const estaAtivo =
    idAtivo === personagem.idCombate && idAtivo && animacoes.iniciativaTerminou
      ? true
      : false;
  const [estaEscolhido, setEstaEscolhido] = useState(false);
  const [spriteStyle, setSpriteStyle] = useState(null);

  useEffect(() => {
    animacoes.escolhendoAlvo ? null : setEstaEscolhido(false);
  }, [animacoes]);

  useEffect(() => {
    setSpriteStyle({
      animation: `${
        estaAtivo && !personagem.isMorto
          ? `battle-${
              personagem.isInimigo ? "inimigo" : "personagem"
            } 1s alternate infinite ease-in-out,
            bright-${
              personagem.isInimigo ? "inimigo" : "personagem"
            } 0.8s alternate infinite ease-in-out`
          : ""
      }`,
      filter: `${personagem.isMorto ? "grayscale(100%)" : null}`,
    });
  }, [estaAtivo, personagem]);

  function hoverEscolher() {
    if (animacoes.escolhendoAlvo) {
      estaEscolhido ? setEstaEscolhido(false) : setEstaEscolhido(true);
    }
  }

  function handleEscolher() {
    acaoAtiva.evento(acaoAtiva.personagem, personagem, functions);
  }

  return (
    <div
      className={estaEscolhido ? "personagem-escolhido" : null}
      onClick={handleEscolher}
      onMouseEnter={hoverEscolher}
      onMouseLeave={hoverEscolher}
    >
      {estaAtivo || estaEscolhido ? (
        <img
          src={estaEscolhido ? ICONS.ESCOLHER_BAIXO : ICONS.SETA_ATIVO}
          alt="Seta apontada para baixo"
          className="seta-ativo"
        />
      ) : null}

      <img
        src={personagem.sprite}
        alt="Sprite do personagem"
        style={spriteStyle}
        className="sprite-personagem"
      />

      {personagem.effect.isAtivo ? (
        <img src={personagem.effect.asset} alt="" className="acao-effect" />
      ) : null}

      <section>
        <h1>{personagem.nome}</h1>
        <h2>Lv {personagem.level}</h2>

        <div
          className="batalha-sprite-vida"
          style={{
            background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`,
          }}
        ></div>
      </section>
    </div>
  );
}
