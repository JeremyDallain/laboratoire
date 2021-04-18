<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<h1 class="text-center mb-5">
  Jeu des bâtons
</h1>

<div class="text-center">
  <div id="info" class="alert border h5"></div>
  <div class="d-flex justify-content-center">
      <div id="sticks" class="h1 text-secondary"></div>
  </div>        
  <br>  
  <button class="btn btn-danger rounded-circle m-1 px-4 pb-0" onClick="play(1)"><h1>1</h1></button>
  <button class="btn btn-danger rounded-circle m-1 px-4 pb-0" onClick="play(2)"><h1>2</h1></button>
  <button class="btn btn-danger rounded-circle m-1 px-4 pb-0" onClick="play(3)"><h1>3</h1></button>
  <br><br>
  <p>Laissez le dernier bâton à votre adversaire pour gagner</p>
  <p>Retirez 1, 2 ou 3 bâtons</p>  
  <div id="refresh">
    <img class="btn" src='src/images/refresh.png' width="100px" alt="bouton refresh">
  </div>  
</div>

<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Jeu des bâtons";

require "../commons/template.php";
