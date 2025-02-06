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
// implementazione Input del Player per scegliere il nome + console.log() delle statistche Player

// Commit da fare:

// Funzione per scegliere randomicamente il Mostro dalla lista con la sua vita, difesa e % di fuga
// Funzione per combattere il mostro randomico o fuggire
// Perdere / vincere

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
  let player = creazionePlayer();
  console.log(`Ciao ${player.nome}`);
  console.log(`La tua vita: ${player.vita}`);
  console.log(`Il tuo attacco: ${player.attacco}`);
  console.log(`Il tuo difesa: ${player.difesa}`);
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
}
