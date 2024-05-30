import { ICONS } from "../../../../constants/images"
import { useSound } from "../../../../hook"
import "./resultado-recompensas.style.css"

export function ResultadoRecompensas() {
    const { playHover, playClick } = useSound()

    function handleContinuar() {
        playClick(2)
        location.reload()
    }

    return (
    <section className="recompensas-section">
        <header>
            <h1>Recompensas</h1>
        </header>
        <section>
            <div className="recompensa">
                <div>
                    <img src={ICONS.CRISTAL_VERDE} alt="Imagem do item" />
                    <h2>Nome do Item</h2>
                </div>
                <h3>x{1}</h3>
            </div>
            <div className="recompensa">
                <div>
                    <img src={ICONS.CRISTAL_VERDE} alt="Imagem do item" />
                    <h2>Nome do Item</h2>
                </div>
                <h3>x{1}</h3>
            </div>
        </section>
        <button onClick={handleContinuar} onMouseEnter={()=>playHover(1)}>Continuar</button>
    </section>
    )

}