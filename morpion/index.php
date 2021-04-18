<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<h1 class="text-center mb-5">
    Morpion
</h1>

<div class="text-center">
  <div id="info" class="alert border border-dark h5"></div>
  <div class="d-flex justify-content-center">
      <div id="gridGame"></div>
  </div>       
  <div id="refresh">
    <img class="btn" src='src/images/refresh.png' width="100px" alt="bouton refresh">
  </div>   
</div>
 
    
<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Morpion";

require "../commons/template.php";