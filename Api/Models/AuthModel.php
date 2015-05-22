<?php namespace model;

class AuthModel extends BaseModel {

    function login($username, $password){
        $stmt = $this->db->prepare('SELECT id, password FROM users WHERE username = ? LIMIT 1');
        $stmt->bind_param("s", $username);
        $stmt->bind_result($id, $password_hash);
        $stmt->execute();
        $stmt->fetch();
        if (!$id){
            throw new Exception('There is no such user');
        }
        if (!password_verify($password, $password_hash)){
            throw new \Exception('Username and password do not match');
        }
        return $id;
    }

}
