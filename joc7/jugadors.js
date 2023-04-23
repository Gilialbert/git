/**
 * classe on hi es guardaran la informacio del jugador
 */
export default class Jugadors {
  /**
     * @param {array}ma
     * @param {number}punts
     * @param {boolean}guanyar
     */
  constructor(ma, punts, guanyar) {
    this.ma=[];
    this.punts= punts;
    this.guanyar =guanyar;
  }
}
