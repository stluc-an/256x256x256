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

|  Trigramme | Espaces à votre charge   |
|:---------- |:------------------------ |
| **GAN** | 0x18 0xac 0x3f 0x61 0xcc 0x57 0xc0 0xe9 0x46 0x27 | 
| **EBE** | 0x1e 0x65 0x1d 0x94 0x07 0x21 0x0a 0x75 0xc6 0x44 | 
| **KBL** | 0x0c 0x2e 0xcf 0x64 0x9e 0x48 0x03 0xfa 0x11 0xe4 | 
| **CCO** | 0x4d 0x4f 0xdc 0x55 0x98 0x13 0x01 0x90 0x7e 0x95 | 
| **KDG** | 0xae 0x24 0x22 0x40 0x1f 0xef 0x71 0xd6 0xde 0x68 | 
| **DDM** | 0x39 0x85 0xbe 0xa6 0x9c 0x66 0x10 0x86 0xf0 0xdb | 
| **LDG** | 0x05 0xe2 0x16 0x3c 0xf4 0xc4 0xb3 0xaf 0x7a 0xc9 | 
| **SDU** | 0xa2 0x9f 0x7f 0xbf 0xf8 0xbb 0x15 0xb6 0x8e 0x2a | 
| **VHA** | 0x8c 0xe5 0xad 0xb2 0x3a 0xff 0x92 0x4c 0x70 0xa8 | 
| **JHU** | 0x1a 0x7d 0xdf 0xb7 0xb9 0xfc 0x0b 0x36 0xa3 0x14 | 
| **MJU** | 0xc7 0x29 0x93 0x5b 0x4a 0xce 0x83 0xd5 0xe0 0x79 | 
| **MLE** | 0x5e 0xb8 0xe7 0xb0 0xc2 0xd8 0x41 0x56 0x49 0x80 | 
| **LLE** | 0x8b 0x37 0x38 0xca 0x91 0x7b 0x52 0x04 0xaa 0x78 | 
| **LLI** | 0x3b 0xa5 0xcd 0xfb 0x69 0xc3 0x2b 0x47 0x17 0xc9 | 
| **TMA** | 0xeb 0x74 0xd5 0xa7 0xdd 0xec 0x34 0xd2 0x88 0x77 | 
| **APA** | 0x5c 0x6f 0xf5 0xd0 0xd1 0xc5 0xa4 0xe6 0x62 0xcb | 
| **JPA** | 0x6a 0x23 0xfe 0x2e 0x32 0x58 0x5d 0xd6 0x3e 0xaf | 
| **JPF** | 0xba 0x51 0xf6 0x43 0xe3 0x60 0x3d 0x63 0x9a 0x93 | 
| **JRI** | 0x0d 0x5f 0xb1 0x33 0x67 0xf9 0x11 0x5a 0x42 0xf1 | 
| **MSM** | 0xed 0x7f 0x2d 0x2c 0x0e 0xf7 0x54 0x28 0x08 0xf4 | 
| **JSE** | 0x20 0xdc 0xa9 0x78 0x59 0x73 0x8a 0x87 0xbc 0x96 | 
| **KSI** | 0x00 0x9b 0xea 0xfd 0x97 0x2f 0x53 0x19 0xd4 0x25 | 
| **ASI** | 0x35 0xd7 0x9d 0x4e 0xf2 0x6c 0x26 0x6b 0x09 0x0f | 
| **TSI** | 0x50 0xb5 0x4b 0xbd 0xee 0xc8 0xda 0x31 0xa0 0xec | 
| **JBT** | 0xe8 0x8f 0x12 0xd9 0x7c 0xc1 0x6d 0xf3 0x72 0xab | 
| **JVE** | 0x84 0x99 0x81 0xd3 0x06 0x02 0xb4 0xe1 0x6e 0x30 | 
| **FVU** | 0x1c 0x1b 0x45 0x82 0x76 0x2a 0x0b 0xa1 0x8d 0x89 |


### LIEN VERS L'APP :
[dat://494cdf7ec87d2542ac01bcc4fd39a3efcfd9d139badc96b911794bd6b1e8ad27/src/0xFFF/](dat://494cdf7ec87d2542ac01bcc4fd39a3efcfd9d139badc96b911794bd6b1e8ad27/src/0xFFF/)

### LICENCE : 
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)


