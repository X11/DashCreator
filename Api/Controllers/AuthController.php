<?php 

use model\AuthModel;

class AuthController extends BaseController {
    
    function login(){
        $data = json_decode(file_get_contents("php://input"));
        $username = $data->username;
        $password = $data->password;
        try {
            $Auth = new AuthModel();
            $id = $Auth->login($username, $password);
            echo json_encode(['success' => true, 'userId' => $id]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

}
