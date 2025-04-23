//Patron de fabrique

// Interface ou classe abstraite commune
abstract class Personnage {
    abstract attaquer(): void;
  }
  
  // Classes concrètes
  class Guerrier extends Personnage {
    attaquer() {
      console.log("Le Guerrier attaque avec une épée !");
    }
  }
  
  class Magicien extends Personnage {
    attaquer() {
      console.log("Le Magicien lance un sort !");
    }
  }
  
  class Archer extends Personnage {
    attaquer() {
      console.log("L'Archer tire une flèche !");
    }
  }
  
  // Fabrique de personnages (Factory Method)
  class PersonnageFactory {
    static creerPersonnage(type: string): Personnage {
      switch (type) {
        case "guerrier":
          return new Guerrier();
        case "magicien":
          return new Magicien();
        case "archer":
          return new Archer();
        default:
          throw new Error("Type de personnage incorrect." + type);
      }
    }
  }

const p1 = PersonnageFactory.creerPersonnage("guerrier");
const p2 = PersonnageFactory.creerPersonnage("magicien");
const p3 = PersonnageFactory.creerPersonnage("archer");

p1.attaquer(); // Le Guerrier attaque avec une épée !
p2.attaquer(); // Le Magicien lance un sort !
p3.attaquer(); // L'Archer tire une flèche !
