import { expect } from 'chai';
import { Carta, CartaCriatura, CartaPlaneswalker, Color, TipoCarta, Rareza} from '../src/AppCartasMagic/Carta.js'

describe('Carta', () => {
  it('debe crear una instancia de Carta correctamente', () => {
    const carta = new Carta(1, 'Black Lotus', 0, Color.Negro, TipoCarta.Artefacto, Rareza.Rara, 'Añade tres manás de cualquier color.');
    expect(carta).to.be.an.instanceof(Carta);
    expect(carta.id).to.equal(1);
    expect(carta.name).to.equal('Black Lotus');
    expect(carta.cost).to.equal(0);
    expect(carta.color).to.equal('Negro');
    expect(carta.type).to.equal('Artefacto');
    expect(carta.rarity).to.equal('Rara');
    expect(carta.rules).to.equal('Añade tres manás de cualquier color.');
  });

  describe('CartaCriatura', () => {
    it('debe crear una instancia de CartaCriatura correctamente', () => {
      const cartaCriatura = new CartaCriatura(2, 'Elfo de Llanowar', 1, Color.Verde, TipoCarta.Criatura, Rareza.Comun, 'Añade un maná verde.', 1, 1);
      expect(cartaCriatura).to.be.an.instanceof(CartaCriatura);
      expect(cartaCriatura.power).to.equal(1);
      expect(cartaCriatura.resistance).to.equal(1);
    });
  });

  describe('CartaPlaneswalker', () => {
    it('debe crear una instancia de CartaPlaneswalker correctamente', () => {
      const cartaPlaneswalker = new CartaPlaneswalker(3, 'Jace, el escultor de mentes', 4, Color.Azul, TipoCarta.PlanesWalker, Rareza.Mitica, 'Puede activar habilidades de lealtad en cualquier turno.', 4);
      expect(cartaPlaneswalker).to.be.an.instanceof(CartaPlaneswalker);
      expect(cartaPlaneswalker.loyalty).to.equal(4);
    });
  });
});
