<?php

use helper\User;
use model\UserWidgetModel;

class UserWidgetController extends BaseController {

    function getRelations($userId){
        try {
            $widgetModel = new UserWidgetModel();
            $relations = $widgetModel->getRelations($userId);
            echo json_encode(['success' => true, 'relations' => $relations]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    function create(){
        try {
            $data = json_decode(file_get_contents("php://input"));
            $widgetModel = new UserWidgetModel();
            $widgetModel->create($data->userId, $data->widgetId, $data->row);
            echo json_encode(['success' => true]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    function update($userId, $widgetId){
        try {
            $data = json_decode(file_get_contents("php://input"));
            $widgetModel = new UserWidgetModel();
            $widgetModel->update($userId, $widgetId, $data->row);
            echo json_encode(['success' => true]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    function deleteAll($userId){
        try {
            $widgetModel = new UserWidgetModel();
            $widgetModel->deleteAll($userId);
            echo json_encode(['success' => true]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    function delete($userId, $widgetId){
        try {
            $widgetModel = new UserWidgetModel();
            $widgetModel->delete($userId, $widgetId);
            echo json_encode(['success' => true]);
        } catch (Exception $e){
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
    }

}
