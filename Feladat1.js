let tomb = [];
for (let i = 0; i < 10; i++) {
    tomb[i] = Math.floor((Math.random()*100)+1);
}

function osszehasonlit(a, b) {
    if (a < b){
        return 1;
    } else if ( a > b){
        return -1;
    } else {
        return 0;
    }
}

tomb2 = tomb.sort(osszehasonlit);

for (let i = 0; i < tomb2.length; i++) {
    console.log(tomb2[i]);
}