<?php
session_start();
var_dump($_SERVER);
var_dump($_POST);
include("Helpers/Autoloader.php");
Autoloader::start('');

use helper\Router;
use helper\Database;

$db_pw = 'password';
// check for envirement file outside project
if (file_exists('../../env')){
    $f = fopen('../../env', 'r');
    $db_pw = fread($f, 55);
    fclose($f);
    $db_pw = trim($db_pw);
}
Database::setConfig('localhost', 'root', $db_pw, 'dashcreator');

Router::get('/users', array('controller' => 'UserController', 'action' => 'index'));
Router::get('/users/:any', array('controller' => 'UserController', 'action' => 'get'));
Router::post('/users', array('controller' => 'UserController', 'action' => 'create'));
Router::put('/users/:int', array('controller' => 'UserController', 'action' => 'update'));

Router::post('/authenticate', array('controller' => 'AuthController', 'action' => 'login'));

try {
    Router::run();
} catch (Exception $e){

}
