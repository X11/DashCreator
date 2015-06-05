<?php namespace model;

class UserWidgetModel extends BaseModel {

    function getRelations($userId){
        $stmt = $this->db->prepare("SELECT widget_id, position FROM user_widget WHERE user_id = ?");
        $stmt->bind_param('i', $userId);
        $stmt->execute();
        $result = $stmt->get_result();
        $relations = [];
        while($row = $result->fetch_assoc()){
            $relations[] = $row;
        }
        return $relations;
    }

    function create($userId, $widgetId, $position){
        $stmt = $this->db->prepare("INSERT INTO user_widget(id, user_id, widget_id, position, created_at) VALUES(NULL, ?, ?, ?, NULL)");
        $stmt->bind_param('iii', $userId, $widgetId, $position);
        if(!$stmt->execute()){
            throw new \Exception("Failed to create an widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function update($userId, $widgetId, $position){
        $stmt = $this->db->prepare("UPDATE user_widget SET position = ? WHERE user_id = ? AND widget_id = ?");
        $stmt->bind_param('iii', $position, $userId, $widgetId);
        if(!$stmt->execute()){
            throw new \Exception("Failed to create an widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function delete($userId, $widgetId){
        $stmt = $this->db->prepare("DELETE FROM user_widget WHERE user_id = ? AND widget_id = ?");
        $stmt->bind_param('ii', $userId, $widgetId);
        if(!$stmt->execute()){
            throw new \Exception("Failed to update widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function deleteAll($userId){
        $stmt = $this->db->prepare("DELETE FROM user_widget WHERE user_id = ?");
        $stmt->bind_param('i', $userId);
        if(!$stmt->execute()){
            throw new \Exception("Failed to update widget Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        }
    }

    function getUserWidgets($id){
        $stmt = $this->db->prepare("SELECT widgets.id, widgets.name, widgets.directory, position FROM user_widget INNER JOIN widgets ON user_widget.widget_id = widgets.id WHERE user_widget.user_id = ? AND widgets.disabled = '0'");
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $widgets = [];
        while($row = $result->fetch_assoc()){
            $widgets[] = $row;
        }
        return $widgets;
    }

}
