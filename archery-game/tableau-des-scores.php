<?php ob_start(); ?>

<?php

$scoresArray = json_decode (file_get_contents('scores.json'), true);
$message = "";
$place = 0;

if (!isset($_GET['isTooLate'])) {  
  
  //LORSQU'ON A RENTRE NOTRE NOM
  if (isset($_GET['name']) && isset($_GET['score'])) {
    $score = $_GET['score'];
    $name = $_GET['name'];
    if ($name === ""){
      $rand = rand();
      $name = "anonyme$rand";
    }
    unset($scoresArray['votre nom']);

    //Si le joueur entre son nom, et qu'il a deja un score avec ce nom :
    //  si son score est meilleur on le rentre
    //  sinon rien ?
    if (array_key_exists ( $name , $scoresArray )) {
      if ($score > $scoresArray[$name]) {
        $scoresArray[$name] = $score;
        arsort($scoresArray);
        $scoresArray = array_slice($scoresArray, 0, 10); 
        file_put_contents('scores.json', json_encode($scoresArray));
      } 
    } else {
      $scoresArray[$name] = $score;
      arsort($scoresArray);
      $scoresArray = array_slice($scoresArray, 0, 10); 
      file_put_contents('scores.json', json_encode($scoresArray));
      $score = 0;
    }
  } else {
    unset($scoresArray['votre nom']);
  }
} else {
  //QUAND ON FINIT UNE PARTIE   

  if (isset($_GET['score'])) {
    $score = $_GET['score'];
    $scoresArray['votre nom'] = $score;

    arsort($scoresArray);
    // $scoresArray = array_slice($scoresArray, 0, 10); 

    file_put_contents('scores.json', json_encode($scoresArray));

    //on determine la place
    foreach ($scoresArray as $player) {
      $place += 1;
      if ($player === $score) {
      break;
      }
    }

    $placeMessage = "";
    if ($place === 1) {
      $placeMessage = "<strong>NEW RECORD !!!</strong><br>Entrez votre nom !";
    } elseif ($place === 11){
      $placeMessage = "Malheuresement, vous n'entrez pas dans le classement.";
    } else {
      $placeMessage = "Vous êtes <strong>TOP $place</strong><br>Entrez votre nom !";
    }
    //on affiche le message adapté
    if ($_GET['isTooLate'] === "true") {
      $message = "Le temps est écoulé ! Votre score est $score.<br>$placeMessage";
    } else {
      $message = "Bravo ! Votre score est $score.<br>$placeMessage";
    }
  }  


}

?>

<!-- CONTENT PAGE -->

<div class="text-center">
  <h1 class="bg-primary text-light rounded p-2 m-0">Archery Game</h1>
  <h6 class="bg-primary text-light rounded pb-2">Tableau des scores</h6>  

  <?= $message ?>
  
  <br>
  <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th>Top</th>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <?php $top = 0; ?>
      <?php foreach ($scoresArray as $name => $score): ?>  
        <?php 
          $top += 1; 
        ?>  
        <?php if ($top <=10) : ?>
          <tr>
            <td>
              <?= $top; ?>
            </td>
            <td>
              <?php if (isset($_GET['isTooLate']) && $name === "votre nom") : ?>
                <!-- afficher le formulaire que si le joueur est dans le top 3 -->
                <form action="tableau-des-scores.php" method="GET">
                  <div class="m-auto">
                    <input type="text" id="name" aria-describedby="name" name="name" placeholder="Votre nom">
                    <input type="hidden" name="score" value="<?= $score ?>">
                    <input type="submit" value="OK"/>
                  </div>
                </form>
              <?php else : ?>
                <?= $name ?>
              <?php endif ?>
            </td>
            <td><?= $score ?></td>
          </tr>  
        <?php endif ?>
      <?php endforeach ?>        
    </tbody>
  </table>  
  <br>
  <a class="btn btn-info"href="classement-mode.php">Jouer en Mode Classement</a><br><br>
  <a class="btn btn-primary"href="index.php">Retour au Menu du jeu</a>
</div>

<?php

$content = ob_get_clean();

$title = "Archery-game";
require "../commons/template.php";