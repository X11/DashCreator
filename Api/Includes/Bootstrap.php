<?php

use helper\Database;

session_start();

Autoloader::start('');

$db_pw = 'password';
// check for envirement file outside project
if (file_exists('../../env')){
    $f = fopen('../../env', 'r');
    $db_pw = fread($f, 55);
    fclose($f);
    $db_pw = trim($db_pw);
}

Database::setConfig('localhost', 'root', $db_pw, 'dashcreator');
