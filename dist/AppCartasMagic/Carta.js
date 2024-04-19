/**
 * Enumeración de los posibles colores de las cartas Magic.
 */
export var Color;
(function (Color) {
    Color["Blanco"] = "Blanco";
    Color["Azul"] = "Azul";
    Color["Negro"] = "Negro";
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Incoloro"] = "Incoloro";
    Color["Multicolor"] = "Multicolor";
})(Color || (Color = {}));
/**
 * Enumeración de los posibles tipos de cartas Magic.
 */
export var TipoCarta;
(function (TipoCarta) {
    TipoCarta["Tierra"] = "Tierra";
    TipoCarta["Criatura"] = "Criatura";
    TipoCarta["Encantamiento"] = "Encantamiento";
    TipoCarta["Conjuro"] = "Conjuro";
    TipoCarta["Instantaneo"] = "Instantaneo";
    TipoCarta["Artefacto"] = "Artefacto";
    TipoCarta["PlanesWalker"] = "PlanesWalker";
})(TipoCarta || (TipoCarta = {}));
/**
 * Enumeración de las posibles rarezas de las cartas Magic.
 */
export var Rareza;
(function (Rareza) {
    Rareza["Comun"] = "Comun";
    Rareza["Infrecuente"] = "Infrecuente";
    Rareza["Rara"] = "Rara";
    Rareza["Mitica"] = "Mitica";
})(Rareza || (Rareza = {}));
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
    id;
    name;
    cost;
    color;
    type;
    rarity;
    rules;
    constructor(id, name, cost, color, type, rarity, rules) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.color = color;
        this.type = type;
        this.rarity = rarity;
        this.rules = rules;
    }
}
/**
 * Clase que representa una carta de tipo Criatura en Magic.
 * Incluye propiedades adicionales específicas de las criaturas, como la fuerza y la resistencia.
 * @extends Carta
 */
export class CartaCriatura extends Carta {
    power;
    resistance;
    constructor(id, name, cost, color, type, rarity, rules, power, // Fuerza de la criatura.
    resistance) {
        super(id, name, cost, color, type, rarity, rules);
        this.power = power;
        this.resistance = resistance;
    }
}
/**
 * Clase que representa una carta de tipo Planeswalker en Magic.
 * Incluye la propiedad de lealtad, única de los Planeswalkers.
 * @extends Carta
 */
export class CartaPlaneswalker extends Carta {
    loyalty;
    constructor(id, name, cost, color, type, rarity, rules, loyalty) {
        super(id, name, cost, color, type, rarity, rules);
        this.loyalty = loyalty;
    }
}
