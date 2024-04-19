import { expect } from 'chai';
import { Carta, CartaCriatura, CartaPlaneswalker, Color, TipoCarta, Rareza} from '../src/AppCartasMagic/Carta.js'
import { GestorCartasPromises } from '../src/AppCartasMagic/GestorCartasPromises.js';
import { GestorCartas } from '../src/AppCartasMagic/GestorCartasCallBack.js';
import fs from "fs";

describe('GestorCartasPromises Promises', () => {
  const usuario = 'usuarioTest2';

  const cartaTest3: Carta = { id: 123, name: "CartaTest3", cost: 10003, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };
  const cartaTestModificada3: Carta = { id: 123, name: "CartaTestModificada3", cost: 10003, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };
  const cartaNoExiste4: Carta = { id: 4, name: "CartaTest4", cost: 10004, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };

  
  it('debería añadir una carta nueva correctamente', (done) => {
    GestorCartas.addCarta(usuario, cartaTest3, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta agregada exitosamente.');
      done();
    });
  });
  
  it ('debería modificar una carta que ya existe', () => {
    return GestorCartasPromises.modificarCarta(usuario, cartaTestModificada3)
    .then((response) => {
      expect(response).to.equal('Carta modificada');
    })
    .catch((error) => {
      expect(error).to.be.undefined;
    });
  });

  it('debería mostrar un error al modificar una carta que no existe', () => {
    return GestorCartasPromises.modificarCarta(usuario, cartaNoExiste4)
    .then((response) => {
      expect(response).to.be.undefined;
    })
    .catch((error) => {
      expect(error).to.equal('La carta no existe en la coleccion');
    });
  });

  it('debería mostrar un error al modificar una carta que no existe', () => {
    return GestorCartasPromises.modificarCarta("NoExisto", cartaTestModificada3)
    .then((response) => {
      expect(response).to.be.undefined;
    })
    .catch((error) => {
      expect(error).to.equal('La carta no existe en la coleccion');
    });
  });

  it('debería eliminar una carta existente', () => {
    return GestorCartasPromises.eliminarCarta(usuario, cartaTest3.id)
    .then((response) => {
      expect(response).to.equal('Carta eliminada');
    })
    .catch((error) => {
      expect(error).to.be.undefined;
    });
  });

  it('debería devolver un error al eliminar una carta que no existe', () => {
    return GestorCartasPromises.eliminarCarta(usuario, 12312312313)
    .then((response) => {
      expect(response).to.be.undefined;
    }).catch((error) => {
      expect(error).to.equal('La carta no existe en la coleccion')
    });
  });

});