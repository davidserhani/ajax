<?php
    require_once('../system/db.php');

    $db = new DB('localhost', 'root', '', 'energydrink');

    // Get list of recipes
    $query = $db->query("SELECT * FROM recipes");
    $recipes = $query->fetchAll(PDO::FETCH_ASSOC);

    $json = json_encode($recipes);
    echo $json;
?>