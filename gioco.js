// Prima cosa da fare scegliere nome utente
// Vita = 100
// attacco e difesa = valore random
// Gestire opzioni : attccare curarsi e fuggire
// Mostro random da un arr di obj
// fine gioco gestione scoffitta, vittoria o fuga
// il giocatore può curarsi 3 volte max
// Fuga in base al mostro

// oltre al gioco uso di Git pubblica con commit con commenti sensati

// voto 1/100
// Qualità codice
// Organizzazione
// qualità della cronologia

// fatto:
// Creazione Obj Player (nome, vita, attacco random e difesa random), Mostri (vita, attacco random e difesa random)
// implementazione Input del Player per scegliere il nome + console.log() delle statistche Player + Aggiunta fuga a ogni mostro
// Funzione per scegliere randomicamente il Mostro dalla lista con la sua vita, difesa e % di fuga e scelta utente (attaccare, difendersi e fuggire) + colori alla console
// Commit da fare:
// Funzione per combattere / difendersi dal mostro randomico o fuggire
// Funzione per calcolare se l'utente ha vinto o perso (vita <= 0 Perso, vita > 0 && mostro[?].vita <=0 Vinto)

const input = prompt("Inserire un nickname: "); // chiede al player l'input per il nickname
// se il player cancella non succede niente
if (input !== null) {
  function creazionePlayer() {
    return {
      nome: input, // nome del player
      vita: "100", // vita player
      attacco: Math.floor(Math.random() * 60) + 10, // attacco min 10 max 70
      difesa: Math.floor(Math.random() * 60) + 10, // difesa min 10 max 70
    };
  }

  let mostri = [
    {
      nome: "Slime",
      vita: "30",
      attacco: Math.floor(Math.random() * 5) + 5, // attacco min 5 max 10
      difesa: 0, // difesa 0 per lo slime
      fuga: 90,
    },
    {
      nome: "King Slime",
      vita: "70",
      attacco: Math.floor(Math.random() * 30) + 10, // attacco min 10 max 40
      dattacco: Math.floor(Math.random() * 10) + 5, // attacco min 5 max 15
      fuga: 40,
    },
    {
      nome: "GOD Slime",
      vita: "400",
      attacco: Math.floor(Math.random() * 50) + 30, // attacco min 30 max 80
      dattacco: Math.floor(Math.random() * 30) + 10, // attacco min 10 max 30
      fuga: 10,
    },
  ];

  let player = creazionePlayer();
  console.log(`%cCiao ${player.nome}`, "color: yellow"); // nome player
  console.log(`%cLa tua vita: ${player.vita}`, "color: lightgreen"); // vita player
  console.log(`%cIl tuo attacco: ${player.attacco}`, "color: orange"); // attacco player
  console.log(`%cIl tuo difesa: ${player.difesa}`, "color: blue"); // difesa player
  console.log("%c////////////////////////////////////", "color: black");
  let mostroDaCombattere = Math.floor(Math.random() * 2); // numero random per scegliere uno dei mostri
  console.log(
    `%cCombatterai contro: ${mostri[mostroDaCombattere].nome}`,
    "color: red"
  ); // nome mostro
  console.log(
    `%cVita: ${mostri[mostroDaCombattere].vita}`,
    "color: lightgreen"
  ); // vita mostro
  console.log(
    `%cAttacco: ${mostri[mostroDaCombattere].attacco}`,
    "color: orange"
  ); // attacco mostro
  console.log(`%cDifesa: ${mostri[mostroDaCombattere].difesa}`, "color: blue"); // difesa mostro

  let opzioneUtente = prompt(`Cosa vuoi fare? (attacca, difenditi o fuggi)`);
}
