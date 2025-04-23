//Patron de décorateur (decorator)

interface Boisson {
    getDescription(): string;
    getPrix(): number;
}

class Cafe implements Boisson {
    getDescription(): string {
        return "Café";
    }

    getPrix(): number {
        return 4;
    }
}

abstract class OptionBoisson implements Boisson {
    constructor(protected boisson: Boisson) {}

    abstract getDescription(): string;
    abstract getPrix(): number;
}

class Lait extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 1;
    }
}

class LaitDeCoco extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait de coco";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 2;
    }
}

class Chantilly extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Chantilly";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 1;
    }
}

class SaveurVanille extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Saveur Vanille";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 0.5;
    }
}

class Sucre extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Sucre";
    }

    getPrix(): number {
        return this.boisson.getPrix(); // gratuit
    }
}

// Commande : Café + Lait de coco + Chantilly + Saveur Vanille
let maBoisson: Boisson = new Cafe();
maBoisson = new LaitDeCoco(maBoisson);
maBoisson = new Chantilly(maBoisson);
maBoisson = new SaveurVanille(maBoisson);

console.log(maBoisson.getDescription()); // Café, Lait de coco, Chantilly, Saveur Vanille
console.log(maBoisson.getPrix() + "€"); 
