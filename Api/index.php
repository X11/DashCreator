<?php
session_start();
include("Helpers/Autoloader.php");
Autoloader::start('');
define('root', realpath(dirname(__FILE__)));

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

Router::get('/widgets', array('controller' => 'WidgetController', 'action' => 'index'));
Router::put('/widgets/:int', array('controller' => 'WidgetController', 'action' => 'update'));
Router::delete('/widgets/:int', array('controller' => 'WidgetController', 'action' => 'delete'));

Router::get('/install/widgets', array('controller' => 'WidgetController', 'action' => 'install'));

Router::get('/admin/widgets', array('controller' => 'WidgetController', 'action' => 'getAll'));

try {
    Router::run();
} catch (Exception $e){

}
