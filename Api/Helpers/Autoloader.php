<?php

class Autoloader {
    static $app = '';
    static function loader($class){
        $path = preg_replace('/\\\/', '/', $class);
        $parts = explode('/', $path);
        $folders = array("Helpers", "Includes", "Controllers", "Models");
        foreach($folders as $value){
            $path = self::$app.$value.'/'.end($parts).'.php';
            if (file_exists($path)){
                require_once($path);
                break;
            }
        }
    }
    static function start($path){
        self::$app = $path;
        spl_autoload_register('Autoloader::loader');
    }
}
