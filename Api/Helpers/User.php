<?php namespace helper;

class User {

    static function isUser(){
        if (!isset($_SERVER["PHP_AUTH_USER"])) 
            return false;
        if ($_SERVER["PHP_AUTH_USER"] == $_SESSION["username"])
            return true;
    }

    static function isModerator(){
        if(User::isUser()){
            return $_SESSION["moderator"] == 1 ? true : false;
        }
    }

}
