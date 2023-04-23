import Game from '../game.js';
import Jugadors from '../jugadors.js';
import Baralla from '../baralla.js';

describe('Game', ()=> {
  test('Unit test Game constructor', ()=>{
    const baralla1 = new Baralla();
    baralla1.crearBaralla();
    const jugador1= new Jugadors( [], 0, false);
    const jugador2 = new Jugadors( [], 0, false);
    const game = new Game(baralla1, jugador1, jugador2, 0, 1);
    expect(game.baralla.cartas.length).toBe(40);
  });
});
