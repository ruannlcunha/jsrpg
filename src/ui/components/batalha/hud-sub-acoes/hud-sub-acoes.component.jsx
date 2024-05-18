import { useSound } from "../../../../hook";
import { useEscolherAcao } from "../../../../hook/batalha";
import "./hud-sub-acoes.style.css"

export function HUDSubAcoes({subAcoes, personagem, personagens, functions}) {
    const { playClick, playHover } = useSound()
    const { escolherAcao } = useEscolherAcao();

    function handleEscolherAcao(personagem, personagens, acao, functions) {
        playClick(2)
        escolherAcao(personagem, personagens, acao, functions)
    }

    function renderAtaque(subAcao) {
        return (
            <section>
              <h2>Dano: {subAcao.dadoDeDano}</h2>
              <h2>Tipo: {subAcao.tipo}</h2>
              <h2>Custo: {subAcao.custo}PM</h2>
            </section>
        )
    }

    function renderHabilidade(subAcao) {
        return (
            <section>
              <h2>Efeito: {subAcao.efeito}</h2>
              <h2>Custo: {subAcao.custo}PM</h2>
            </section>
        )
    }

    return (
        <>
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
                            onMouseEnter={()=>{playHover(2)}}
                            className={estaBloqueado ? "acao-bloqueada" : null}
                            onClick={
                                !estaBloqueado
                                ? () => {
                                    handleEscolherAcao(
                                        personagem, 
                                        personagens,
                                        subAcao,
                                        functions
                                    );
                                }
                              : null
                            }
                            >
                          <h1>{subAcao.nome}</h1>
                          {subAcao.dadoDeDano ? renderAtaque(subAcao) : renderHabilidade(subAcao)}
                        </li>
                      );
                    })
                    : null}
              </section>
            </div>
          ) : null}
          </>
    )
}