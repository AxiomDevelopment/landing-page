let welcome1 = "//Welcome to";
let welcome2 = "AxiomDevelopment();";

let header1 = document.getElementById("header1");
let header2 = document.getElementById("header2");

for (let i = 0; i < welcome1.length; i++) {
    setTimeout(() => {
        header1.innerHTML += welcome1[i];
    }, 40 * i);
}

setTimeout(() => {
    header1.classList.add("inactive");
    header2.classList.remove("inactive");
}, welcome1.length * 52);

for (let i = 0; i < welcome2.length; i++) {
    setTimeout(() => {
        header2.innerHTML += welcome2[i];
    }, 40 * i + welcome1.length * 70);
}

setTimeout(() => {
    header2.classList.add("inactive");
}, welcome1.length * 70 + welcome2.length * 140);