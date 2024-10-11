//Exercice 1 : Déclaration et affectation de variables
let preenom= "ait said";
console.log(preenom);
//Exercice 2 : Manipulation de variables numériques
let a =100;
let b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
//Exercice 3 : Concaténation de chaînes de caractères
let nom ='chafi';
let prenom='mohamed';
console.log( nom + " " + prenom );
//Exercice 4 : Utilisation des variables booléennes
let age =19;
let major;
if(age>=18)
    {
        major=true;
}
else{
    major= false
}
console.log(major);
//Exercice 5 : Échange de valeurs entre deux variables
let x =10;
let y =12;
x =x+y;
y=x-y;
x=x-y;
console.log('x ='+x);
console.log('y='+y);
//Exercice 6 : Calcul de la circonférence d'un cercle
let rayon = 15;
let C = 2 * Math.PI * rayon;
console.log( "la circonference d'un cercle est"+C.toFixed(2));
//Exercice 7 : Conversion de température
let celsius =25;
let F = celsius * 9/5 + 32;
console.log( "Conversion de temperature est"+ F);
//Exercice 8 : Calcul de l'âge
let anneeNaissance =1996;
let anneeActuelle =2024;
console.log( anneeActuelle -anneeNaissance );
//Exercice 9 : Calcul du perimètre d'un rectangle
let longueur =10; 
let largeur =20;
P =2 * (longueur + largeur)
console.log("Le perimetre du rectangle est : " +P);
//Exercice 10 : Moyenne de trois nombres
let note1= 15;
let note2 =12.5;
let note3 =19;
let moyenne =(note1 + note2 +note3)/3;
console.log("le moyenne est "+moyenne);