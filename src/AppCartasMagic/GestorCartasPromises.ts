import fs from 'fs';
import { Carta, CartaCriatura, CartaPlaneswalker } from './Carta.js';

/**
 * Define un tipo que puede ser cualquier tipo de Carta (base, criatura o planeswalker).
 */
type Cart = Carta | CartaCriatura | CartaPlaneswalker;

/**
 * Gestor de cartas Magic que permite realizar operaciones asincrónicas sobre la colección de cartas de un usuario,
 * como añadir, modificar, eliminar, listar y mostrar cartas específicas.
 */
export class GestorCartasPromises {
  /**
   * Construye el directorio base para almacenar las cartas de un usuario específico.
   * 
   * @param usuario El nombre del usuario para el cual se construye el directorio.
   * @returns La ruta al directorio construido.
   */
  public static construirDirectorio(usuario: string): string {
    return `./src/AppCartasMagic/db/${usuario}/`;
  }

  /**
   * Construye la ruta completa al archivo que corresponde a una carta específica de un usuario.
   * 
   * @param usuario El nombre del usuario propietario de la carta.
   * @param cartaId El identificador único de la carta.
   * @returns La ruta al archivo de la carta.
   */
  public static construirRutaArchivo(usuario: string, cartaId: number): string {
    const dir = GestorCartasPromises.construirDirectorio(usuario);
    return `${dir}${cartaId}.txt`;
  }


  /**
   * Modifica la información de una carta existente en la colección del usuario de manera asíncrona.
   * 
   * @param usuario El nombre del usuario propietario de la carta.
   * @param cartaModificada La carta con la información actualizada.
   * @param callback Función callback que se ejecuta al finalizar la operación.
   */
  public static modificarCarta(usuario: string, cartaModificada: Carta): Promise<string> {
    const path = this.construirRutaArchivo(usuario, cartaModificada.id);

    return new Promise<string>((resolve, reject) => {
      fs.promises.access(path, fs.promises.constants.F_OK)
      .then(() => {
        const data = JSON.stringify(cartaModificada);
        return fs.promises.writeFile(path, data, { encoding: 'utf8' });
      })
      .then(() => {
        resolve("Carta modificada");
      })
      .catch((error) => {
        if (error.code === 'ENOENT') {
          reject('La carta no existe en la coleccion');
        }
        reject('Error desconocido');
      });
    });
  }

  /**
   * Elimina una carta de la colección del usuario de manera asíncrona.
   * 
   * @param usuario El nombre del usuario propietario de la carta.
   * @param idCarta El identificador único de la carta a eliminar.
   * @param callback Función callback que se ejecuta al finalizar la operación.
   */
  public static eliminarCarta(usuario: string, idCarta: number): Promise<string> {
    const path = this.construirRutaArchivo(usuario, idCarta);
  
    return new Promise<string>((resolve, reject) => {
      fs.promises.access(path, fs.constants.F_OK)
      .then(() => {
        return fs.promises.unlink(path);
      })
      .then(() => {
        resolve('Carta eliminada');
      })
      .catch(error => {
        if (error.code === 'ENOENT') {
          reject('La carta no existe en la coleccion');
        }
        reject('Error desconocido');
      });
    })
  }
   
}