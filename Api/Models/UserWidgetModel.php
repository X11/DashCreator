<?php namespace model;

class UserWidgetModel extends BaseModel {

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

}
