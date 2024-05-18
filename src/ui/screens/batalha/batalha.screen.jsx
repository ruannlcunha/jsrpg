import "./batalha.style.css";
import {
  CampoDeBatalha,
  Turnos,
  ContainerScreen,
  BatalhaHUD,
  OpcoesBatalha,
  Banner,
  AudioContainer,
} from "../../components";
import { PERSONAGENS_DATA } from "../../../database/personagens.data";
import {
  useFinalizarTurno,
  useIniciarBatalha,
  useInstanciarPersonagens,
  useZoomCampo,
} from "../../../hook/batalha/";
import { useEffect, useState } from "react";
import { useBanners, useSound } from "../../../hook";
import { MUSICS } from "../../../constants/audios/musics.constant";

export function BatalhaScreen() {
  const { banners, setBanners, ativarBannerTexto, ativarBannerRolagem, ativarBannerInimigo } =
    useBanners();
  const [personagens, setPersonagens] = useState([]);
  const [personagemAtivo, setPersonagemAtivo] = useState({ idCombate: null });
  const [acaoAtiva, setAcaoAtiva] = useState({
    personagem: null,
    evento: null,
    alvos: [],
  });
  const [turno, setTurno] = useState({ atual: 0, maximo: 0 });
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const { iniciarBatalha } = useIniciarBatalha(banners);
  const { finalizarTurno } = useFinalizarTurno();
  const { playSound } = useSound()
  const { zoom, aumentarZoom, diminuirZoom } = useZoomCampo();
  const [functions, setFunctions] = useState(null)

  const [animacoes, setAnimacoes] = useState({
    isDadosAtivos: false,
    hudAtivo: false,
    iniciativaTerminou: false,
    escolhendoAlvo: false,
  });

  useEffect(() => {
    const personagensInstanciados = instanciarPersonagens(
      [
        PERSONAGENS_DATA[0],
        PERSONAGENS_DATA[1],
        PERSONAGENS_DATA[2],
        PERSONAGENS_DATA[3],
      ],
      [
        PERSONAGENS_DATA[4],
        PERSONAGENS_DATA[4],
        PERSONAGENS_DATA[4],
        PERSONAGENS_DATA[4],
      ]
    );
    const todasFuncoes = {
      setAcaoAtiva,
      setAnimacoes,
      setPersonagens,
      setTurno,
      setBanners,
      ativarBannerTexto,
      ativarBannerInimigo,
      ativarBannerRolagem,
      playSound,
      setPersonagemAtivo,
    }
    setFunctions(todasFuncoes)
    setTurno({ atual: 0, maximo: personagensInstanciados.length });
    setPersonagens(personagensInstanciados);
    iniciarBatalha(personagensInstanciados, todasFuncoes,
  );
  }, []);

  useEffect(() => {
    finalizarTurno(personagens, turno, {
      ativarBannerTexto,
      setPersonagemAtivo,
      setBanners,
    });
  }, [turno, personagens]);

  return functions ? (
    <ContainerScreen>
      <div className="batalha-screen">
        <AudioContainer audio={MUSICS.BATTLE_1}/>

        <OpcoesBatalha
          animacoes={animacoes}
          zoom={zoom}
          functions={{ setAnimacoes, aumentarZoom, diminuirZoom }}
        />

        <Banner banners={banners} setBanners={setBanners} />

        {personagens.length > 0 && personagemAtivo ? (
          <>
            <Turnos
              animacoes={animacoes}
              idAtivo={personagemAtivo.idCombate}
              personagens={personagens}
            />

            <CampoDeBatalha
              idAtivo={personagemAtivo.idCombate}
              aliados={personagens.filter((item) => item.isInimigo === false)}
              inimigos={personagens.filter((item) => item.isInimigo === true)}
              animacoes={animacoes}
              acaoAtiva={acaoAtiva}
              zoom={zoom}
              functions={functions}
            />

            <BatalhaHUD
              personagens={personagens}
              personagemAtivo={personagemAtivo}
              animacoes={animacoes}
              turno={turno}
              functions={functions}
            />
          </>
        ) : null}
      </div>
    </ContainerScreen>
  ):null;
}
