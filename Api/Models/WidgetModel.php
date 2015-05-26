<?php namespace model;

class WidgetModel extends BaseModel {

    function getAll(){
        $stmt = $this->db->prepare("SELECT id, name, directory, disabled FROM widgets");
        $stmt->execute();
        $result = $stmt->get_result();
        $widgets = [];
        while($row = $result->fetch_assoc()){
            $widgets[] = $row;
        }
        return $widgets;
    }

    function getEnabled(){
        $stmt = $this->db->prepare("SELECT id, name, directory, disabled FROM widgets WHERE disabled = '0'");
        $stmt->execute();
        $result = $stmt->get_result();
        $widgets = [];
        while($row = $result->fetch_assoc()){
            $widgets[] = $row;
        }
        return $widgets;
    }

    function create($name, $folder, $disabled){
        $stmt = $this->db->prepare("INSERT INTO widgets(id, name, directory, disabled) VALUES(NULL, ?, ?, ?)");
        $stmt->bind_param('sss', $name, $folder, $disabled);
        if(!$stmt->execute()){
            throw new \Exception("Failed to create an widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function update($id, $columns){

    }

}
