<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Laboratoire de Jeremy Dallain">
    <meta name="author" content="Jérémy Dallain">
    <title>
      <?= isset($title) ? $title : 'Laboratoire'; ?>
    </title>
    <link rel="icon" type="image/png" href="/src/images/favicon.ico" />

    <!-- <link href="font-link" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- Css des Applis -->
      <?php if ($title === 'Jeu de la vie') : ?>
          <link rel="stylesheet" href="/jeu-de-la-vie/styles/style.css">
      <?php endif; ?>
      <?php if ($title === 'Archery-game') : ?>
          <link rel="stylesheet" href="/archery-game/styles/archery.css">
      <?php endif; ?>

  </head>
  <body>

    <main role="main" class="container mt-5">
        <?php if ($title !== 'Laboratoire') : ?>
            <a href="/index.php">Retour à la liste</a>
        <?php endif; ?>
        <?= $content ?>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>