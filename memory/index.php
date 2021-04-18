<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<?php 
  // require '';
?>

<h1 class="text-center mb-5">
    Memory
</h1>

<div class="text-center">
  <div id="difficulty">
    <button class="btn btn-outline-info m-1">2x4</button>
    <button class="btn btn-outline-info m-1">3x4</button>
    <button class="btn btn-outline-info m-1">4x4</button>
    <button class="btn btn-outline-info m-1">5x4</button>          
  </div>
  <div id="grid"></div>
  <div id="score"></div><br>
  <div id="refresh">
    <img class="btn" src='src/images/refresh.png' width="100px" alt="bouton refresh">
  </div>  
</div>


<script src="scripts/memo.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Memory";

require "../commons/template.php";
