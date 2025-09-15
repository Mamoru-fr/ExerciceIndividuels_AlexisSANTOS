function afficherPointeSapin(hauteur) {
    console.log(" ".repeat(hauteur+1) + "+");
    for (let i = 0; i < hauteur; i++) {
        console.log(" ".repeat(hauteur-i) + 
        "/" + "*".repeat(i) + "|" + 
        "*".repeat(i) + "\\"
    );
    }
    
}

function afficherEtoiles(n) {
    console.log("*".repeat(n));
}

function afficherTriangleDroite(n) {
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(i) + "\\");
    }
}

function afficherTriangleGauche(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n-i) + "/" + "*".repeat(i));
    }
    
}

function afficherSapin(etages, hauteur_etage) {
    console.log(" ".repeat(hauteur_etage+etages+1) + "+");
    for (let i = 0; i < etages; i++) {
        afficherEtage(hauteur_etage, i, etages-i)
    }
    for (let i = 0; i < 3; i++) {
        console.log(" ".repeat(hauteur_etage+etages) + "###");
    }
    
}

function afficherEtage(hauteur, pointe_offset, espacement ) {
    const espace = hauteur + pointe_offset + espacement
    for (let i = pointe_offset; i < hauteur + pointe_offset; i++) {
        console.log(" ".repeat(espace-i) + 
        "/" + decoration().repeat(i) + "|" + 
        decoration().repeat(i) + "\\"
    );
}}

function decoration() {
    const decorations = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "+", "º"]
    return decorations[Math.floor(Math.random() * decorations.length)]
}

afficherSapin(3,4)