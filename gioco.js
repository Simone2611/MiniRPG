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
// Funzione per combattere controllare se ha vinto e continuare se nessuno è morto
// Funzione per difendersi dal mostro, fuggire e curarsi
// Commit da fare:
// Colorare e decorare i console.log e commenti nel codice

const input = prompt("Inserire un nickname: "); // chiede al player l'input per il nickname
// se il player cancella non succede niente
if (input !== null) {
  function creazionePlayer() {
    return {
      nome: input, // nome del player
      vita: 100, // vita player
      attacco: Math.floor(Math.random() * 60) + 10, // attacco min 10 max 70
      difesa: Math.floor(Math.random() * 40) + 10, // difesa min 10 max 50
      pozioni: 3,
    };
  }

  let mostri = [
    {
      nome: "Slime",
      vita: 30,
      attacco: Math.floor(Math.random() * 5) + 5, // attacco min 5 max 10
      difesa: 0, // difesa 0 per lo slime
      fuga: 90,
    },
    {
      nome: "King Slime",
      vita: 70,
      attacco: Math.floor(Math.random() * 60) + 30, // attacco min 30 max 90
      difesa: Math.floor(Math.random() * 30) + 20, // attacco min 20 max 50
      fuga: 40,
    },
    {
      nome: "GOD Slime",
      vita: 400,
      attacco: Math.floor(Math.random() * 200) + 70, // attacco min 70 max 270
      difesa: Math.floor(Math.random() * 200) + 50, // attacco min 50 max 250
      fuga: 10,
    },
  ];

  let player = creazionePlayer();
  console.log(`%c👋 Ciao ${player.nome}`, "color: yellow"); // nome player
  console.log(`%c❤️ La tua vita: ${player.vita}`, "color: lightgreen"); // vita player
  console.log(`%c🧪 Le tue pozioni: ${player.pozioni}`, "color: yellowgreen"); // vita player
  console.log(`%c⚔️ Il tuo attacco: ${player.attacco}`, "color: orange"); // attacco player
  console.log(`%c🛡️ Il tuo difesa: ${player.difesa}`, "color: blue"); // difesa player
  console.log("%c////////////////////////////////////", "color: black"); // spazio per bellezza

  let mostroDaCombattere = Math.floor(Math.random() * 3); // numero random per scegliere uno dei mostri
  console.log(
    `%c👹 Combatterai contro: ${mostri[mostroDaCombattere].nome}`,
    "color: red"
  ); // nome mostro
  console.log(
    `%c❤️ Vita: ${mostri[mostroDaCombattere].vita}`,
    "color: lightgreen"
  ); // vita mostro
  console.log(
    `%c⚔️ Attacco: ${mostri[mostroDaCombattere].attacco}`,
    "color: orange"
  ); // attacco mostro
  console.log(
    `%c🛡️ Difesa: ${mostri[mostroDaCombattere].difesa}`,
    "color: blue"
  ); // difesa mostro
  console.log("%c////////////////////////////////////", "color: black"); // spazio per bellezza

  domanda();

  function domanda() {
    let opzioneUtente = prompt(
      `Cosa vuoi fare? (attacca, difenditi, curati o fuggi)`
    );

    if (opzioneUtente.toLocaleLowerCase() === "attacca") {
      attacco();
    } else if (opzioneUtente.toLocaleLowerCase() === "difenditi") {
      difesa();
    } else if (opzioneUtente.toLocaleLowerCase() === "fuggi") {
      fuggi();
    } else if (opzioneUtente.toLocaleLowerCase() === "curati") {
      curati();
    } else {
      console.log("Errore, riprova");
    }
  }

  function curati() {
    // controllo se ci sono pozioni
    if (player.pozioni > 0) {
      let cura = Math.floor(Math.random() * 30) + 10; // min 10 max 40
      player.vita = player.vita + cura; // update della vita del player
      player.pozioni = player.pozioni - 1; // update delle pozioni
      console.log(
        "%c🧪 Ti sei curato adesso hai: " + player.vita + " vita",
        "color: yellowgreen"
      ); // informo l'utente della sua vita
      console.log(
        "%c🧪 Pozioni rimanenti: " + player.pozioni,
        "color: yellowgreen"
      ); // informo l'utente delle pozioni rimanenti

      // Mostro attacca
      let attaccoMostro =
        player.vita - (mostri[mostroDaCombattere].attacco - player.difesa);
      // Controllo se il mostro fa almeno 1 di danno
      if (mostri[mostroDaCombattere].attacco - player.difesa > 0) {
        player.vita = attaccoMostro;
      }

      console.log(
        "%c💔 " +
          mostri[mostroDaCombattere].nome +
          " ti attacca e ti infligge: " +
          (mostri[mostroDaCombattere].attacco - player.difesa),
        "color: red"
      );
      // Controllo se il player muore
      if (player.vita <= 0) {
        console.log("💀 Hai perso");
      } else {
        console.log("%c❤️ La tua vita: " + player.vita, "color: lightgreen");
        console.log("%c////////////////////////////////////", "color: black");
        domanda();
      }
    } else {
      console.log("%c❌ Non hai cure!", "color: yellowgreen");
      let attaccoMostro =
        player.vita - (mostri[mostroDaCombattere].attacco - player.difesa);
      // Controllo se il mostro fa almeno 1 di danno
      if (mostri[mostroDaCombattere].attacco - player.difesa > 0) {
        player.vita = attaccoMostro;
      }

      console.log(
        "%c💔 " +
          mostri[mostroDaCombattere].nome +
          " ti attacca e ti infligge: " +
          (mostri[mostroDaCombattere].attacco - player.difesa),
        "color: red"
      );
      // Controllo se muore il player
      if (player.vita <= 0) {
        console.log("💀 Hai perso");
      } else {
        console.log("%cLa tua vita: " + player.vita, "color: lightgreen");
        console.log("%c////////////////////////////////////", "color: black");
        domanda();
      }
    }
  }

  function fuggi() {
    let fuggi = Math.floor(Math.random() * 100);
    // Controllo controllo se il numero fuggi è minore del mostro es: Slime = 90 se fuggi è tra 90 - 100 non fuggi
    if (fuggi < mostri[mostroDaCombattere].fuga) {
      console.log("💨 Sei scappato!");
    } else {
      let attaccoMostro =
        player.vita - (mostri[mostroDaCombattere].attacco - player.difesa);
      // Controllo se il mostro fa almeno 1 di danno
      if (mostri[mostroDaCombattere].attacco - player.difesa > 0) {
        player.vita = attaccoMostro;
      }

      console.log(
        "%c💔 " +
          mostri[mostroDaCombattere].nome +
          " ti attacca e ti infligge: " +
          (mostri[mostroDaCombattere].attacco - player.difesa),
        "color: red"
      );
      // Controllo se muore il player
      if (player.vita <= 0) {
        console.log("💀 Hai perso");
      } else {
        console.log("%cLa tua vita: " + player.vita, "color: lightgreen");
        console.log("%c////////////////////////////////////", "color: black");
        domanda();
      }
    }
  }

  function difesa() {
    console.log("%c🛡️ Ti difendi", "color: blue");

    let attaccoMostro =
      player.vita - (mostri[mostroDaCombattere].attacco - player.difesa);
    // Controllo se il mostro fa almeno 1 di danno
    if (mostri[mostroDaCombattere].attacco - player.difesa > 0) {
      player.vita = attaccoMostro;
    }

    console.log(
      "%c💔 " +
        mostri[mostroDaCombattere].nome +
        " ti attacca e ti infligge: " +
        (mostri[mostroDaCombattere].attacco - player.difesa),
      "color: red"
    );
    // Controllo se il player muore
    if (player.vita <= 0) {
      console.log("💀 Hai perso");
    } else {
      console.log("%c❤️ La tua vita: " + player.vita, "color: lightgreen");
      console.log("%c////////////////////////////////////", "color: black");
      domanda();
    }
  }

  function attacco() {
    let attacco =
      mostri[mostroDaCombattere].vita -
      (player.attacco - mostri[mostroDaCombattere].difesa);
    // Controllo se il mostro fa almeno 1 di danno
    if (player.attacco - mostri[mostroDaCombattere].difesa > 0) {
      mostri[mostroDaCombattere].vita = attacco;
    }
    // Controllo se il mostro muore
    if (mostri[mostroDaCombattere].vita <= 0) {
      console.log("🎉 Hai vinto!");
    } else {
      console.log(
        "%c⚔️ Hai inflitto: " +
          (player.attacco - mostri[mostroDaCombattere].difesa),
        "color: orange"
      );
      console.log(
        "%c❤️ " +
          mostri[mostroDaCombattere].nome +
          " adesso ha: " +
          mostri[mostroDaCombattere].vita +
          " di vita",
        "color: red"
      );
      console.log("%c////////////////////////////////////", "color: black");

      let attaccoMostro =
        player.vita - (mostri[mostroDaCombattere].attacco - player.difesa);
      // Controllo se il mostro fa almeno 1 di danno
      if (mostri[mostroDaCombattere].attacco - player.difesa > 0) {
        player.vita = attaccoMostro;
      }

      console.log(
        "%c💔 " +
          mostri[mostroDaCombattere].nome +
          " ti attacca e ti infligge: " +
          (mostri[mostroDaCombattere].attacco - player.difesa),
        "color: red"
      );
      // Controllo se il player muore
      if (player.vita <= 0) {
        console.log("💀 Hai perso");
      } else {
        console.log("%c❤️ La tua vita: " + player.vita, "color: lightgreen");
        console.log("%c////////////////////////////////////", "color: black");
        domanda();
      }
    }
  }
}
