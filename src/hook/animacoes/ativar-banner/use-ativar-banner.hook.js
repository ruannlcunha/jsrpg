
export function useAtivarBanner() {

    function ativarBanner(texto, callBack) {
        callBack({texto: texto, ativo: true})

        setTimeout(()=>{
            callBack({texto: "", ativo: false})
        }, 5000)
    }

    return { ativarBanner }

}