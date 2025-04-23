//Patron de composite

// Interface commune
interface ElementOrganisation {
    afficher(): void;
  }
  
  // Composite : Employé
  class Employe implements ElementOrganisation {
    constructor(private nom: string) {}
  
    afficher() {
      console.log("Employé : " + this.nom);
    }
  }
  
  // Composite : Département
  class Departement implements ElementOrganisation {
    private enfants: Array<ElementOrganisation> = [];
  
    constructor(private nom: string) {}
  
    ajouter(element: ElementOrganisation) {
      this.enfants.push(element);
    }
  
    afficher() {
      console.log("Département : " + this.nom);
      for (const enfant of this.enfants) {
        enfant.afficher();
      }
    }
  }
  
  // Création de l'organisation
  const direction = new Departement("Direction Générale");
  
  const secretaire = new Departement("Secrétariat général");
  secretaire.ajouter(new Employe("Dima"));
  secretaire.ajouter(new Employe("L'autre"));
  
  const tech = new Departement("Département technique");
  const it = new Departement("Département Informatique");
  it.ajouter(new Employe("Dimitri"));
  const web = new Departement("Web");
  web.ajouter(new Employe("Jotaro"));
  tech.ajouter(it);
  tech.ajouter(web);
  
  const commercial = new Departement("Département commercial");
  const ventes = new Departement("Ventes");
  ventes.ajouter(new Employe("Dio"));
  const achats = new Departement("Achats");
  achats.ajouter(new Employe("Pucci"));
  commercial.ajouter(ventes);
  commercial.ajouter(achats);
  
  const financier = new Departement("Département financier");
  financier.ajouter(new Departement("Resources humaines"));
  financier.ajouter(new Departement("Comptabilité"));
  financier.ajouter(new Departement("Administration"));
  
  direction.ajouter(secretaire);
  direction.ajouter(tech);
  direction.ajouter(commercial);
  direction.ajouter(financier);
  
  // Affichage complet
  direction.afficher();
  