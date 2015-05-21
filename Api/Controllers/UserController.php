<?php

use model\UserModel;

class UserController extends BaseController {

    function index(){

    }

    function get($search){
        try {
            $UserModel = new UserModel();
            $UserModel->isUser($search);
            echo json_encode(['success' => true]);
        } catch (\Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    function create(){
        if ($_POST['password'] != $_POST['passwordcheck']){
            echo json_encode(['success' => false, 'message' => 'Your passwords does not match']);
            return;
        }
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $password = password_hash($password, PASSWORD_DEFAULT);
        try {
            $UserModel = new UserModel();
            $UserModel->create($username, $email, $password);
            echo json_encode(['success' => true]);
        } catch (\Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    function update($id){

    }

}
