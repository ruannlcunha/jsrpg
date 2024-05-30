import "./jogar-batalha.style.css"
import {
    CampoDeBatalha,
    Turnos,
    ContainerScreen,
    BatalhaHUD,
    OpcoesBatalha,
    Banners,
    AudioContainer,
  } from "../../components";
  import {
    useFinalizarTurno,
    useIniciarBatalha,
    useZoomCampo,
  } from "../../../hook/batalha/";
  import { useEffect, useState } from "react";
  import { useBanners, useSound } from "../../../hook";
  import { MUSICS } from "../../../constants/audios/musics.constant";
  
export function JogarBatalha({ setMusica, handleFinalizarBatalha, personagensInstanciados }) {
    const { banners, setBanners,
      ativarBannerTexto, ativarBannerAtaque, ativarBannerInimigo, ativarBannerRolagem } = useBanners();
    const [personagens, setPersonagens] = useState([]);
    const [personagemAtivo, setPersonagemAtivo] = useState({ idCombate: null });
    const [acaoAtiva, setAcaoAtiva] = useState({
      personagem: null,
      evento: null,
      alvos: [],
    });
    const [turno, setTurno] = useState({ atual: 0, maximo: 0 });
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
      setMusica({src: MUSICS.BATTLE_1, loop: true})

      const todasFuncoes = {
        setAcaoAtiva,
        setAnimacoes,
        setPersonagens,
        setTurno,
        setBanners,
        ativarBannerTexto,
        ativarBannerInimigo,
        ativarBannerRolagem,
        ativarBannerAtaque,
        playSound,
        setPersonagemAtivo,
        handleFinalizarBatalha,
      }
      setFunctions(todasFuncoes)
      setTurno({ atual: 0, maximo: personagensInstanciados.length });
      setPersonagens(personagensInstanciados);
      iniciarBatalha(personagensInstanciados, todasFuncoes,
    );
    }, []);
  
    useEffect(() => {
      functions ? finalizarTurno(personagens, turno, functions) : null
    }, [turno, personagens, functions]);
  
    return functions ? (
      <ContainerScreen>
        <div className="batalha-screen">
  
          <OpcoesBatalha
            animacoes={animacoes}
            zoom={zoom}
            functions={{ setAnimacoes, aumentarZoom, diminuirZoom }}
          />
  
          <Banners banners={banners} setBanners={setBanners} />
  
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