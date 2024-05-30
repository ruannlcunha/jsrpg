import { PERFIL, SPRITES } from "../../constants/images";

export const PERSONAGENS_DATA = [
  {
    id: 1,
    nome: "Ayla",
    sprite: SPRITES.AYLA_SPRITE,
    perfil: PERFIL.AYLA_PERFIL,
    corTema: "tema-amarelo",
    level: 10,
    expAtual: 10,
    expTotal: 100,
    defesa: 11,
    pvAtual: 15,
    pvTotal: 15,
    pmAtual: 10,
    pmTotal: 10,
    atributos: {
      forca: 4,
      agilidade: 1,
      magia: 2,
      vigor: 3,
    },
    ataques: [{id: 1}],
    habilidades: [{id: 1}],
    itens: [
      {
        id: 1,
        quantidade: 2,
      }
    ]
  },
  {
    id: 2,
    nome: "Andy",
    sprite: SPRITES.ANDY_SPRITE,
    perfil: PERFIL.ANDY_PERFIL,
    corTema: "tema-verde",
    level: 10,
    expAtual: 10,
    expTotal: 100,
    defesa: 14,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 15,
    pmTotal: 15,
    atributos: {
      forca: 1,
      agilidade: 4,
      magia: 3,
      vigor: 2,
    },
    ataques: [{id: 1}],
    habilidades: [{id: 1}],
    itens: [
      {
        id: 1,
        quantidade: 1,
      }
    ]
  },
  {
    id: 3,
    nome: "Dominick",
    sprite: SPRITES.DOMINICK_SPRITE,
    perfil: PERFIL.DOMINICK_PERFIL,
    corTema: "tema-roxo",
    level: 10,
    expAtual: 10,
    expTotal: 100,
    defesa: 14,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 10,
    pmTotal: 10,
    atributos: {
      forca: 2,
      agilidade: 4,
      magia: 2,
      vigor: 1,
    },
    ataques: [{id: 1}],
    habilidades: [{id: 1}],
    itens: [
      {
        id: 1,
        quantidade: 1,
      }
    ]
  },
  {
    id: 4,
    nome: "Aphelios",
    sprite: SPRITES.APHELIOS_SPRITE,
    perfil: PERFIL.APHELIOS_PERFIL,
    corTema: "tema-ciano",
    level: 10,
    expAtual: 10,
    expTotal: 100,
    defesa: 13,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 20,
    pmTotal: 20,
    atributos: {
      forca: 1,
      agilidade: 3,
      magia: 4,
      vigor: 2,
    },
    ataques: [{id: 1}],
    habilidades: [{id: 1}],
    itens: [
      {
        id: 1,
        quantidade: 1,
      }
    ]
  },
  {
    id: 5,
    nome: "Lobo",
    sprite: SPRITES.LOBO_SPRITE,
    perfil: PERFIL.LOBO_PERFIL,
    corTema: "tema-inimigo",
    level: 2,
    expAtual: 10,
    expTotal: 100,
    defesa: 12,
    pvAtual: 1,
    pvTotal: 10,
    pmAtual: 2,
    pmTotal: 2,
    atributos: {
      forca: 1,
      agilidade: 2,
      magia: 0,
      vigor: 1,
    },
    acoes: {
      ataques: [2],
    },
  },
];
