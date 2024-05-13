import { useState } from "react";
import "./acoes-hud.style.css";
import { ATAQUES_DATA, HABILIDADES_DATA } from "../../../../database/acoes";
import { useEscolherAcao } from "../../../../hook/batalha";

export function AcoesHUD({ personagem, functions }) {
  const { escolherAcao } = useEscolherAcao();
  const [subAcoes, setSubAcoes] = useState({
    ativo: false,
    titulo: "",
    acoesAtuais: null,
    data: null,
  });

  function selectAcao(novoTitulo, novasAcoes, novaData) {
    const novasSubsAcoes = {
      ...subAcoes,
      titulo: novoTitulo,
      acoesAtuais: novasAcoes,
      data: novaData,
    };

    setSubAcoes(novasSubsAcoes);

    if (subAcoes.ativo) {
      novoTitulo === subAcoes.titulo
        ? setSubAcoes({ ...novasSubsAcoes, ativo: false })
        : null;
    } else {
      setSubAcoes({ ...novasSubsAcoes, ativo: true });
    }
  }

  function handlePularTurno() {
    functions.setTurno((old) => {
      if (old.atual >= old.maximo - 1) {
        return { ...old, atual: 0 };
      }
      return { ...old, atual: old.atual + 1 };
    });
  }

  return !personagem.isInimigo ? (
    <>
      <ul className="hud-acoes">
        <li
          onClick={() =>
            selectAcao("Ataques", personagem.acoes.ataques, ATAQUES_DATA)
          }
        >
          Atacar
        </li>
        <li
          onClick={() =>
            selectAcao(
              "Habilidades",
              personagem.acoes.habilidades,
              HABILIDADES_DATA
            )
          }
        >
          Habilidades
        </li>
        <li onClick={() => selectAcao("Itens")}>Itens</li>
        <li onClick={handlePularTurno}>Pular Turno</li>
      </ul>

      {subAcoes.ativo ? (
        <div className="hud-sub-acoes">
          <header>{subAcoes.titulo}</header>
          <section>
            {subAcoes.acoesAtuais
              ? subAcoes.acoesAtuais.map((acaoId, index) => {
                  const subAcao = subAcoes.data.find(
                    (item) => item.id === acaoId
                  );
                  const estaBloqueado = personagem.pmAtual < subAcao.custo;
                  return (
                    <li
                      key={index}
                      className={estaBloqueado ? "acao-bloqueada" : null}
                      onClick={
                        !estaBloqueado
                          ? () => {
                              escolherAcao(
                                personagem,
                                subAcao.evento,
                                functions
                              );
                            }
                          : null
                      }
                    >
                      <h1>{subAcao.nome}</h1>
                      {subAcao.dadoDeDano ? (
                        <section>
                          <h2>Dano: {subAcao.dadoDeDano}</h2>
                          <h2>Tipo: {subAcao.tipo}</h2>
                          <h2>Custo: {subAcao.custo}PM</h2>
                        </section>
                      ) : (
                        <section>
                          <h2>Efeito: {subAcao.efeito}</h2>
                          <h2>Custo: {subAcao.custo}PM</h2>
                        </section>
                      )}
                    </li>
                  );
                })
              : null}
          </section>
        </div>
      ) : null}
    </>
  ) : null;
}
