<?php ob_start(); ?>

<div class="text-center">
  <h1 class="bg-primary text-light rounded p-2 m-0">Archery Game</h1>
  <h6 class="bg-primary text-light rounded pb-2">Mode Entrainement</h6>
  
  <button id="buttonRules" onClick="afficherMasquerRegles()" class="btn btn-secondary m-2">Voir les règles</button><br>
  
  <div id="rules" class="text-left d-none">
    <h4>Règle du jeu :</h4>
    <p>Visez au mieux pour atteindre le centre de la cible !</p>
    <p>Plus vous êtes proche du centre plus vous marquez de points.</p>
    <p>Le <strong>nombre de points</strong> de votre vollée s'affiche <strong>sur la cible</strong>, à l'endroit de l'impact.</p>
    <p>Au dessus de la cible s'affiche les paramètres : <strong>Vent</strong> et <strong>Distance</strong>.</p>
    <p>Le <strong>vent</strong> souffle <strong>vers la droite</strong> ou <strong>vers la gauche</strong>, il faut adapter votre tir en conséquence.</p>
    <p>La <strong>distance</strong> impacte également le resultat de la vollée, plus vous êtes loin, plus vous devez <strong>tirer haut</strong>..</p>
    <p>Le score maximum sur une vollée est de 125.</p>
    <p>Essayez le <strong>mode entrainement</strong> pour vous familiariser avec le système.</p>
    <h4>En mode Arcade et Classement :</h4>
    <p>Vous avez <strong>60 secondes</strong> pour tirer <strong>10 flèches</strong>.</p>
    <p>Les paramètres changent à chaque vollée.</p>
    <p>Réalisez le <strong>meilleur score</strong>, et entrez dans la <strong>légende</strong> !</p>
  </div>
  <br>
  
  <div class="border">
    <button id="changeParameters" onClick="changeParameters()" class="btn btn-primary m-2">Changer les paramètres</button><br><label for=""><input class="form-group" type="checkbox" onChange="startAutoParameters()"> Changement Auto</label><br>
    <div class="d-flex justify-content-center mt-2">
      <div id="windLeft" class="d-none"></div>
      <div id="windRight" class="d-none"></div>
    </div>
    <div id="parameters"></div>
  </div>  
  
  <div id="top" class="d-flex justify-content-center">
    <div id="cible">		
      <div id="blueCircle"></div>
      <div id="redCircle"></div>
      <div id="yellowCircle"></div>	
      <div id="userImpact">
        <span id="points"></span> 
        <div id="XYMouve" class="text-primary h6"></div>                    
      </div>
      <div id="userCursor"></div>
    </div>
  </div>
  <div id="rules" class="text-left d-none">
    <h4>Règle du jeu :</h4>
    <p>Visez au mieux pour atteindre le centre de la cible !</p>
    <p>Plus vous êtes proche du centre plus vous marquez de points.</p>
    <p>Le <strong>nombre de points</strong> de votre vollée s'affiche <strong>sur la cible</strong>, à l'endroit de l'impact.</p>
    <p>Au dessus de la cible s'affiche les paramètres : <strong>Vent</strong> et <strong>Distance</strong>.</p>
    <p>Le <strong>vent</strong> souffle <strong>vers la droite</strong> ou <strong>vers la gauche</strong>, il faut adapter votre tir en conséquence.</p>
    <p>La <strong>distance</strong> impacte également le resultat de la vollée, plus vous êtes loin, plus vous devez <strong>tirer haut</strong>..</p>
    <p>Le score maximum sur une vollée est de 125.</p>
    <p>Essayez le <strong>mode entrainement</strong> pour vous familiariser avec le système.</p>
    <h4>En mode Score :</h4>
    <p>Vous avez <strong>60 secondes</strong> pour tirer <strong>10 flèches</strong>.</p>
    <p>Les paramètres changent à chaque vollée.</p>
    <p>Réalisez le <strong>meilleur score</strong>, et entrez dans la <strong>légende</strong> !</p>
  </div>
    
  <div class="row text-left">
      <div class="col-2"></div>
      <div id="details" class="col-8 border"></div>
      <div class="col-2"></div>
  </div>
  <br>
  <a class="btn btn-primary"href="index.php">Retour au Menu du jeu</a><br><br>
  
</div>

<script src="scripts/training.js"></script>

<?php

$content = ob_get_clean();

$title = "Archery-game";
require "../commons/template.php";