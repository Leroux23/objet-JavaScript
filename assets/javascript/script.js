//var voiture = new Object;
//voiture.masse = 1200;
//voiture.vitesse = 200;
//voiture.marque = "alfa romeo";
//voiture.modèle = "guillieta"
 //voiture.energiecinetique = function() {
  //0.5 * voiture.masse * voiture.vitesse ** 2
  //alert(voiture.energiecinetique());

//};
//votiure.afficherEnergiecinetique();
//document.write("La couleur de cet objet est " + objet1.couleur);

voiture1 = new Object;
voiture1.masse = 1200;
voiture1.vitesse = 22;
voiture1.marque = "Tesla";
voiture1.modele = "P100D";

voiture1.calculerEnergieCinetique = function() {
  if(voiture.masse <=0) {
    return false;
  }
  else {
    return 0.5 * voiture1.masse * (voiture1.vitesse ** 2);
  }
};
