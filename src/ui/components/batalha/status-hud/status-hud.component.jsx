import "./status-hud.style.css";
import { calcularPorcentagem } from "../../../../utils";
import pixelTexture from "../../../../assets/img/textures/BANNER_TEXTURE.png";

export function StatusHUD({ personagem }) {
  const porcentagemVida = calcularPorcentagem(
    personagem.pvAtual,
    personagem.pvTotal
  );
  const porcentagemMana = calcularPorcentagem(
    personagem.pmAtual,
    personagem.pmTotal
  );

  return (
    <section
      className="hud-status"
      style={{
        alignItems: `${personagem.isInimigo ? "self-start" : ""}`,
        borderRadius: `${personagem.isInimigo ? "5px 0px 0px 0px" : ""}`,
        background: `url(${pixelTexture}) ${personagem.isInimigo ? "left" : "right"},
        linear-gradient(${personagem.isInimigo ? "to left" : "to right"}, 
        var(--${personagem.corTema}) 0%, var(--${personagem.corTema}) 90%, transparent 99%, transparent 100%)`
      }}
    >
      <img
        src={personagem.perfil}
        alt=""
        style={{
          animation: `${personagem.isInimigo ?"hud-perfil-inimigo 1s alternate infinite ease-in-out": ""}`,
          right: `${personagem.isInimigo ? 0 : ""}`,
          left: `${!personagem.isInimigo ? 0 : ""}`,
        }}
      />

      <header
        style={
          personagem.isInimigo
            ? { borderRadius: "0px 0px 0px 5px", flexDirection: "row" }
            : null
        }
      >
        <h1 style={personagem.isInimigo ? { marginLeft: "2rem" } : null}>
          {personagem.nome}
        </h1>
      </header>
      <section style={personagem.isInimigo ? { marginLeft: "2rem" } : null}>
        <h2>
          PV: {personagem.pvAtual}/{personagem.pvTotal}
        </h2>
        <div
          className="batalha-hud-barra"
          style={{
            background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`,
          }}
        ></div>

        <h2>
          PM: {personagem.pmAtual}/{personagem.pmTotal}
        </h2>
        <div
          className="batalha-hud-barra"
          style={{
            background: `linear-gradient(to right, var(--blue) ${porcentagemMana}%, var(--light-grey) 1%)`,
          }}
        ></div>
      </section>
    </section>
  );
}
