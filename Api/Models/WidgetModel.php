<?php namespace model;

class WidgetModel extends BaseModel {

    function getAll(){

    }

    function create($username, $folder){
        $stmt = $this->db->prepare("INSERT INTO widgets(id, username, password, email, token, moderator, created_at) VALUES(NULL, ?, ?, ?, '', '0', NULL)");
        $stmt->bind_param('sss', $username, $password, $email);
        if(!$stmt->execute()){
            throw new \Exception("Failed to create an user Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function update(){

    }

}
