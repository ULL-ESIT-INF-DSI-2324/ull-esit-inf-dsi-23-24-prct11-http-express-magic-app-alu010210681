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
export class GestorCartas {
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
    const dir = GestorCartas.construirDirectorio(usuario);
    return `${dir}${cartaId}.txt`;
  }

  /**
   * Añade una nueva carta a la colección del usuario de manera asíncrona.
   * 
   * @param usuario El nombre del usuario al que se añade la carta.
   * @param carta La carta a añadir.
   * @param callback Función callback que se ejecuta al finalizar la operación.
   */
  public static addCarta(usuario: string, carta: Carta): Promise<string> {
    const dir = this.construirDirectorio(usuario);
    const path = this.construirRutaArchivo(usuario, carta.id);
  
    return fs.promises.mkdir(dir, { recursive: true })
      .then(() => fs.promises.access(path))
      .then(() => {
        throw new Error('La carta ya existe en la colección.');
      })
      .catch(err => {

        if (err && err.code === 'ENOENT') {
          const data = JSON.stringify(carta);
          return fs.promises.writeFile(path, data).then(() => 'Carta agregada exitosamente.');
        }

        throw err;
      });
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
   /**
   * Lista todas las cartas pertenecientes a un usuario de manera asíncrona.
   * 
   * @param usuario El nombre del usuario cuyas cartas se listarán.
   * @param callback Función callback que se ejecuta al finalizar la operación.
   */
  public static listarCartas(usuario: string, callback: (error: Error | undefined, resultado: string | undefined) => void): void {
    const dir = this.construirDirectorio(usuario);
  
    // Comprueba si el directorio existe de manera asíncrona.
    fs.access(dir, fs.constants.F_OK, (err) => {
      if (err) {
        // El directorio no existe, por lo que el usuario no tiene cartas.
        callback(undefined, "El usuario no tiene cartas en su colección.");
        return;
      }
  
      // Lee el directorio de manera asíncrona.
      fs.readdir(dir, (err, archivosCartas) => {
        if (err) {
          callback(err, undefined);
          return;
        }
  
        let cartaString = "";
        
        // Necesitamos procesar cada archivo de manera asíncrona y esperar a que todos terminen.
        // Utilizaremos un contador para saber cuándo hemos procesado todos los archivos.
        let archivosProcesados = 0;
  
        if (archivosCartas.length === 0) {
          callback(undefined, "El usuario no tiene cartas en su colección.");
          return;
        }
  
        archivosCartas.forEach(archivo => {
          const path = `${dir}${archivo}`;
          
          // Lee cada archivo de manera asíncrona.
          fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
              callback(err, undefined);
              return;
            }
  
            const carta = JSON.parse(data);
            cartaString += `ID: ${carta.id}, Nombre: ${carta.name}, Costo: ${carta.cost}, Tipo: ${carta.type}, Rareza: ${carta.rarity}, Reglas: ${carta.rules}`;
  
            if (carta.power !== undefined && carta.resistance !== undefined) {
              cartaString += `, Poder: ${carta.power}, Resistencia: ${carta.resistance}`;
            }
  
            cartaString += `, Color: ${carta.color}\n`;
  
            archivosProcesados++;
            if (archivosProcesados === archivosCartas.length) {
              // Todos los archivos han sido procesados, devuelve el resultado.
              callback(undefined, cartaString);
            }
          });
        });
      });
    });
}

  /**
   * Muestra la información detallada de una carta específica perteneciente a un usuario de manera asíncrona.
   * 
   * @param usuario El nombre del usuario propietario de la carta.
   * @param cartaId El identificador único de la carta a mostrar.
   * @param callback Función callback que se ejecuta al finalizar la operación.
   */
  public static mostrarCarta(usuario: string, cartaId: number, callback: (error: Error | undefined, resultado: string | undefined) => void): void {
    const filePath = this.construirRutaArchivo(usuario, cartaId);
  
    // Verifica de manera asíncrona si el archivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // Si el archivo no existe, llama al callback con un error.
        callback(new Error(`Error: No se encontró la carta con ID ${cartaId} para el usuario ${usuario}.`), undefined);
        return;
      }
  
      // Lee el archivo de manera asíncrona
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          // Si hay un error leyendo el archivo, llama al callback con ese error.
          callback(err, undefined);
          return;
        }
  
        try {
          const carta = JSON.parse(data);
          let cartaInfo = `ID: ${carta.id}\nNombre: ${carta.name}\nCosto: ${carta.cost}\nColor: ${carta.color}\nTipo: ${carta.type}\nRareza: ${carta.rarity}\nReglas: ${carta.rules}\n`;
  
          if (carta.power !== undefined && carta.resistance !== undefined) {
            cartaInfo += `Poder: ${carta.power}, Resistencia: ${carta.resistance}\n`;
          }
  
          if (carta.loyalty !== undefined) {
            cartaInfo += `Lealtad: ${carta.loyalty}`;
          }
  
          // Si todo es exitoso, llama al callback sin errores y con la información de la carta.
          callback(undefined, cartaInfo);
        } catch (parseError) {
          // Si ocurre un error al parsear el JSON, llama al callback con ese error.
          callback(new Error('Error al parsear la información de la carta.'), undefined);
        }
      });
    });
  }
}