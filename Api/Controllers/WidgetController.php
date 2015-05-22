<?php

use model\WidgetModel;

class WidgetController extends BaseController {

    function index(){
        echo json_encode(['success' => true, 'data' => [
            [
                'id' => 1,
                'name' => 'Clock',
            ],
            [
                'id' => 2,
                'name' => 'Digital Clock',
            ],
            [
                'id' => 3,
                'name' => 'Bookmarks',
            ],
        ]]);      
    }

    function get($search){
    }

    function create(){
    }

    function update($id){

    }

}
