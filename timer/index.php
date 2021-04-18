<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<h1 class="text-center mb-5">
    Timer
</h1>

<div class="text-center">
  <div class="h4" id="jour"></div>
  <div class="h5" id="date"></div>
  <br>
  <span class="border bg-light rounded border-success p-1 h3" id="timer"></span>
</div>



<script src="scripts/main.js"></script>  
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Timer";

require "../commons/template.php";
