<?php ob_start(); ?>

<!-- CONTENT PAGE -->

<h1 class="text-center mb-5">
    Convertisseur
</h1>

<div class="text-center">
  <div class="h3 text-center text-primary" id="resultat"></div><br>
  <label for="">Entrez un nombre</label>
  <input id="choice" type="number"><br><br>

  <button class="btn btn-primary m-1" onClick=(afficherLettres(number))>Convertir en lettres</button> 
  <p>choisissez un nombre entre 0 et 999 999 999 999</p>

  <button class="btn btn-primary m-1" onClick=(afficherChiffresRomains(number))>Convertir en chiffres Romains</button> 
  <p>choisissez un nombre entre 1 et 4 999</p>
  <p><em  class="small">Les romains n'utilisaient pas le zéro, ils ne le considéraient pas comme un chiffre mais comme un état de vide et donc ne l'écrivaient pas.</em></p>
</div>

<script src="scripts/main.js"></script>
<script src="scripts/lettres.js"></script>
<script src="scripts/chiffresRomains.js"></script>
<!-- END CONTENT PAGE -->

<?php

$content = ob_get_clean();

$title = "Convertisseur";

require "../commons/template.php";
