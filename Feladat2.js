function randomszam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let Macskak = [];
for (let i = 0; i < 20; i++) {
  let macska = { nev : "Cirmos"+(i+1), eletkor : randomszam(2,10) } ;
  Macskak[i] = macska;
}

for (let i = 0; i < Macskak.length; i++) {
    
    if (Macskak[i].eletkor == 2) {
        console.log("Név: "+Macskak[i].nev+"  életkor:"+Macskak[i].eletkor);
    }   
}