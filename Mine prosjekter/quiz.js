// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");

// Array med spørsmål
let quiz = [
  { sporsmaal: "Hva er det riktige navnet på Fe_{2}O_{3}?",
    alternativer: ["Dijernoksid", "Jern(II)oksid", "Jern(III)oksid","Jernoksid"],
    fasit: "Jern(III)oksid"},
  { sporsmaal: "Hvilke av molekylene er ikke en dipol? ",
    alternativer: ["H_{2}O", "CO", "CH_{4}", "HI"],
    fasit: "CH_{4}"},
  { sporsmaal: " Hva er formelen for Impuls?",
    alternativer: ["I=p-p_{0}", "I=mv-mv_{0}", "∆P", "mat"],
    fasit:["I=p-p_{0}", "I=mv-mv_{0}", "∆P", "mat"]},
    { sporsmaal: " Hva er riktig verdi til eulerstallet?",
    alternativer: ["2.71826", "2.71827", "2.71828", "2.71829"],
    fasit:["I=p-p_{0}", "I=mv-mv_{0}", "∆P", "mat"]}

];

// Skriver spørsmålene til nettsiden
for (let i = 0; i < quiz.length; i++){
  // Lager et <div>-element til hvert spørsmål
  let sporsmaalEl = document.createElement("div");
  // Gir <div>-elementet klassen checkboxradio
  sporsmaalEl.className = "checkboxradio";
  // Lager et <h3>-elementet til spørsmålet
  let h3El = document.createElement("h3");
  // Legger til spørsmålet i <h3>-elementet
  h3El.innerHTML = quiz[i].sporsmaal;
  // Legger til <h3>-elementet i <div>-elementet
  sporsmaalEl.appendChild(h3El);

  // Lager elementer for hvert av alternativene
  for (let j = 0; j < quiz[i].alternativer.length; j++) {
    // Lager en <label>
    let labelEl = document.createElement("label");
    // Lager en radioknapp
    let radioEl = document.createElement("input");
    // Angir typen radio
    radioEl.type = "radio";
    // Bruker i som navn for å gi alternativene til samme spørsmål likt name
    radioEl.name = i;

    // Sjekker om dette alternativet er det riktige. 
    // Hvis det er riktig, bruker vi "riktig" som value, ellers "galt".
    if (quiz[i].fasit === quiz[i].alternativer[j]) {
      radioEl.value = "riktig";
    } else {
      radioEl.value = "galt";
    }
    
    // Legger til knappen i <label>-elementet
    labelEl.appendChild(radioEl);

    // Legger til svaralternativ
    labelEl.innerHTML += quiz[i].alternativer[j];

    // Legger til <label>-elementet i <div>-elementet
    sporsmaalEl.appendChild(labelEl);
  }

  // Legger til <div>-elementet i quiz-elementet
  quizEl.appendChild(sporsmaalEl);
}

// Legger til en knapp til slutt
let knappEl = document.createElement("button");
knappEl.innerHTML = "Sjekk svar";

// Legger til lytter på knappen
knappEl.addEventListener("click", finnPoeng);

// Legger til knappen på nettsiden
quizEl.appendChild(knappEl);

// Funksjon som beregner og skriver ut poengsum
function finnPoeng (){
  // Henter alle radioknapper på siden
  alleRadioEl = document.querySelectorAll("input[type='radio']");

  // Variabel for å telle poeng
  let antallPoeng = 0;

  // Går gjennom alle radioknappene
  for (var i = 0; i < alleRadioEl.length; i++) {
    // Hvis en radioknapp er haket av
    if (alleRadioEl[i].checked) {
      // Undersøk om alternativet er riktig
      if (alleRadioEl[i].value === "riktig") {
        // Hvis riktig, gi ett poeng
        antallPoeng ++;
      }
    }
  }

  resultatEl.innerHTML = "Du fikk " + antallPoeng + " poeng!";
}
