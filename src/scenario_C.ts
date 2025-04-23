//Patron d'adaptateur (structurel)

interface ControlerActions {
    sauter(): void;
    attaquer(): void;
    interargir(): void;
}

// Clavier
class Clavier {
    espace() {
        console.log("Espace : saut");
    }
    clicGauche() {
        console.log("Clic gauche : attaque");
    }
    clicDroit() {
        console.log("Clic droit : interaction");
    }
}

// Xbox
class ManetteXbox {
    boutonA() {
        console.log("Xbox A : saut");
    }
    boutonB() {
        console.log("Xbox B : attaque");
    }
    boutonX() {
        console.log("Xbox X : interaction");
    }
}

// PS5
class ManettePS5 {
    boutonX() {
        console.log("PS5 X : saut");
    }
    boutonO() {
        console.log("PS5 O : attaque");
    }
    boutonTriangle() {
        console.log("PS5 Triangle : interaction");
    }
}

class AdapterClavier implements ControlerActions {
    constructor(private clavier: Clavier) {}

    sauter() {
        this.clavier.espace();
    }

    attaquer() {
        this.clavier.clicGauche();
    }

    interargir() {
        this.clavier.clicDroit();
    }
}

class AdapterXbox implements ControlerActions {
    constructor(private xbox: ManetteXbox) {}

    sauter() {
        this.xbox.boutonA();
    }

    attaquer() {
        this.xbox.boutonB();
    }

    interargir() {
        this.xbox.boutonX();
    }
}

class AdapterPS5 implements ControlerActions {
    constructor(private ps5: ManettePS5) {}

    sauter() {
        this.ps5.boutonX();
    }

    attaquer() {
        this.ps5.boutonO();
    }

    interargir() {
        this.ps5.boutonTriangle();
    }
}

const clavier = new AdapterClavier(new Clavier());
const xbox = new AdapterXbox(new ManetteXbox());
const ps5 = new AdapterPS5(new ManettePS5());

console.log("Contrôle via clavier :");
clavier.sauter(); // Espace : saut
clavier.attaquer(); // Clic gauche : attaque
clavier.interargir(); // Clic droit : interaction

console.log("\nContrôle via manette Xbox :");
xbox.sauter(); // Xbox A : saut
xbox.attaquer(); // Xbox B : attaque
xbox.interargir(); // Xbox X : interaction

console.log("\nContrôle via manette PS5 :");
ps5.sauter(); // PS5 X : saut
ps5.attaquer(); // PS5 O : attaque
ps5.interargir(); // PS5 Triangle : interaction
