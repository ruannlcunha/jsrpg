import { ICONS } from "../../../constants/images"
import { PERSONAGENS_DATA } from "../../../database"
import { useSound } from "../../../hook"
import { CardBatalha, ContainerScreen } from ".."
import "./iniciar-batalha.style.css"

export function IniciarBatalhaScreen({aliados, inimigos, iniciarFunction}) {
    const { playHover, playClick } = useSound()

    function handleIniciar() {
        playClick(2)
        iniciarFunction()
    }

    return (
        <ContainerScreen>
            <button className="voltar-button" onMouseEnter={()=>playHover(1)}>
                <img src={ICONS.SETA_VOLTAR} alt="Seta apontando pra esquerda" />
                <h1>Voltar</h1>
            </button>

            <div className="iniciar-batalha-screen">
                <header>COMBATE</header>
                <section className="iniciar-batalha-section">
                    <section className="party-cards">
                        {inimigos.map((inimigo,i)=>{
                            return <CardBatalha key={i} personagem={inimigo} reverse={true}/>
                        })}
                    </section>

                    <section className="iniciar-info">
                        <div>
                            <h1>Combate Teste:</h1>
                            <h2>4 Lobos</h2>
                        </div>
                        <img src={ICONS.CROSS_SWORD} alt="" />
                        <button onClick={handleIniciar} onMouseEnter={()=>playHover(1)}>
                            Iniciar
                        </button>
                    </section>

                    <section className="party-cards">
                    {aliados.map((aliado, i)=>{
                            return <CardBatalha key={i} personagem={aliado}/>
                        })}
                    </section>
                </section>
            <footer></footer>
            </div>
        </ContainerScreen>
    )

}