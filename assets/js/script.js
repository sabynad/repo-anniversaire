console.log("test code");
     
let dateActuelle = new Date();


document.querySelector('.btn-envoyer').addEventListener('click', function() {
    let jour = document.querySelector('#jour').value;
    let mois = document.querySelector('#mois').value;
    let dateAnniversaire = new Date(dateActuelle.getFullYear(), mois - 1, jour);

    // si le jour ou le mois n'est pas renseigner alors on affiche rien
    if (jour == "" || mois == "" ){
        return resultat.textContent = ("Veuillez saisir les champs");
       
    }
    if (jour == dateActuelle.getDate() && mois == dateActuelle.getMonth()+1){
        resultat.textContent = ("Joyeux Anniversaire !")
        console.log("Joyeux Anniversaire!");
    }
    
    else { 


    if (dateAnniversaire < dateActuelle) {
        dateAnniversaire.setFullYear(dateActuelle.getFullYear() + 1);
    }

    let differenceEnJours = Math.ceil((dateAnniversaire - dateActuelle) / (1000 * 60 * 60 * 24));
    
    // Afficher le résultat
    let resultat = document.querySelector("#resultat");
    resultat.textContent = ("Il reste " + differenceEnJours + " jours jusqu'à ton anniversaire !");

    //supprimer les champs a l'appuie du bouton reset
     document.querySelector(".btn-reset").addEventListener('click', function() {
     document.querySelector("#jour").value = "";
     document.querySelector("#mois").value = "";
     document.querySelector("#resultat").textContent = "";
      
    })  
    }
})


// ----------------------------------RECAP----------------------------------------

/**Si l'anniversaire spécifié est déjà passé dans l'année en cours, le code définit 
l'année de l'anniversaire sur l'année suivante à l'aide de setFullYear()*/

// La méthode getFullYear() renvoie l'année de la date renseignée d'après l'heure locale.

// La méthode setFullYear() définit l'année complête pour une date, d'après l'heure locale.