// for in and for of loop 

const names = ["Youtube", "Instagram", "Facebook", "Netflix", "Amazon"];

for (const n of names) {
    console.log(n);
}

const symbols = {
    yt : "Youtube", 
    Ig : "Instagram",
    Fb : "Facebook",
    Nf : "Netflix",
    Az : "Amazon"
}

for (const n in symbols) {
    console.log(`${n} : ${symbols[n]}`);
}
