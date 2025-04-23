//Patron Singleton

type Difficulté = "Facile" | "Normal" | "Difficile";
type Langue = "FR" | "EN" | "JP";

class ParametresJeu {
  private static instance: ParametresJeu;

  // Paramètres géneraux
  public gameplay = {
    difficulté: "Normal" as Difficulté,
    langue: "FR" as Langue
  };

  public audio = {
    volumeMusique: 50,
    volumeEffets: 50
  };

  public graphiques = {
    resolution: "1920x1080",
    qualité: "Élevée"
  };

  // Constructeur privé
  private constructor() {}

  // Méthode d’accès unique à l’instance
  public static getInstance(): ParametresJeu {
    if (!ParametresJeu.instance) {
      ParametresJeu.instance = new ParametresJeu();
    }
    return ParametresJeu.instance;
  }

  // Méthodes de modification
  setDifficulté(nouvelle: Difficulté) {
    this.gameplay.difficulté = nouvelle;
  }

  setVolumeMusique(valeur: number) {
    this.audio.volumeMusique = valeur;
  }
}

const settings1 = ParametresJeu.getInstance();
const settings2 = ParametresJeu.getInstance();

settings1.setDifficulté("Difficile");
settings2.setVolumeMusique(50);

console.log(settings1.gameplay.difficulté); 
console.log(settings2.audio.volumeMusique);
console.log(settings1 === settings2); 
