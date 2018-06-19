<?php
require_once("../system/db.php");

$db = new DB("localhost", "root", "", "cinema");

// obtenir la liste des films

$sql = "SELECT f.nom AS 'film', r.nom AS 'realisateur', g.nom AS 'genre' 
FROM `films` AS f 
INNER JOIN realisateurs AS r ON f.id_real = r.id 
INNER JOIN genre AS g ON f.id_genre = g.id";

$query = $db->query($sql);

$movies = $query->fetchAll();


//var_dump($movies); // ne pas laisser afficher sinon cela ne fonctionne pas, cette page ne doit afficher que le JSON

// afficher les résultats au format JSON
$json = json_encode($movies);
echo $json;  // ne pas oublier de l'afficher ! !


?>