
// ------------------ Exo 1: (petit jeu)--------------------------  //

let name = prompt('Indiquez votre Nom');

alert(` Bonjour ${name} ! Nous avons généré un nombre aléatoire entre 1 et 100, tentez de le deviner en 05 essais maximum. Pour chaque tentative, nous vous dirons si votre estimation est trop ou pas assez élevée ou si vous avez trouvé le bon nombre. `)

function devinezLeNombre(min, max) {

  let nbreEssais = 1, nbreUtilisateur ;
  let nbreAleatoire = Math.floor(Math.random() * max) + min;

  
while (nbreUtilisateur != nbreAleatoire && nbreEssais <= 5)
{
  alert(` Essais No ${nbreEssais} `);
  nbreUtilisateur = Number(prompt('Entrez votre proposition'));

  if (nbreUtilisateur < nbreAleatoire)
  {
    alert(` Non ${name} , le nombre est plus grand que ${nbreUtilisateur}. `);
  } else if (nbreUtilisateur > nbreAleatoire)
  {
    alert(` Non ${name} , le nombre est plus petit que ${nbreUtilisateur}. `);
  } else 
  {
    alert(` Bravo ! Vous avez trouvé ce nombre(${nbreAleatoire}) en ${nbreEssais} essais.  Merci et a tres bientot ! `);
  }
  nbreEssais++;
}

if (nbreEssais > 5 && nbreUtilisateur != nbreAleatoire)
{
  alert(` Désolé ${name}, c'est fini. Le nombre correct était ${nbreAleatoire}. Merci et a tres bientot !`)
}

}
  

devinezLeNombre(1, 100);

// --------------------------------- fin ------------------------------------ //
