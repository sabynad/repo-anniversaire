console.log("test code");


/**Le code attache un écouteur d'événement à l'élément avec la classe "btn-envoyer". 
Cela signifie que lorsque vous cliquez sur le bouton,
 le code contenu dans la fonction sera exécuté*/
document.querySelector('.btn-envoyer').addEventListener('click', function() {

    /**Le code récupère les valeurs des éléments "jour" et "mois" à l'aide de la querySelectorméthode.
     Ces éléments sont supposés être des champs de saisie dans lesquels 
     l'utilisateur saisit son jour et son mois de naissance.*/ 
    let jour = document.querySelector('#jour').value;
    let mois = document.querySelector('#mois').value;

   


    /**Le code crée un nouvel Dateobjet pour la date actuelle en utilisant new Date(). 
    Il crée également 
    un nouvel Dateobjet pour l'anniversaire spécifié en utilisant 
    les valeurs moiset jour.*/
    // Calculer le nombre de jours restants jusqu'à l'anniversaire
    let dateActuelle = new Date();
    let dateAnniversaire = new Date(dateActuelle.getFullYear(), mois - 1, jour);
    
    if (dateAnniversaire < dateActuelle) {
        dateAnniversaire.setFullYear(dateActuelle.getFullYear() + 1);
    }
    
    let differenceEnJours = Math.ceil((dateAnniversaire - dateActuelle) / (1000 * 60 * 60 * 24));
    
    // Afficher le résultat
    let resultat = document.querySelector("#resultat");
    resultat.textContent = ("Il reste " + differenceEnJours + " jours jusqu'à ton anniversaire !");

    document.querySelector(".btn-reset").addEventListener('click', function() {
     document.querySelector("#jour").value = "";
     document.querySelector("#mois").value = "";
     document.querySelector("#resultat").textContent = "";
  
    })
    
})


// ----------------------------------RECAP----------------------------------------

/**Si l'anniversaire spécifié est déjà passé dans l'année en cours, le code définit 
l'année de l'anniversaire sur l'année suivante à l'aide de setFullYear()*/