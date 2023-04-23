import Carta from '../carta.js';

describe('Carta', () => {
  test('Unit test del constructor', () => {
    const card = new Carta(5, 'oros');
    expect(card.valor).toBe(5);
    expect(card.imatge).toBe(
        `./img/${card.pal}/${card.pal}_${card.numero}.jpg`);
    const card2 = new Carta(10, 'Oros');
    expect(card2.valor).toBe(.5);
  });
});
