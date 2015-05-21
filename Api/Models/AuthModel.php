<?php namespace model;

class AuthModel extends BaseModel {

    function login($username, $password){
        $stmt = $this->db->prepare('SELECT id FROM users WHERE username = ? AND password = ? LIMIT 1');
        $stmt->bind_param("ss", $username, $password);
        $stmt->bind_result($id);
        $stmt->execute();
        $stmt->fetch();
        if (!$id){
            throw new Exception('Username and password do not match');
        }
        return $id;
    }

}
