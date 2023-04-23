import Game from './game.js';
import Vista, {guanyar, imatge2} from './vista.js';
import Baralla from './baralla.js';
import Jugadors from './jugadors.js';
const baralla = new Baralla();
baralla.crearBaralla();
const jugador = new Jugadors( [], 0, false);
const banca = new Jugadors( [], 0, false);
const partida = new Game(baralla, jugador, banca, 0, 1);
partida.barrejar();
new Vista(partida);
window.onload = function() {
  console.log(partida);
};
/**
 * exporta el num del cas de la funcio victoria
 * @param {number}num
 */
export function expvict(num) {
  guanyar(num);
}
/**
 *exporta la ruta de la imatge i el "torn"
 * @param {string}ruta
 * @param {number}torn
 */
export function expimg2(ruta, torn) {
  imatge2(ruta, torn);
}


