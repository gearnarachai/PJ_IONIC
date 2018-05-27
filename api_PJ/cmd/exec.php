<?PHP 
class ExecSQL{
    public function __construct($str_conn){
        $this->conn = $str_conn;
    }


    public function readAll($tablename){
    $stmt = $this->conn->prepare("  $tablename ");   
    $stmt -> execute();
    return $stmt;
    
    }

    public function insert($tablename,$field,$value){
        $stmt = $this->conn->prepare(" INSERT INTO $tablename ($field) VALUES ($value) ");
        return $this->checkExe($stmt);
     }

     public function update($sql){
        $stmt= $this->conn->prepare($sql);
        return $this->checkExe($stmt);
     }

    private function checkExe($stmt){
        if($stmt->execute())
        {
            return true;
        }else{ 
            return false; 
        }

    }
    
    public function rowCount($table_name){
        $stmt = $this->conn->prepare( " SELECT COUNT(*) as total_rows FROM ".$table_name );
        $stmt->execute();
        $rows = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rows['total_rows'];
    }




    /*public function read($sql){
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt;
     }*/


}
?>