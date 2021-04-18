<?php ob_start(); ?>

<div class="text-center">
  <h1 class="bg-primary text-light rounded p-2 m-0">Archery Game</h1>
  <h6 class="bg-primary text-light rounded pb-2">Mode Classement</h6>
  
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
    <p>Essayez le <strong>mode Entrainement</strong> pour vous familiariser avec le système.</p>
    <div class="bg-info text-white p-2">
      <h4>En mode Arcade et Classement :</h4>
      <p>Vous avez <strong>60 secondes</strong> pour tirer <strong>10 flèches</strong>.</p>
      <p>Les paramètres changent à chaque vollée.</p>
      <p>Réalisez le <strong>meilleur score</strong>, et entrez dans la <strong>légende</strong> !</p>
    </div>
  </div>
  <br>
 
  <!-- start -->
  <div class="d-flex justify-content-center">
      <div id="windLeft" class="d-none"></div>
      <div id="windRight" class="d-none"></div>
  </div>
    
  <div id="parameters"></div>
  <button id="start" class="btn btn-primary">Start</button> 
  <div id="top" class="d-flex justify-content-center">
  
      <div id="cible">		
          <div id="blueCircle"></div>
          <div id="redCircle"></div>
          <div id="yellowCircle"></div>	
          <div id="userImpact">
              <span id="points"></span> 
              <div id="time" class="text-primary h5"></div>      
          </div>
          <div id="userCursor"></div>
      </div>
  </div>
  <div class="row h6">
      <div class="col-1"></div>
      <div id="score" class="col-10"></div>
      <div class="col-1"></div>
  </div> 

  <div class="row text-left">
    <div class="col-3"></div>
    <div id="details" class="col-6"></div>
    <div class="col-3"></div>
  </div>
  <div id="refresh">
    <img class="btn" src='src/images/refresh.png' width="80px" alt="bouton refresh">
  </div>  
  <br>
  <a class="btn btn-info" href="tableau-des-scores.php">Tableau des scores</a><br><br>
  <a class="btn btn-primary"href="index.php">Retour au Menu du jeu</a><br><br>
  
</div>

<script src="scripts/classement_mode.js"></script>

<?php

$content = ob_get_clean();

$title = "Archery-game";
require "../commons/template.php";