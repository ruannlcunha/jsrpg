import { ICONS } from "../../../../constants/images/icons.constant";
import { calcularPorcentagem } from "../../../../utils";
import "./personagem.style.css";
import { personagemStyle } from "./personagem-styles.style"
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

  const isAlvo = acaoAtiva.alvos.some(item=> item.idCombate===personagem.idCombate)

  const estaAtivo =
    idAtivo === personagem.idCombate && idAtivo && animacoes.iniciativaTerminou
      ? true
      : false;
  const [estaEscolhido, setEstaEscolhido] = useState(false);

  useEffect(() => {
    animacoes.escolhendoAlvo ? null : setEstaEscolhido(false);
  }, [animacoes]);

  function hoverEscolherAlvo() {
    if (animacoes.escolhendoAlvo && isAlvo) {
      estaEscolhido ? setEstaEscolhido(false) : setEstaEscolhido(true);
    }
  }

  function handleEscolherAlvo() {
    acaoAtiva.evento(acaoAtiva.personagem, personagem, functions);
  }

  return (
    <div
      className={estaEscolhido ? "personagem-escolhido" : null}
      onClick={isAlvo ? handleEscolherAlvo : null}
      onMouseEnter={hoverEscolherAlvo}
      onMouseLeave={hoverEscolherAlvo}
    >
      <img
        src={
          estaEscolhido ? ICONS.ESCOLHER_BAIXO :
          isAlvo && personagem.isInimigo ? ICONS.CRISTAL_VERMELHO :
          isAlvo && !personagem.isInimigo ? ICONS.CRISTAL_VERDE :
          estaAtivo && personagem.isInimigo ? ICONS.SETA_ATIVO_INIMIGO :
          estaAtivo && !animacoes.escolhendoAlvo ? ICONS.SETA_ATIVO : ICONS.QUADRADO_VAZIO
          }
        alt="Seta apontada para baixo"
        className="icone-ativo"
      />

      <img
        src={personagem.sprite}
        alt="Sprite do personagem"
        style={personagemStyle(personagem, estaAtivo, isAlvo, animacoes.escolhendoAlvo)}
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
