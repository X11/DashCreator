<?php

namespace helper;

class Session {

    static $instance = null;

    static function getInstance(){
        if (!self::$instance)
            self::$instance = new Session();
        return self::$instance;
    }

	function __construct(){
		session_start();
	}

	function __get($key){
		if (isset($_SESSION[$key])){
			return $_SESSION[$key];
		}
		return false;
	}

	function __set($key, $value){
		$_SESSION[$key] = $value;
	}

	function remove($key){
		unset($_SESSION[$key]);
	}

	function keys(){
		$val = array();
		foreach ($_SESSION as $key => $value) {
			$val[] = $key;
		}
		return $val;
	}

	function getKeysFromPrefix($prefix){
		$keys = self::keys();
		$returnVal = array();
		foreach ($keys as $value) {
			if (preg_match('/^'.$prefix.'/', strtolower($value))){
				$returnVal[] = $value;
			}
		}
		return $returnVal;
	}

	function getKeysFromSuffix($suffix){
		$keys = self::keys();
		$returnVal = array();
		foreach ($keys as $value) {
			if (preg_match('/'.$prefix.'$/', strtolower($value))){
				$returnVal[] = $key;
			}
		}
		return $returnVal;
	}

}
