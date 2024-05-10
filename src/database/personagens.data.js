import { PERFIL, SPRITES } from "../constants/images.constant";

export const PERSONAGENS_DATA = [
    {
        id: 1,
        nome: "Ayla",
        sprite: SPRITES.AYLA_SPRITE,
        perfil: PERFIL.AYLA_PERFIL,
        perfilCor: "perfil-amarelo",
        level: 10,
        pvAtual: 20,
        hpTotal: 20,
        mpAtual: 5,
        mpTotal: 5,
        atributos: {
            forca: 1,
            destreza: 1,
            constituicao: 1,
            inteligencia: 1,
        },
        acoes: {
            ataques: [1],
            habilidades: [1],
        }
    },
    {
        id: 2,
        nome: "Andy",
        sprite: SPRITES.ANDY_SPRITE,
        perfil: PERFIL.ANDY_PERFIL,
        perfilCor: "perfil-verde",
        level: 10,
        pvAtual: 20,
        hpTotal: 20,
        mpAtual: 5,
        mpTotal: 5,
        atributos: {
            forca: 1,
            destreza: 1,
            constituicao: 1,
            inteligencia: 1,
        },
        acoes: {
            ataques: [1],
            habilidades: [1],
        }
    },
    {
        id: 3,
        nome: "Dominick",
        sprite: SPRITES.DOMINICK_SPRITE,
        perfil: PERFIL.DOMINICK_PERFIL,
        perfilCor: "perfil-roxo",
        level: 10,
        pvAtual: 20,
        hpTotal: 20,
        mpAtual: 5,
        mpTotal: 5,
        atributos: {
            forca: 1,
            destreza: 1,
            constituicao: 1,
            inteligencia: 1,
        },
        acoes: {
            ataques: [1],
            habilidades: [1],
        }
    },
    {
        id: 4,
        nome: "Aphelios",
        sprite: SPRITES.APHELIOS_SPRITE,
        perfil: PERFIL.APHELIOS_PERFIL,
        perfilCor: "perfil-ciano",
        level: 10,
        pvAtual: 20,
        hpTotal: 20,
        mpAtual: 5,
        mpTotal: 5,
        atributos: {
            forca: 1,
            destreza: 1,
            constituicao: 1,
            inteligencia: 1,
        },
        acoes: {
            ataques: [1],
            habilidades: [1],
        }
    },
    {
        id: 5,
        nome: "Lobo",
        sprite: SPRITES.LOBO_SPRITE,
        perfil: PERFIL.LOBO_PERFIL,
        perfilCor: "perfil-inimigo",
        level: 2,
        pvAtual: 10,
        hpTotal: 10,
        mpAtual: 2,
        mpTotal: 2,
        atributos: {
            forca: 1,
            destreza: 1,
            constituicao: 1,
            inteligencia: 1,
        },
        acoes: {
            ataques: [2]
        }
    },
]