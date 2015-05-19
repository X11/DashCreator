<?php

namespace helper;

class Database extends \mysqli {
    
    static $instance = null;
    static $config = [
        'hostname' => '',
        'username' => '',
        'password' => '',
        'database' => '',
    ];

    static function setConfig($host, $user, $pass, $db){
        self::$config = [
            'hostname' => $host,
            'username' => $user,
            'password' => $pass,
            'database' => $db,
        ];
    }

    static function getInstance(){
        if (!self::$instance)
            $instance = new Database(self::$config['hostname'], self::$config['username'], self::$config['password'], self::$config['database']);
        return $instance;
    }   

}
