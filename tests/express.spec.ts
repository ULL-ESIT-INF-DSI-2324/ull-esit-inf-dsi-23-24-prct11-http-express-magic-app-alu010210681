import { expect } from 'chai';
import { Carta, CartaCriatura, CartaPlaneswalker, Color, TipoCarta, Rareza} from '../src/AppCartasMagic/Carta.js'
import { GestorCartas } from '../src/AppCartasMagic/GestorCartasCallBack.js';
import fs from "fs";
import request from 'request';

const baseUrl = 'http://localhost:3000';

describe('GET /cards', () => {
  it('debería listar todas las cartas de un usuario cuando no se proporciona cartaId', (done) => {
    request(`${baseUrl}/cards?usuario=prueba`, { json: true }, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body.cartas).to.be.include('ID: 2');
        expect(body.cartas).to.be.include('ID: 3');
        done();
      }
    });
  });
  
  it('debería devolver una carta específica cuando se proporciona cartaId', (done) => {
    request(`${baseUrl}/cards?usuario=prueba&cartaId=2`, { json: true }, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.have.property('carta');
        done();
      }
    });
  });

  it('debería retornar 404 si no se encuentra la carta específica', (done) => {
    request(`${baseUrl}/cards?usuario=prueba&cartaId=999`, { json: true }, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(404);
        expect(body).to.have.property('error');
        done();
      }
    });
  });
  
});

describe('POST /cards', () => {
  it('debería añadir una nueva carta', (done) => {
    const nuevaCarta = {  id: 1, name: "Black Lotus", cost:10000, color: "Blanco", type: "Tierra", rarity: "Comun", rules: "reglas"};
    request.post({ url: `${baseUrl}/cards?usuario=prueba`, body: nuevaCarta, json: true }, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.have.property('message');
        done();
      }
    });
  });
  it('debería devolver error al añadir una carta a un usuario que no existe', (done) => {
    const nuevaCarta = {  id: 1, name: "Black Lotus", cost:10000, color: "Blanco", type: "Tierra", rarity: "Comun", rules: "reglas"};
    request.post({ url: `${baseUrl}/cards?usuario=UsuarioNoExiste`, body: nuevaCarta, json: true }, (error, res, body) => {
      if (error) {
        expect(res.statusCode).to.equal(400);
        done();
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.have.property('message');
        done();
      }
    });
  });
});

describe('DELETE /cards', () => {
  it('debería eliminar una carta', (done) => {
    request.delete(`${baseUrl}/cards?usuario=prueba&cartaId=1`, { json: true }, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.have.property('message');
        done();
      }
    });
  });
});

describe('PATCH /cards', () => {
  it('debería actualizar una carta', (done) => {
    const infoActualizada = { id: 2, name: "Tarmogoyf", cost: 2000, color: "Verde", type: "Criatura", rarity: "Mitica", rules: "2", power: 50, resistance: 100};
    request.patch({ url: `${baseUrl}/cards?usuario=prueba`, body: infoActualizada, json: true }, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.have.property('message');
        done();
      }
    });
  });
});

describe('Rutas No Definidas', () => {
  it('debería retornar 501 para rutas no definidas', (done) => {
    request.get(`${baseUrl}/undefinedRoute`, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.equal(501);
        done();
      }
    });
  });
});
