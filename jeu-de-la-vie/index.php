<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<?php 
  // require '';
?>

<h1 class="text-center mb-5">
    Jeu de la vie
</h1>

<div class="container text-center">
  <button class="btn btn-success" onClick="afficherGrille(nouvelleEtape(grille), divGrille)">Nouvelle Etape</button><br><br>
  
  <div class="d-flex justify-content-center">
      <div id="grille"></div>
  </div>
  <br>   

  <button class="btn btn-success" onClick="start(grille, divGrille)">Start</button>
  <button class="btn btn-danger" onClick="stop()">Stop</button>
  <div id="lecture"></div>
</div>
<br>
<div class="small">
  <p>Le jeu de la vie est un automate cellulaire inventé en 1970 par John H. Conway. Ce dernier essaya de simplifier un machine qui pourrait s’auto-reproduire, inventée par John Von Neumann. Il y parvint avec un certain succès vu que le jeu de la vie est probablement l’automate cellulaire le plus connu au monde !</p>
  <p>Son travail déboucha sur deux règles simples :</p>
  <ul>
    <li>une cellule morte qui possède exactement 3 voisines devient vivante ;</li>
    <li>une cellule vivante qui possède moins de 2 ou plus de 3 voisines meurt.</li>
    
  </ul>
  <p>Pour plus d’information, je vous invite à consulter l’article <a href="https://fr.wikipedia.org/wiki/Jeu_de_la_vie" target="_blank" title="vers wiki">wikipedia</a>.</p>
</div>

<div class="small">
  <em>
    <p>à rajouter :</p>
    <ul>
      <li>rajouter des formes aleatoires</li>
      <li>choix de la vitesse de lecture</li>
      <li>reinitialiser la grille</li>
    </ul>
  </em>
</div>

<script src="scripts/grille.js"></script>
<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Jeu de la vie";

require "../commons/template.php";
