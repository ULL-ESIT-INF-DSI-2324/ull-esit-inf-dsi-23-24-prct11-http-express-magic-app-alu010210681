import { expect } from 'chai';
import { Carta, CartaCriatura, CartaPlaneswalker, Color, TipoCarta, Rareza} from '../src/AppCartasMagic/Carta.js'
import { GestorCartas } from '../src/AppCartasMagic/GestorCartasCallBack.js';
import fs from "fs";

describe('GestorCartas', function() {
  const usuarioTest = 'usuarioTest';
  const cartaTest: Carta = { id: 1, name: "CartaTest", cost: 10000, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };
  const cartaTest2: Carta = { id: 2, name: "CartaTest2", cost: 10002, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };
  const cartaTest3: Carta = { id: 3, name: "CartaTest3", cost: 10003, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };
  const cartaTest4: Carta = { id: 4, name: "CartaTest4", cost: 10004, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" }
  

  it('debería añadir una carta nueva correctamente', (done) => {
    GestorCartas.addCarta(usuarioTest, cartaTest, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta agregada exitosamente.');
      done();
    });
  });

  it('debería añadir una carta nueva correctamente', (done) => {
    GestorCartas.addCarta(usuarioTest, cartaTest2, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta agregada exitosamente.');
      done();
    });
  });


  it('debería añadir una carta nueva correctamente', (done) => {
    GestorCartas.addCarta(usuarioTest, cartaTest3, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta agregada exitosamente.');
      done();
    });
  });

  it('debería añadir una carta nueva correctamente', (done) => {
    GestorCartas.addCarta(usuarioTest, cartaTest4, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta agregada exitosamente.');
      done();
    });
  });

  it('debería indicar que la carta ya existe cuando se intenta añadir de nuevo', (done) => {
    GestorCartas.addCarta(usuarioTest, cartaTest, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('La carta ya existe en la colección.');
      done();
    });
  });



  it('debería devolver un error cuando se intenta mostrar una carta que no existe', (done) => {
    const cartaInexistenteId = 999; // Asegúrate de que este ID no exista en tu colección de prueba.

    GestorCartas.mostrarCarta(usuarioTest, cartaInexistenteId, (error, resultado) => {
      expect(error).to.not.be.undefined;
      expect((error as Error).message).to.equal(`Error: No se encontró la carta con ID ${cartaInexistenteId} para el usuario ${usuarioTest}.`);
      expect(resultado).to.be.undefined;
      done();
    });
  });

  it('debería listar correctamente las cartas existentes para un usuario', (done) => {
    GestorCartas.listarCartas(usuarioTest, (error, resultado) => {
      expect(error).to.be.undefined;
      // Verifica que el resultado incluya información relevante de ambas cartas
      expect(resultado).to.include("CartaTest");
      // Aquí podrías añadir más expectativas según la estructura de tus datos
      done();
    });
  });


  it('debería indicar que el usuario no tiene cartas en su colección si el directorio está vacío', (done) => {
    const usuarioSinCartas = 'usuarioSinCartas';
    GestorCartas.listarCartas(usuarioSinCartas, (error, resultado) => {
      expect(error).to.be.undefined;
      expect(resultado).to.equal('El usuario no tiene cartas en su colección.');
      done();
    });
  });

  it('debería manejar errores al intentar modificar una carta que no existe', (done) => {
    const cartaInexistente: Carta = { id: 999, name: "Inexistente", cost: 100, color: Color.Negro, type: TipoCarta.Artefacto, rarity: Rareza.Rara, rules: "Reglas de Black Lotus" };

    GestorCartas.modificarCarta(usuarioTest, cartaInexistente, (error, resultado) => {
      expect(error).to.not.be.undefined;
      expect(error?.message).to.equal('La carta no existe en la colección.');
      expect(resultado).to.be.undefined;
      done();
    });
  });

  it('debería devolver un error al intentar eliminar una carta que no existe en la colección', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, 999, (error, response) => {
      expect(error).to.not.be.undefined;
      expect(error?.message).to.equal('La carta no existe en la colección.');
      expect(response).to.be.undefined;
      done();
    });
  });

  it('debería eliminar una carta existente', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, cartaTest.id, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta eliminada exitosamente.');
      done();
    });
  });

  it('debería eliminar una carta existente', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, cartaTest2.id, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta eliminada exitosamente.');
      done();
    });
  });

  it('debería eliminar una carta existente', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, cartaTest3.id, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta eliminada exitosamente.');
      done();
    });
  });

  it('debería eliminar una carta existente', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, cartaTest4.id, (error, response) => {
      expect(error).to.be.undefined;
      expect(response).to.equal('Carta eliminada exitosamente.');
      done();
    });
  });
  

  it('debería devolver un error al borrar un carta de un directorio que no existe', (done) => {
    GestorCartas.eliminarCarta("NoExisto", 12312412, (error, response) => {
      expect(error).to.be.instanceOf(Error);
      expect(response).to.be.undefined;
      expect(response).to.be.undefined;
      done();
    });
  });
  
  it('debería eliminar una carta existente', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, 12312412, (error, response) => {
      if (error) {
        expect(error).to.not.be.undefined;
        expect(response).to.be.undefined;
        expect(error.message).to.equal('La carta no existe en la colección.');
        done();
      }
    });
  });

  it('debería fallar al intentar eliminar una carta que no existe', (done) => {
    GestorCartas.eliminarCarta(usuarioTest, 9999, (error, response) => {
      if (error) {
        expect(error).to.not.be.undefined;
        expect(response).to.be.undefined;
        expect(error.message).to.equal('La carta no existe en la colección.');
        done();
      }
    });
  });

});