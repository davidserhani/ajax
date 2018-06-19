<?php
$db = new PDO('mysql:host=localhost;dbname=cinema', 'root', '');
$query = $db->query('SELECT * FROM films');
$films = $query->fetchAll(PDO::FETCH_OBJ);
$json = json_encode($films);
echo $json;
?>