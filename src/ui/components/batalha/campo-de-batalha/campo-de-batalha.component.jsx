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

  return (
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
          <section>
            {inimigosOrdenados.length>=4 ? renderPersonagem(inimigosOrdenados[3]):null}
          </section>
          <section>
            {inimigosOrdenados.length>=3 ? renderPersonagem(inimigosOrdenados[2]):null}
            {inimigosOrdenados.length>=2 ? renderPersonagem(inimigosOrdenados[1]):null}
          </section>
          <section>
            {renderPersonagem(inimigosOrdenados[0])}
          </section>
        </div>

        <div className="personagens">
          <section>{renderPersonagem(aliadosOrdenados[0])}</section>
          <section>
            {aliadosOrdenados.length>=2 ? renderPersonagem(aliadosOrdenados[1]):null}
            {aliadosOrdenados.length>=3 ? renderPersonagem(aliadosOrdenados[2]):null}
          </section>
          <section>
            {aliadosOrdenados.length>=4 ? renderPersonagem(aliadosOrdenados[3]):null}
            </section>
        </div>
      </section>
    </div>
  );
}
