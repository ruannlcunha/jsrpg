import { useState } from "react";
import { ICONS } from "../../../../constants/images";
import { ModalConfigSom } from "../../"
import "./opcoes-batalha.style.css";
import { useSound } from "../../../../hook";

export function OpcoesBatalha({ animacoes, zoom, functions }) {
  const [configIsOpen, setConfigIsOpen] = useState(false)
  const { playHover, playClick } = useSound()

  function handleConfig() {
    playClick(2)
    setConfigIsOpen(true)
  }

  function handleHUD() {
    playClick(2)
    animacoes.hudAtivo
      ? functions.setAnimacoes({ ...animacoes, hudAtivo: false })
      : functions.setAnimacoes({ ...animacoes, hudAtivo: true });
  }

  function handleEscape() {
    playClick(2)
  }

  function handleDiminuirZoom() {
    playClick(2)
    functions.diminuirZoom()
  }

  function handleAumentarZoom() {
    playClick(2)
    functions.aumentarZoom()
  }

  return animacoes.iniciativaTerminou && !animacoes.escolhendoAlvo ? (
    <div className="opcoes-batalha">
      <ModalConfigSom isOpen={configIsOpen} setIsOpen={setConfigIsOpen}/>

      <button
      onMouseEnter={()=>playHover(1)} 
      onClick={handleEscape}
      style={{ backgroundImage: `url(${ICONS.ESCAPE})` }}>

      </button>

      <button
      onMouseEnter={()=>playHover(1)}
      onClick={handleConfig}
      style={{ backgroundImage: `url(${ICONS.CONFIG})` }}>
      </button>

      <button
      onMouseEnter={()=>playHover(1)}
        onClick={handleHUD}
        style={{
          backgroundImage: `url(${
            animacoes.hudAtivo ? ICONS.HUD : ICONS.HUD_OFF
          })`,
        }}
      ></button>

      <button
      onMouseEnter={()=>playHover(1)}
        style={{ backgroundImage: `url(${ICONS.ZOOM_OUT})` }}
        onClick={zoom > 50 ? handleDiminuirZoom : null}
        className={zoom <= 50 ? "opcao-bloqueada" : null}
      ></button>

      <h3>{zoom}%</h3>

      <button
      onMouseEnter={()=>playHover(1)}
        style={{ backgroundImage: `url(${ICONS.ZOOM_IN})` }}
        onClick={zoom < 100 ? handleAumentarZoom : null}
        className={zoom >= 100 ? "opcao-bloqueada" : null}
      ></button>
    </div>
  ) : null;
}
