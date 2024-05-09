import { BatalhaPersonagem } from "../batalha-personagem/batalha-personagem.component"
import "./batalha-sprites.style.css"

export function BatalhaSprites({personagens, inimigos, idAtivo, iniciativaTerminou}) {

    return personagens.length>1 && inimigos.length>1 ?(
        <section className="batalha-sprites">
            <div className="inimigos">
                <section>
                    <BatalhaPersonagem
                    iniciativaTerminou={iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigos[0]}
                    />
                </section>
                <section>
                    <BatalhaPersonagem
                    iniciativaTerminou={iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigos[1]}
                    />
                    <BatalhaPersonagem
                    iniciativaTerminou={iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigos[2]}
                    />
                </section>
                <section>
                    <BatalhaPersonagem
                    iniciativaTerminou={iniciativaTerminou}
                    isInimigo={true}
                    idAtivo={idAtivo}
                    personagem={inimigos[3]}
                    />
                </section>
            </div>

            <div className="personagens">
                <section>
                    <BatalhaPersonagem 
                    iniciativaTerminou={iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={personagens[0]}
                    />
                </section>
                <section>
                    <BatalhaPersonagem 
                    iniciativaTerminou={iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={personagens[1]}
                    />
                    <BatalhaPersonagem 
                    iniciativaTerminou={iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={personagens[2]}
                    />
                </section>
                <section>
                    <BatalhaPersonagem 
                    iniciativaTerminou={iniciativaTerminou}
                    idAtivo={idAtivo}
                    personagem={personagens[3]}
                    />
                </section>
            </div>
        </section>
    ) : null

}