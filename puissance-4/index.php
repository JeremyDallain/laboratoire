<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<?php 
  // require '';
?>

<h1 class="text-center mb-5">
    Puissance 4
</h1>

<div class="text-center">
  <div id="info" class="alert alert-light text-danger border-dark h6"></div>
  <div class="d-flex justify-content-center">
      <div id="game"></div>
  </div>        
  <br>
  <div id="refresh">
    <img class="btn" src='src/images/refresh.png' width="100px" alt="bouton refresh">
  </div>  
  <div>
    <p class="small">- intégrer l'IA</p>
  </div>
</div>


<script src="scripts/toolbox.js"></script>
<script src="scripts/game.js"></script>
<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Puissance 4";

require "../commons/template.php";
