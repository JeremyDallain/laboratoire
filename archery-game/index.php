<?php ob_start(); ?>

<h1 class="text-center mb-5">
    Archery Game
</h1>

<div class="text-center">
  <img src="src/images/archery-banner.png" alt="banniere archery" width="300px"><br><br>
  <a class="btn btn-info"href="arcade-mode.php">Mode Arcade</a><br><br>
  <a class="btn btn-info"href="classement-mode.php">Mode Classement</a><br><br>
  <a class="btn btn-info"href="training-mode.php">Mode Entrainement</a><br><br>
  <a class="btn btn-info"href="tableau-des-scores.php">Tableau des scores</a><br><br>
</div>

<?php

$content = ob_get_clean();

$title = "Archery-game";
require "../commons/template.php";

