<?php

use model\UserModel;

class UserController extends BaseController {

    function create(){
        $data = json_decode(file_get_contents("php://input"));
        if ($data->password != $data->passwordcheck){
            echo json_encode(['success' => false, 'message' => 'Your passwords does not match']);
            return;
        }
        $password = password_hash($data->password, PASSWORD_DEFAULT);
        try {
            $UserModel = new UserModel();
            $UserModel->create($data->username, $data->email, $password);
            echo json_encode(['success' => true]);
        } catch (\Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }
}
