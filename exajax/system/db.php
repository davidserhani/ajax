<?php
class DB {
	private $db;

	public function __construct($hostname, $username, $password, $database, $port = NULL) {
        $this->db = new PDO("mysql:host=$hostname;dbname=$database", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	}

	public function query($sql) {
		return $this->db->query($sql);
	}
	
	public function execute($sql) {
		return $this->db->exec($sql);
	}

	public function escape($value) {
		return $this->db->escape($value);
	}

	public function countAffected() {
		return $this->db->countAffected();
	}

	public function getLastId() {
		return $this->db->getLastId();
	}
}
?>