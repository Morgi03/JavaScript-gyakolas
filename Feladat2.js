function randomszam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let Macskak = [];
for (let i = 0; i < 20; i++) {
  let macska = { nev : "Cirmos"+(i+1), eletkor : randomszam(2,10) } ;
  Macskak[i] = macska;
}

