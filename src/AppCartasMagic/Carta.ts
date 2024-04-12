/**
 * Enumeración de los posibles colores de las cartas Magic.
 */
export enum Color {
  Blanco = 'Blanco',
  Azul = 'Azul',
  Negro = 'Negro',
  Rojo = 'Rojo',
  Verde = 'Verde',
  Incoloro = 'Incoloro',
  Multicolor = 'Multicolor',
}

/**
 * Enumeración de los posibles tipos de cartas Magic.
 */
export enum TipoCarta {
  Tierra = 'Tierra',
  Criatura = 'Criatura',
  Encantamiento = 'Encantamiento',
  Conjuro = 'Conjuro',
  Instantaneo = 'Instantaneo',
  Artefacto = 'Artefacto',
  PlanesWalker = 'PlanesWalker',
}

/**
 * Enumeración de las posibles rarezas de las cartas Magic.
 */
export enum Rareza {
  Comun = 'Comun',
  Infrecuente = 'Infrecuente',
  Rara = 'Rara',
  Mitica = 'Mitica',
}

/**
 * Clase base que representa una carta genérica de Magic.
 * @param id Identificador único de la carta.
 * @param name Nombre de la carta.
 * @param cost Coste de maná para lanzar la carta.
 * @param color Color de la carta.
 * @param type Tipo de la carta.
 * @param rarity Rareza de la carta.
 * @param rules Texto de reglas de la carta.
 */
export class Carta {
  constructor(
    public id: number,
    public name: string,
    public cost: number,
    public color: Color,
    public type: TipoCarta,
    public rarity: Rareza,
    public rules: string,
  ) {}
}

/**
 * Clase que representa una carta de tipo Criatura en Magic.
 * Incluye propiedades adicionales específicas de las criaturas, como la fuerza y la resistencia.
 * @extends Carta
 */
export class CartaCriatura extends Carta {
  constructor(
    id: number,
    name: string,
    cost: number,
    color: Color,
    type: TipoCarta,
    rarity: Rareza,
    rules: string,
    public power: number, // Fuerza de la criatura.
    public resistance: number, // Resistencia de la criatura.
  ) {
    super(id, name, cost, color, type, rarity, rules);
  }
}

/**
 * Clase que representa una carta de tipo Planeswalker en Magic.
 * Incluye la propiedad de lealtad, única de los Planeswalkers.
 * @extends Carta
 */
export class CartaPlaneswalker extends Carta {
  constructor(
    id: number,
    name: string,
    cost: number,
    color: Color,
    type: TipoCarta,
    rarity: Rareza,
    rules: string,
    public loyalty: number, // Lealtad del Planeswalker.
  ) {
    super(id, name, cost, color, type, rarity, rules);
  }
}
