import { ICONS } from "../../../../constants/images";
import "./opcoes-batalha.style.css";

export function OpcoesBatalha({ animacoes, zoom, functions }) {
  function handleHUD() {
    animacoes.hudAtivo
      ? functions.setAnimacoes({ ...animacoes, hudAtivo: false })
      : functions.setAnimacoes({ ...animacoes, hudAtivo: true });
  }

  return animacoes.iniciativaTerminou && !animacoes.escolhendoAlvo ? (
    <div className="opcoes-batalha">
      <button style={{ backgroundImage: `url(${ICONS.ESCAPE})` }}></button>

      <button
        onClick={handleHUD}
        style={{
          backgroundImage: `url(${
            animacoes.hudAtivo ? ICONS.HUD : ICONS.HUD_OFF
          })`,
        }}
      ></button>

      <button
        style={{ backgroundImage: `url(${ICONS.ZOOM_OUT})` }}
        onClick={zoom > 50 ? functions.diminuirZoom : null}
        className={zoom <= 50 ? "opcao-bloqueada" : null}
      ></button>

      <h3>{zoom}%</h3>

      <button
        style={{ backgroundImage: `url(${ICONS.ZOOM_IN})` }}
        onClick={zoom < 100 ? functions.aumentarZoom : null}
        className={zoom >= 100 ? "opcao-bloqueada" : null}
      ></button>
    </div>
  ) : null;
}
