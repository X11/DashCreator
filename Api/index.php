<?php
session_start();
include("Helpers/Autoloader.php");
Autoloader::start('');

use helper\Router;
use helper\Database;

Database::setConfig('localhost', 'root', 'ikke1997', 'dashcreator');

Router::get('/users', array('controller' => 'UserController', 'action' => 'index'));
Router::get('/users/:any', array('controller' => 'UserController', 'action' => 'get'));
Router::post('/users', array('controller' => 'UserController', 'action' => 'create'));
Router::put('/users/:int', array('controller' => 'UserController', 'action' => 'update'));

Router::post('/authenticate', array('controller' => 'AuthController', 'action' => 'login'));

try {
    Router::run();
} catch (Exception $e){

}
