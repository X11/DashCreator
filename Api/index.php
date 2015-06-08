<?php

define('root', realpath(dirname(__FILE__)));

include("Helpers/Autoloader.php");
include("Includes/Bootstrap.php");
include("Includes/Routes.php");

use helper\Router;

try {
    Router::run();
} catch (Exception $e){
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
