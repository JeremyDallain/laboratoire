<?php ob_start(); ?>

<?php

$links = [
    ['archery-game', 'js'],
    ['calculatrice', 'js'],
    ['convertisseur', 'js'],
    ['jeu-de-la-vie', 'js'],
    ['jeu-des-batons', 'js'],
    ['memory', 'js'],
    ['morpion', 'js'],
    ['pierre-feuille-ciseaux', 'js'],
    ['pierre-feuille-ciseaux-lezard-spock', 'js'],
    ['puissance-4', 'js'],
    ['timer', 'js']
];

?>

<h1 class="text-center">Laboratoire - Jérémy Dallain 2020</h1>

<div class="list-group">
    <?php foreach ($links as $link) : ?>
        <a class="list-group-item list-group-item-action" href="<?= $link[0] ?>/"><?= $link[0] ?> <?= $link[1] ?></a>
    <?php endforeach; ?>
</div>



<?php
$content = ob_get_clean();
$title = "Laboratoire";
require "commons/template.php";
