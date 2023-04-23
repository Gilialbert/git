import Baralla from '../baralla.js';
describe('Baralla', () => {
  test('Unit test de Deck, longitud', () => {
    const deck = new Baralla();
    deck.crearBaralla();
    expect(deck.cartas.length).toBe(40);
  });
});
