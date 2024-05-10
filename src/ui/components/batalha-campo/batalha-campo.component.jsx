import { BatalhaPersonagem } from "../batalha-personagem/batalha-personagem.component"
import "./batalha-campo.style.css"

export function BatalhaCampo({aliados, inimigos, idAtivo, animacoes, acaoAtiva, functions}) {

    const aliadosOrdenados = aliados.sort(function(a, b) {
        return a.posicaoEmCampo - b.posicaoEmCampo;
    });

    const inimigosOrdenados = inimigos.sort(function(a, b) {
        return a.posicaoEmCampo - b.posicaoEmCampo;
    });

    return aliados.length>1 && inimigos.length>1 ?(
        <div className="batalha-campo">
        <section>
            <div className="inimigos">
                <section>
                    <BatalhaPersonagem
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigosOrdenados[0]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                </section>
                <section>
                    <BatalhaPersonagem
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigosOrdenados[1]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                    <BatalhaPersonagem
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigosOrdenados[2]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                </section>
                <section>
                    <BatalhaPersonagem
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigosOrdenados[3]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                </section>
            </div>

            <div className="personagens">
                <section>
                    <BatalhaPersonagem 
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={aliadosOrdenados[0]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                </section>
                <section>
                    <BatalhaPersonagem 
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={aliadosOrdenados[1]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                    <BatalhaPersonagem 
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={aliadosOrdenados[2]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                </section>
                <section>
                    <BatalhaPersonagem 
                    iniciativaTerminou={animacoes.iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={aliadosOrdenados[3]}
                    animacoes={animacoes}
                    acaoAtiva={acaoAtiva}
                    functions={functions}
                    />
                </section>
            </div>
        </section>
        </div>
    ) : null

}