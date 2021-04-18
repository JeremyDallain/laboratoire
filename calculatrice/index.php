<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<?php 
  // require '';
?>

<h1 class="text-center mb-5">
    Calculatrice
</h1>

<div class="container text-center border border-primary rounded-lg">
  <div class="form-group">
      <input type="text" class="form-control text-right btn-lg mt-4" id="ecran" disabled>
  </div>
  <div id="touches">
    <div class="row m-1">
        <button value="7" class="btn-lg col btn btn-primary m-2">7</button>
        <button value="8" class="btn-lg col btn btn-primary m-2">8</button>
        <button value="9" class="btn-lg col btn btn-primary m-2">9</button>
        <button value="/" class="btn-lg col btn btn-info m-2">/</button>
    </div>
    <div class="row m-1">
        <button value="4" class="btn-lg col btn btn-primary m-2">4</button>
        <button value="5" class="btn-lg col btn btn-primary m-2">5</button>
        <button value="6" class="btn-lg col btn btn-primary m-2">6</button>
        <button value="*" class="btn-lg col btn btn-info m-2">*</button>
    </div>
    <div class="row m-1">
        <button value="1" class="btn-lg col btn btn-primary m-2">1</button>
        <button value="2" class="btn-lg col btn btn-primary m-2">2</button>
        <button value="3" class="btn-lg col btn btn-primary m-2">3</button>
        <button value="-" class="btn-lg col btn btn-info m-2">-</button>
    </div>
    <div class="row m-1">
        <button value="." class="btn-lg col btn btn-primary m-2">.</button>
        <button value="0" class="btn-lg col btn btn-primary m-2">0</button>
        <button value="C" class="btn-lg col btn btn-warning m-2">C</button>
        <button value="+" class="btn-lg col btn btn-info m-2">+</button>
    </div>
    <div class="row m-1">
        <button value="=" class="btn-lg col btn btn-success m-2">=</button>
        <button value="CA" class="btn-lg col btn btn-danger m-2">CA</button>        
    </div>
  </div>   
</div>

<br>

<div>
  <p class="small"><em>bugs à fixer :</em></p>
  <p class="small"><em>- plusieurs points dans une chaine de chiffre. ex: 1.1.1 (voir si depuis le dernier signe il y un autre point)</em></p>
</div>

<script src="scripts/main.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Calculatrice";
require "../commons/template.php";
