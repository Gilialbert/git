/**
 * classe vista on es fan totes les funcions relacionades amb events del html
 */
export default class Vista {
  /**
   *constructor el cual agafa la constant "partida" del constructor game
   * @param {Game} partida
   */
  constructor(partida) {
    this.partida =partida;
    this.botons(this.partida);
    document.getElementById('treureCarta').disabled =true;
    document.getElementById('plantar').disabled =true;
  }

  /**
   * funcio que conte totes les funcions dels butons:
   * partida.començar
   * partida.donarcartajugador
   * partida.plantarse
   * i que es recargui la pagina
   * @param {Game}partida
   */
  botons(partida) {
    const pbg =this.partida.banca.guanyar;
    const pjg= this.partida.jugador.guanyar;
    document.getElementById('comencar').addEventListener('click', () => {
      partida.comencar();
      document.getElementById('comencar').disabled = true;
      document.getElementById('treureCarta').disabled = false;
      document.getElementById('plantar').disabled = false;
      console.log(partida);
    });
    document.getElementById('treureCarta').addEventListener('click', () => {
      if (pbg === false && pjg === false ) {
        partida.donarcartajugador();
      }
    });
    document.getElementById('plantar').addEventListener('click', () => {
      if (pbg === false && pjg === false ) {
        partida.plantarse();
      }
    });
    document.getElementById('reiniciar').addEventListener('click', () => {
      location.reload();
    });
  }
}

/**
 * @param{number} num
 */
export function guanyar(num) {
  if ( num === 1 ) {
    document.getElementById('resultat').innerHTML= 'la banca ha guanyat';
    document.getElementById('treureCarta').disabled =true;
    document.getElementById('plantar').disabled =true;
  } else if (num ===2 ) {
    document.getElementById('resultat').innerHTML= 'la banca ha guanyat';
    document.getElementById('treureCarta').disabled =true;
    document.getElementById('plantar').disabled =true;
  } else if (num === 3) {
    document.getElementById('resultat').innerHTML= 'el jugador ha guanyat';
  } else if (num === 4 ) {
    document.getElementById('resultat').innerHTML = 'la banca ha guanyat';
    document.getElementById('treureCarta').disabled =true;
    document.getElementById('plantar').disabled =true;
  } else if (num === 5) {
    document.getElementById('resultat').innerHTML = 'la jugador ha guanyat';
    document.getElementById('treureCarta').disabled =true;
    document.getElementById('plantar').disabled =true;
  }
}
/**
 * @param {string}ruta
 * @param {number}torn
 */
export function imatge2(ruta, torn) {
  const imag = document.createElement('img');
  imag.src = ruta;
  if (torn ===1) {
    const div = document.getElementById('jugador');
    div.appendChild(imag);
  } else if (torn ===2) {
    const div = document.getElementById('banca');
    div.appendChild(imag);
  }
}
