/**
 * Enumeración de los posibles colores de las cartas Magic.
 */
export declare enum Color {
    Blanco = "Blanco",
    Azul = "Azul",
    Negro = "Negro",
    Rojo = "Rojo",
    Verde = "Verde",
    Incoloro = "Incoloro",
    Multicolor = "Multicolor"
}
/**
 * Enumeración de los posibles tipos de cartas Magic.
 */
export declare enum TipoCarta {
    Tierra = "Tierra",
    Criatura = "Criatura",
    Encantamiento = "Encantamiento",
    Conjuro = "Conjuro",
    Instantaneo = "Instantaneo",
    Artefacto = "Artefacto",
    PlanesWalker = "PlanesWalker"
}
/**
 * Enumeración de las posibles rarezas de las cartas Magic.
 */
export declare enum Rareza {
    Comun = "Comun",
    Infrecuente = "Infrecuente",
    Rara = "Rara",
    Mitica = "Mitica"
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
export declare class Carta {
    id: number;
    name: string;
    cost: number;
    color: Color;
    type: TipoCarta;
    rarity: Rareza;
    rules: string;
    constructor(id: number, name: string, cost: number, color: Color, type: TipoCarta, rarity: Rareza, rules: string);
}
/**
 * Clase que representa una carta de tipo Criatura en Magic.
 * Incluye propiedades adicionales específicas de las criaturas, como la fuerza y la resistencia.
 * @extends Carta
 */
export declare class CartaCriatura extends Carta {
    power: number;
    resistance: number;
    constructor(id: number, name: string, cost: number, color: Color, type: TipoCarta, rarity: Rareza, rules: string, power: number, // Fuerza de la criatura.
    resistance: number);
}
/**
 * Clase que representa una carta de tipo Planeswalker en Magic.
 * Incluye la propiedad de lealtad, única de los Planeswalkers.
 * @extends Carta
 */
export declare class CartaPlaneswalker extends Carta {
    loyalty: number;
    constructor(id: number, name: string, cost: number, color: Color, type: TipoCarta, rarity: Rareza, rules: string, loyalty: number);
}
