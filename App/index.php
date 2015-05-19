<?php

include("Helpers/Autoloader.php");

use helper\Router;

Router::get('/', array(
    'controller' => 'LoginController',
    'action' => 'index',
));

Router::run();
