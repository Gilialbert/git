import {expvict, expimg2} from './main.js';
/**
 * classe on hi han les funcions on funciona el joc
 */
export default class Game {
  /**
   * constructor game
   * @param {Baralla}baralla
   * @param {Jugadors}jugador1
   * @param {Jugadors}jugador2
   * @param {number}torn
   * @param {number}contador
   */
  constructor(baralla, jugador1, jugador2, torn, contador) {
    this.baralla= baralla;
    this.jugador = jugador1;
    this.banca = jugador2;
    this.torn = torn;
    this.contador = contador;
  }
  /**
   *funcio que s'executa al presionar el boto plantarse
   *nomes es podrà executar si ningun dels dos jugadors a guanyat
   */
  plantarse() {
    if ( this.banca.guanyar === false && this.jugador.guanyar === false) {
      this.torn= 2;
      this.contador = this.contador +1;
      this.movimentbanca();
    }
  }
  /**
   *funcio que barreja les cartes de l'array i
   * la manera en que les barreja es que agafa dues posicions de l'array
   *una es per ordre d'aquesta
   * l'altre es un numero aleatori
   */
  barrejar() {
    const baralla=this.baralla.cartas;
    const bllargada= this.baralla.cartas.length;
    for (let i = bllargada - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [baralla[i], baralla[j]] = [baralla[j], baralla[i]];
    }
  }
  /**
   *funcio que dona carta a la ma de la banca
   */
  donarcartabanca() {
    const baralla=this.baralla.cartas;
    const bllargada= this.baralla.cartas.length;
    const torn = 2;
    const ultimaCarta= baralla[bllargada-1];
    const cartavalor = bllargada-1;
    const cardValue= baralla[cartavalor].valor;
    expimg2(baralla[cartavalor].imatge, torn);
    baralla.pop();
    this.banca.ma.push(ultimaCarta);
    this.banca.punts = this.banca.punts + cardValue;
  }
  /**
   *funcio que dona una carta ala ma del jugador
   */
  donarcartajugador() {
    const baralla=this.baralla.cartas;
    const bllargada= this.baralla.cartas.length;
    const torn = 1;
    const ultimaCarta= baralla[bllargada-1];
    const cartavalor = bllargada-1;
    const cardValue= baralla[cartavalor].valor;
    expimg2(baralla[cartavalor].imatge, torn);
    baralla.pop();
    this.jugador.ma.push(ultimaCarta);
    this.jugador.punts = this.jugador.punts + cardValue;
    this.victoria();
  }
  /**
   *funcio que crida un cop per jugador una carta
   */
  comencar() {
    this.donarcartabanca();
    this.donarcartajugador();
  }
  /**
   * funcionament del moviment de la banca
   */
  movimentbanca() {
    const bancag =this.banca.guanyar;
    const jugadorg =this.jugador.guanyar;
    const bancap =this.banca.punts;
    const jugadorp =this.jugador.punts;
    if ( bancag === false && jugadorg === false && this.contador <7) {
      if (bancap <= jugadorp && bancap <7) {
        this.donarcartabanca();
        this.plantarse();
      } else if (bancap<= 7.5 && bancap > 6.5) {
        this.victoria();
      } else if (bancap > jugadorp && bancap >= 7.5 ) {
        this.victoria();
      }
    } else if (this.contador === 7) {
      this.victoria();
    }
  }
  /**
   *comprovacions de si algun jugador ha guanyat
   */
  victoria() {
    const jugadorp = this.jugador.punts;
    const bancap = this.banca.punts;
    if (jugadorp> 7.5) {
      this.banca.guanyar =true;
      const num =1;
      expvict(num);
    } else if (jugadorp === bancap && this.torn === 2) {
      this.banca.guanyar = true;
      const num =2;
      expvict(num);
    } else if (jugadorp > bancap && jugadorp <= 7.5 && this.torn ===2 ) {
      this.jugador.guanyar = true;
      const num =3;
      expvict(num);
    } else if (bancap > jugadorp && bancap <= 7.5 && this.torn ===2 ) {
      this.banca.guanyar = true;
      const num =4;
      expvict(num);
    } else if (bancap > 7.5 && this.torn=== 2) {
      this.jugador.guanyar = true;
      const num =5;
      expvict(num);
    }
  }
}


