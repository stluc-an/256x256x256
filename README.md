# Atelier programmation
## ::: B  R  I  E  F  I  N  G ::: 256  x   256   x  256
E  S  A     ·     A  N  1  ·    ·    ·  0  1  /  0  2  /  1  9     ·     0  8  /  0  3  /  1  9 

* [Objectifs](#objectifs-)
* [Contraintes ](#contraintes-)
* [En classe](#en-classe-)
* [Chez vous](#chez-vous-)
* [Description](#description-)
* [Règles](#règles-)
* [Nomenclature](#nomenclature-)
* [Attributions](#attributions-)
* [Lien vers l'app](#lien-vers-lapp-)

### OBJECTIFS :    
* Produire à 26, 256 espaces interactifs dont la dimension est fixée à 256 pixels sur 256 pixels.
* Explorer le potentiel de 16 interactions avec un écran mobile.
* Développer nos compréhensions du potentiel de l'environnement web.
* Collaborer et s'identifier par rapport aux autres, en créant des espaces différents dans un but commun avec une structure commune.
* Réflexion sur le design «call to action» 
    * Clair 
    * Rapide à comprendre
    * Efficace
* **Nous exposons ce projet commun produit de nos individualités aux portes ouvertes de l’école**.

### CONTRAINTES : 
* **Techno :** WEB > HTML + CSS + Javascript
* **Dimension :** 256 x 256 pixels
* **Durée :** chacun des espaces sera vu par l'utilisateur 14 secondes
* **Quantité :** chacun de vous développe au minimum 10 espaces interactifs
* **Interaction :** chaque espace interactif demande à l'utilisateur de produire 2 actions dans un certain ordre

<img src="./public/images/interactions.jpg" alt="alt text" height="500">

### EN CLASSE :   
* Nous explorons chacune des 16 interactions :
    * Définition
    * Technique
    * Utilisation
* Nous mettons en place un canvas de développement de vos espaces interactifs.
* Nous répondons aux questions relatives à votre production.
* Nous discutons de la pertinence de votre production.
* Nous mettons en place un dispositif capable de parcourir ces espaces interactifs.

### CHEZ VOUS :   
* Vous conceptualisez vos 10 espaces interactifs
* Vous dessinez vos 10 espaces interactifs
* Vous développez vos 10 espaces interactifs

### DESCRIPTION : 
|   ID  | Action      | Définition           |
|:-----:|:----------- | -------------------- |
| **0** | `TAP`       | L’utilisateur __click avec un doigt__ sur un objet |
| **1** | `DOUBLETAP` | L’utilisateur `TAP` __2x__ en peu de temps sur un objet |
| **2** | `DRAG`      | L’utilisateur met un doigt sur un objet et le __glisse__ |
| **3** | `DROP`      | L’utilisateur, après un `DRAG` __relâche son doigt pour placer l’objet à un endroit voulu__ |
| **4** | `RESIZE`    | L’utilisateur __agrandit__ ou __rétrécit__ un objet en __glissant son doigt sur un bord d’un objet__ |
| **5** | `ROTATION`  | L’utilisateur __fait tourner plusieurs doigts__ sur l'écran |
| **6** | `PINCH`     | L’utilisateur __écarte ou rapproche plusieurs doigts__ sur l’écran |
| **7** | `HOLD`      | L’utilisateur __presse un certain temps__ sur un objet |
| **8** | `SWIPE`     | L’utilisateur __glisse vigoureusement un doigt__ dans une direction |
| **9** | `SHAKE`     | L’utilisateur __secoue__ son écran |
| **A** | `TILT`      | L’utilisateur __change l'orientation__ de son écran |
| **B** | `FOCUS`     | L’utilisateur __revient sur l'onglet__ contennant votre application |
| **C** | `SELECT`    | L’utilisateur __sélectionne du texte__ présent sur la page |
| **D** | `TIMEOUT`   | L’utilisateur __attend__ un certain temps |
| **E** | `CHANGE`    | L’utilisateur __change le contenu__ d’un champs de formulaire |
| **F** | `ONLINE`    | L’utilisateur __récupère une connexion internet__ |

### RÈGLES : 
* L'utilisateur a pour but de **parcourir en moins d'une heure les 256 espces interactifs.**
* Pour cela, il dispose d'une page web qui encapsule tout ces espaces interactifs, appelons la : **Mécanique temporelle**.
* Au commencemant, la Mécanique temporelle affiche un espace interactif tiré au hazard. L'utilisateur doit alors **accomplir deux actions**. 
* Si l'utilisateur parvient à accomplir dans l'ordre les deux actions assignées à cet espace, **la Mécanique temporelle est notifiée. Elle referme cet espace, en sélectionne un nouveau encore à résoudre** et l'histoire continue. `top.postMessage('SUCCESS', '*');`
* Si l'utilisateur ne parvient pas à résoudre cet espace en moins de 14 secondes, alors **la Mécanique temporelle referme cet espace et ouvre l'espace précédent.** 

### NOMENCLATURE : 
Chaque espace est nomé suivant la règle suivante : <br/>
"0x"+`Id_Action_1`+`Id_Action_2`
> _exemple :_ <br/>
> ... la première action à acomplir est `SWIPE` qui à pour Id **8**<br/>
> ... la seconde action à acomplir est `TILT` qui à pour Id **A**<br/>
> ... cet espace porte le nom **0x8A**

### ATTRIBUTIONS :
La colonne Acronyme vous identifie, elle contient des trigrammes composés au moyen de vos prénoms et noms. La première lettre du prénom suivie des 2 premières lettres du nom de famille. Pour les noms composés, on prend la première lettre de chaque patronyme jusqu'à composition du trigramme.
> _exemple :_ <br/>
> ... Vincent Evrard - **VEV**



### LIEN VERS L'APP :
[dat://494cdf7ec87d2542ac01bcc4fd39a3efcfd9d139badc96b911794bd6b1e8ad27/src/0xFFF/](dat://494cdf7ec87d2542ac01bcc4fd39a3efcfd9d139badc96b911794bd6b1e8ad27/src/0xFFF/)

### LICENCE : 
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)


