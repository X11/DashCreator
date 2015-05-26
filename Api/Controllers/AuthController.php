<?php 

use model\AuthModel;

class AuthController extends BaseController {
    
    function login(){
        $data = json_decode(file_get_contents("php://input"));
        $username = $data->username;
        $password = $data->password;
        try {
            $Auth = new AuthModel();
            list($id, $moderator) = $Auth->login($username, $password);
            if ($moderator == '1'){

            }
            $_SESSION["username"] = $username;
            $_SESSION["moderator"] = $moderator;
            echo json_encode(['success' => true, 'userId' => $id, 'userMod' => $moderator]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

}
