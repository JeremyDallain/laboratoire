<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<?php 
  // require '';
?>

<h1 class="text-center mb-5">
    Pierre - Feuille - Ciseaux
</h1>

<div id="pfc" class="text-center">

  <h4>Jouez contre le Robot</h4><br><br>

  <button class="btn btn-success m-1">Pierre</button>
  <button class="btn btn-success m-1">Feuille</button>
  <button class="btn btn-success m-1">Ciseaux</button><br><br>

  <div class="result"></div>
    
</div>


<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Pierre-Feuille-Ciseaux";

require "../commons/template.php";
