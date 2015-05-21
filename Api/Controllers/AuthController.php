<?php 

use model\AuthModel;

class AuthController extends BaseController {
    
    function login(){
        $username = $_POST['username'];
        $password = $_POST['password'];
        try {
            $Auth = new AuthModel();
            $id = $Auth->login($username, $password);
            echo json_encode(['success' => true, 'userId' => $id]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

}
