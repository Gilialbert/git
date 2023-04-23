import Jugadors from '../jugadors.js';


describe('Jugadors', () => {
  test('Unit test de Jugadors constructor', () => {
    const jugador = new Jugadors([], 0, false);
    expect(jugador.ma).toEqual([]);
    expect(jugador.punts).toBe(0);
    expect(jugador.guanyar).toBe(false);
  });
});
