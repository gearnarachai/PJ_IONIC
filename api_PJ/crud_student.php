<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include("config/db.php");
include("cmd/exec.php");

$db = new Database();
$strConn = $db -> getConnection();
$strExe = new ExecSQL($strConn);




if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // get post body content
$content = file_get_contents('php://input');
    // parse JSON
$user = json_decode($content, true);


$action = $user['cmd'];
$std_code = $user['std_code'];
$sub_id = $user['sub_id'];

$std_pass = $user['std_pass'];
$std_tname = $user['std_tname'];
$std_fname = $user['std_fname'];
$std_lname = $user['std_lname'];
$std_tel = $user['std_tel'];


/*
$action = $_GET['cmd'];
$std_code = $_GET['std_code'];
$sub_id = $_GET['sub_id'];
*/

switch($action){
    case 'select' :

    $tablename = " SELECT * , CONCAT( tbl_tiname.ti_name,' ', std_fname,' ', std_lname ) AS nameStd
    FROM tbl_student
    LEFT JOIN tbl_tiname ON tbl_student.std_tname = tbl_tiname.ti_id ";

    $sqlCount = " tbl_student
    LEFT JOIN tbl_tiname ON tbl_student.std_tname = tbl_tiname.ti_id ";
   
    if($std_code != null){
        $tablename.= " WHERE std_code = '".$std_code."' ";
        $sqlCount.= " WHERE std_code = '".$std_code."' ";
    }
    
    $usersArray = array();
    $row_count = $strExe->rowCount($sqlCount);
    $stmt = $strExe->readAll($tablename);
    if($row_count >0) {
        foreach($stmt as $row){
            $usersArray[] = $row;
        }   
        echo json_encode($usersArray);
    }
   
    break;


    case 'insert' :

    $tablename = " tbl_student ";
    $field = " std_code,std_tname,std_fname,std_lname,std_tel ";
    $value = " '".$std_code."','".$std_tname."','".$std_fname."','".$std_lname."','".$std_tel."' ";

    $stmt = $strExe->insert($tablename,$field,$value);
    if($stmt){
        echo json_encode(array('msg'=>'บันทึกข้อมูลเรีบยร้อยแล้ว'));
    }else{
        echo json_encode(array('msg'=>'ไม่สามารถบันทึกข้อมูลได้'));
    }
    
    break;

    case 'login' :

    if($std_code!=null || $std_pass!=null){
    $sql = " SELECT * FROM tbl_student WHERE std_code = '".$std_code."' AND std_pass ='".$std_pass."' ";
    $stmt = $strExe->readAll($sql);
    $row_count = $strExe->rowCount(" tbl_student WHERE std_code = '".$std_code."' AND std_pass ='".$std_pass."' ");
    $usersArray = array();
    if($row_count >0) {
        foreach($stmt as $row){
            $usersArray[] = $row;
        }
        echo json_encode([$usersArray,'status' => 'ok','message' => 'ล็อคอินสำเร็จ']);
    }else{
        echo json_encode(['status' => 'error','message' => 'ข้อมูลไม่ถูกต้อง']);
    }
}
    break;
    

case 'selectSub' :

$sql=" SELECT * FROM tbl_subjects
left join tbl_sub_std 
ON  tbl_sub_std.ss_sub = sub_id
where tbl_sub_std.ss_std = '".$std_code."'  ";


$sqlCount = " tbl_subjects
left join tbl_sub_std 
ON  tbl_sub_std.ss_sub = sub_id
where tbl_sub_std.ss_std = '".$std_code."' ";

$usersArray = array();
$row_count = $strExe->rowCount($sqlCount);
$stmt = $strExe->readAll($sql);
if($row_count >0) {
    foreach($stmt as $row){
        $usersArray[] = $row;
    }   
    echo json_encode($usersArray);
}

break;




case 'selectScore' :

$sql="SELECT * FROM tbl_sub_std 
WHERE ss_std = '".$std_code."' AND ss_sub = '".$sub_id."'   ";


$sqlCount = " tbl_sub_std 
WHERE ss_std = '".$std_code."' AND ss_sub = '".$sub_id."'  ";

$usersArray = array();
$row_count = $strExe->rowCount($sqlCount);
$stmt = $strExe->readAll($sql);
if($row_count >0) {
    foreach($stmt as $row){
        $usersArray[] = $row;
        $item = array(
            'ss_score' =>$row['ss_score'],
            'ss_mid' =>$row['ss_mid'],
            'ss_fn' =>$row['ss_fn'],
            'total'=> ($row['ss_score']+$row['ss_mid']+$row['ss_fn'])
        );
    }   
    //array_push($usersArray,$item);
    echo json_encode([$item]);
}

break;
}
}
?>