let tomb = [];
for (let i = 0; i < 10; i++) {
    tomb[i] = Math.floor((Math.random()*100)+1);
}

tomb2 = tomb.sort();

for (let i = 0; i < tomb2.length; i++) {
    console.log(tomb2[i]);
}