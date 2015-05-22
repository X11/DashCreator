<?php namespace model;

class UserModel extends BaseModel {

    function index(){

    }

    function isUser($username){
        $stmt = $this->db->prepare('SELECT id FROM users WHERE username = ? LIMIT 1');
        $stmt->bind_param('s', $username);
        $stmt->bind_result($id);
        $stmt->execute();
        $stmt->fetch();
        return ($id) ? true : false;
    }

    function create($username, $email, $password){
        if ($this->isUser($username)){
            throw new \Exception('Username is already taken');
        }
        $stmt = $this->db->prepare("INSERT INTO users (id, username, password, email, token, moderator, created_at) VALUES(NULL, ?, ?, ?, '', '0', NULL)");
        $stmt->bind_param('sss', $username, $password, $email);
        if(!$stmt->execute()){
            throw new \Exception("Failed to create an user Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function update(){

    }

}
