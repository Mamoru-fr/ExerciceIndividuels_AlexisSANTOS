const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

function DrawMyPen(mois) {
    const month = (["mars", "avril", "mai", "juin"].includes(mois)) ? 1 : 2
    DrawLeads()
    for (let i = 0; i < calendrierDuCrayon[mois]; i++) {
        console.log("||||");
    }
    
    DrawEreaser(month)
}

function DrawLeads() {
    console.log(" /\\ \n/__\\");
}

function DrawEreaser(etage) {
    console.log("|__|");
    etage === 2 ? console.log("|  |\n|__|") : console.log("|__|");
}

const schoolYearMonth = ["septembre", "octobre","novembre","decembre","janvier","fevrier","mars","avril","mai","juin"]

for (let i = 0; i < schoolYearMonth.length; i++) {
    console.log(`Voici le Stylo du mois de ${schoolYearMonth[i]}:`);
    DrawMyPen(schoolYearMonth[i])
}
