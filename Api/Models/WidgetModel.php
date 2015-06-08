<?php namespace model;

class WidgetModel extends BaseModel {

    function getAll(){
        $stmt = $this->db->prepare("SELECT id, name, directory, disabled FROM `widgets`");
        $stmt->execute();
        $result = $stmt->get_result();
        $widgets = [];
        while($row = $result->fetch_assoc()){
            if (file_exists(root.'/Widget/'.$row['directory'].'/package.php'))
                $row['config'] = (include(root.'/../Widget/'.$row['directory'].'/package.php'));
            $widgets[] = $row;
        }
        return $widgets;
    }

    function getEnabled(){
        $stmt = $this->db->prepare("SELECT id, name, directory, disabled FROM `widgets` WHERE disabled = '0'");
        $stmt->execute();
        $result = $stmt->get_result();
        $widgets = [];
        while($row = $result->fetch_assoc()){
            if (file_exists(root.'/Widget/'.$row['directory'].'/package.php'))
                $row['config'] = (include(root.'/../Widget/'.$row['directory'].'/package.php'));
            $widgets[] = $row;
        }
        return $widgets;
    }

    function create($name, $folder, $disabled){
        $stmt = $this->db->prepare("INSERT INTO `widgets` (id, name, directory, disabled) VALUES(NULL, ?, ?, ?)");
        $stmt->bind_param('sss', $name, $folder, $disabled);
        if(!$stmt->execute()){
            throw new \Exception("Failed to create an widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function delete($id){
        $stmt = $this->db->prepare("DELETE FROM `widgets` WHERE id = ?");
        $stmt->bind_param('s', $id);
        if(!$stmt->execute()){
            throw new \Exception("Failed to update widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function setEnabled($id, $val){
        $stmt = $this->db->prepare("UPDATE `widgets` SET disabled = ? WHERE id = ?");
        $stmt->bind_param('ss', $val, $id);
        if(!$stmt->execute()){
            throw new \Exception("Failed to update widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

}
