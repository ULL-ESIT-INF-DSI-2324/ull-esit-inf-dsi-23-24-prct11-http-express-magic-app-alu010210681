import { Carta } from './Carta.js';
/**
 * Gestor de cartas Magic que permite realizar operaciones asincrónicas sobre la colección de cartas de un usuario,
 * como añadir, modificar, eliminar, listar y mostrar cartas específicas.
 */
export declare class GestorCartas {
    /**
     * Construye el directorio base para almacenar las cartas de un usuario específico.
     *
     * @param usuario El nombre del usuario para el cual se construye el directorio.
     * @returns La ruta al directorio construido.
     */
    static construirDirectorio(usuario: string): string;
    /**
     * Construye la ruta completa al archivo que corresponde a una carta específica de un usuario.
     *
     * @param usuario El nombre del usuario propietario de la carta.
     * @param cartaId El identificador único de la carta.
     * @returns La ruta al archivo de la carta.
     */
    static construirRutaArchivo(usuario: string, cartaId: number): string;
    /**
     * Añade una nueva carta a la colección del usuario de manera asíncrona.
     *
     * @param usuario El nombre del usuario al que se añade la carta.
     * @param carta La carta a añadir.
     * @param callback Función callback que se ejecuta al finalizar la operación.
     */
    static addCarta(usuario: string, carta: Carta, callback: (error: Error | undefined, response: string | undefined) => void): void;
    /**
     * Modifica la información de una carta existente en la colección del usuario de manera asíncrona.
     *
     * @param usuario El nombre del usuario propietario de la carta.
     * @param cartaModificada La carta con la información actualizada.
     * @param callback Función callback que se ejecuta al finalizar la operación.
     */
    static modificarCarta(usuario: string, cartaModificada: Carta, callback: (error: Error | undefined, resultado: string | undefined) => void): void;
    /**
     * Elimina una carta de la colección del usuario de manera asíncrona.
     *
     * @param usuario El nombre del usuario propietario de la carta.
     * @param idCarta El identificador único de la carta a eliminar.
     * @param callback Función callback que se ejecuta al finalizar la operación.
     */
    static eliminarCarta(usuario: string, idCarta: number, callback: (error: Error | undefined, resultado: string | undefined) => void): void;
    /**
    * Lista todas las cartas pertenecientes a un usuario de manera asíncrona.
    *
    * @param usuario El nombre del usuario cuyas cartas se listarán.
    * @param callback Función callback que se ejecuta al finalizar la operación.
    */
    static listarCartas(usuario: string, callback: (error: Error | undefined, resultado: string | undefined) => void): void;
    /**
     * Muestra la información detallada de una carta específica perteneciente a un usuario de manera asíncrona.
     *
     * @param usuario El nombre del usuario propietario de la carta.
     * @param cartaId El identificador único de la carta a mostrar.
     * @param callback Función callback que se ejecuta al finalizar la operación.
     */
    static mostrarCarta(usuario: string, cartaId: number, callback: (error: Error | undefined, resultado: string | undefined) => void): void;
}
