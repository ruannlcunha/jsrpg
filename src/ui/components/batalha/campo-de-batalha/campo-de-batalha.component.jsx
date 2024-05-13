import { Personagem } from "../personagem/personagem.component";
import "./campo-de-batalha.style.css";

export function CampoDeBatalha({
  aliados,
  inimigos,
  idAtivo,
  zoom,
  animacoes,
  acaoAtiva,
  functions,
}) {
  const aliadosOrdenados = aliados.sort(function (a, b) {
    return a.posicaoEmCampo - b.posicaoEmCampo;
  });

  const inimigosOrdenados = inimigos.sort(function (a, b) {
    return a.posicaoEmCampo - b.posicaoEmCampo;
  });

  function renderPersonagem(personagem) {
    return (
      <Personagem
        iniciativaTerminou={animacoes.iniciativaTerminou}
        idAtivo={idAtivo}
        personagem={personagem}
        animacoes={animacoes}
        acaoAtiva={acaoAtiva}
        functions={functions}
      />
    );
  }

  return aliados.length > 1 && inimigos.length > 1 ? (
    <div
      className="campo-de-batalha"
      style={{
        width: `${zoom}%`,
        height: `${zoom}%`,
        border: `${zoom < 100 ? "solid 5px var(--black)" : ""}`,
        marginBottom: `${zoom < 75 ? "5rem" : ""}`,
      }}
    >
      <section>
        <div className="inimigos">
          <section>{renderPersonagem(inimigosOrdenados[0])}</section>
          <section>
            {renderPersonagem(inimigosOrdenados[1])}
            {renderPersonagem(inimigosOrdenados[2])}
          </section>
          <section>{renderPersonagem(inimigosOrdenados[3])}</section>
        </div>

        <div className="personagens">
          <section>{renderPersonagem(aliadosOrdenados[0])}</section>
          <section>
            {renderPersonagem(aliadosOrdenados[1])}
            {renderPersonagem(aliadosOrdenados[2])}
          </section>
          <section>{renderPersonagem(aliadosOrdenados[3])}</section>
        </div>
      </section>
    </div>
  ) : null;
}
