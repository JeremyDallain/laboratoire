<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<h1 class="text-center mb-5">
    Pierre - Feuille - Ciseaux - Lézard - Spock
</h1>

<div id="pfc" class="text-center">
  <h5>Version Geek du Pierre Feuille Ciseaux</h5><br>
  <img src="src/images/pfcls.png" width="250px" alt="pfcls" class="img-fluid rounded"><br><br>
  <h4>Jouez contre le Robot</h4><br>

  <button class="btn btn-success m-1">Pierre</button>
  <button class="btn btn-success m-1">Feuille</button>
  <button class="btn btn-success m-1">Ciseaux</button>
  <button class="btn btn-success m-1">Lézard</button>
  <button class="btn btn-success m-1">Spock</button><br><br>

  <div class="result"></div><br>

  <hr>
  <div>
    <h4>Les règles :</h4>
    <ul class="list-group">
        <li class="list-group-item">Les ciseaux coupent la feuille</li>
        <li class="list-group-item">La feuille recouvre la pierre</li>
        <li class="list-group-item">La pierre écrase le lézard</li>
        <li class="list-group-item">Le lézard empoisonne Spock</li>
        <li class="list-group-item">Spock écrabouille les ciseaux</li>
        <li class="list-group-item">Les ciseaux décapitent le lézard</li>
        <li class="list-group-item">Le lézard mange la feuille</li>
        <li class="list-group-item">La feuille repousse Spock</li>
        <li class="list-group-item">Spock détruit la pierre</li>
        <li class="list-group-item">La pierre éclate les ciseaux</li>        
    </ul>
  </div>
</div>

<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Pierre-Feuille-Ciseaux-Lézard-Spock";

require "../commons/template.php";
