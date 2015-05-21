<?php namespace model;

use helper\Database as DB;

class BaseModel {
    
    protected $db = null;
    
    function __construct(){
        $this->db = DB::getInstance();
    }

}
