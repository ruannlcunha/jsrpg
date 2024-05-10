
export function useEscolherAcao() {

    function escolherAcao(personagem, evento, setAcaoAtiva, setAnimacoes) {
        //Desativar HUD
        setAnimacoes(old => {return {...old, hudAtivo: false} })

        //Setar evento a ocorrer
        setAcaoAtiva(old=> { return {personagem: personagem, evento: evento} })

        //Escolher alvo
        setAnimacoes(old => { return {...old, escolhendoAlvo: true} })

        //Esperar o alvo ser clicado e desencadear o evento
    }

    return { escolherAcao }

}