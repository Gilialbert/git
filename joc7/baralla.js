import Carta from './carta.js';
/**
 * classe on conte ta la informacio de la baralla
 */
export default class Baralla {
  /**
   *constructor on es crea un array per guardar les cartes
   */
  constructor() {
    this.cartas = [];
  }
  /**
  * funcio que crea la baralla
   */
  crearBaralla() {
    for (const palo of Carta.pals) {
      for (const numero of Carta.numeros) {
        this.cartas.push(new Carta(numero, palo));
      }
    }
  }
}


