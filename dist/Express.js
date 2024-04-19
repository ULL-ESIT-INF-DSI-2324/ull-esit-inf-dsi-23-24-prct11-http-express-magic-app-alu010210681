import express from 'express';
import { GestorCartas } from "./AppCartasMagic/GestorCartasCallBack.js";
const app = express();
app.use(express.json());
/**
 * @route GET /cards
 * @description Endpoint para obtener información sobre una carta específica o todas las cartas de un usuario.
 * Si se proporciona un `cartaId`, devuelve la carta específica; de lo contrario, lista todas las cartas del usuario.
 * @param req Express request object, que contiene los parámetros de consulta: `usuario` (nombre del usuario) y opcionalmente `cartaId` (ID de la carta específica).
 * @param res Express response object usado para enviar la respuesta HTTP.
 * @returns Devuelve una carta específica o un listado de todas las cartas del usuario en formato JSON.
 */
app.get('/cards', (req, res) => {
    const { usuario, cartaId } = req.query;
    if (cartaId) {
        GestorCartas.mostrarCarta(usuario, parseInt(cartaId.toString()), (error, resultado) => {
            if (error) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.json({ carta: resultado });
            }
        });
    }
    else {
        GestorCartas.listarCartas(usuario, (error, resultado) => {
            if (error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.json({ cartas: resultado });
            }
        });
    }
});
/**
* @route POST /cards
* @description Endpoint para añadir una nueva carta a la colección de un usuario.
* @param req Express request object, que contiene en el query `usuario` y en el body la `carta` a añadir.
* @param res Express response object usado para enviar la respuesta HTTP.
* @returns Devuelve un mensaje confirmando la adición de la carta o un mensaje de error en caso de fallo.
*/
app.post('/cards', (req, res) => {
    const { usuario } = req.query;
    const carta = req.body;
    GestorCartas.addCarta(usuario, carta, (error, response) => {
        if (error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.json({ message: response });
        }
    });
});
/**
* @route DELETE /cards
* @description Endpoint para eliminar una carta de la colección de un usuario.
* @param req Express request object, que contiene en el query `usuario` y `cartaId` de la carta a eliminar.
* @param res Express response object usado para enviar la respuesta HTTP.
* @returns Devuelve un mensaje confirmando la eliminación de la carta o un mensaje de error si la carta no se encuentra.
*/
app.delete('/cards', (req, res) => {
    const { usuario, cartaId } = req.query;
    GestorCartas.eliminarCarta(usuario, parseInt(cartaId.toString()), (error, response) => {
        if (error) {
            res.status(404).json({ error: error.message });
        }
        else {
            res.json({ message: response });
        }
    });
});
/**
* @route PATCH /cards
* @description Endpoint para modificar la información de una carta existente en la colección de un usuario.
* @param req Express request object, que contiene en el query `usuario` y en el body la información actualizada de la carta (`cartaModificada`).
* @param res Express response object usado para enviar la respuesta HTTP.
* @returns Devuelve un mensaje confirmando la modificación de la carta o un mensaje de error en caso de fallo.
*/
app.patch('/cards', (req, res) => {
    const { usuario } = req.query;
    const cartaModificada = req.body;
    GestorCartas.modificarCarta(usuario, cartaModificada, (error, resultado) => {
        if (error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.json({ message: resultado });
        }
    });
});
app.all('*', (_, res) => {
    res.status(501).send();
});
/**
* @route LISTEN
* @description Inicia el servidor y escucha en el puerto 3000.
* @returns Log de consola que indica que el servidor está activo en el puerto 3000.
*/
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
