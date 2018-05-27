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
//$chk_date = $_GET['chk_date'];
$chk_sub = $user['chk_sub'];
$sub_sec = $user['sub_sec'];
$chk_std = $user['chk_std'];

/*
$action = $_GET['cmd'];
//$chk_date = $_GET['chk_date'];
$chk_sub = $_GET['chk_sub'];
$sub_sec = $_GET['sub_sec'];
$chk_std = $_GET['chk_std'];
$chk_status = "1";
*/
switch($action){
    case 'select' :
    
   
    $tablename = " SELECT  tbl_subjects.sub_code,tbl_subjects.sub_name,tbl_subjects.sub_sec,
    concat(tbl_teacher.tch_fname,' ',tbl_teacher.tch_lname)as nameTeacher ,
    tbl_student.std_code,concat(tbl_tiname.ti_name,' ',tbl_student.std_fname,' ',tbl_student.std_lname) as nameStd ,
    chk_date,chk_status FROM tbl_check
    LEFT JOIN tbl_subjects
    ON tbl_check.chk_sub = tbl_subjects.sub_id
    LEFT JOIN tbl_student
    ON tbl_check.chk_std = tbl_student.std_code
    LEFT JOIN tbl_teacher
    ON tbl_teacher.tch_code = tbl_subjects.sub_teacher
    LEFT JOIN tbl_tiname
    ON  tbl_student.std_tname = tbl_tiname.ti_id ";


    if($chk_sub != null){
        $tablename.= " WHERE chk_sub = '".$chk_sub."' ";
    }

    if($sub_sec != null){
        $tablename.= " AND tbl_subjects.sub_sec = '".$sub_sec."' ";
    }

    $stmt = $strExe->readAll($tablename);


    $dataArr['rs'] = array();

    foreach( $stmt as $row ){
        $item = array(
            'sub_code'=>$row['sub_code'],
            'sub_name'=>$row['sub_name'],
            'sub_sec'=>$row['sub_sec'],
            'nameTeacher '=>$row['nameTeacher'],
            'std_code'=>$row['std_code'],
            'nameStd '=>$row['nameStd'],
            'chk_date'=>$row['chk_date'],
            'chk_status'=>$row['chk_status']
        );
        array_push($dataArr['rs'],$item);
    }
    echo json_encode($dataArr);

    break;


    case 'check' :

    date_default_timezone_set("Asia/Bangkok");
    $result = date('Y/m/d H:i:s');
    //$date = date('d/m/Y', strtotime($result));
    //$time = date('H:i:s');
/*
    $sql = " SELECT count(*) as num from tbl_grade
    left join tbl_subjects
    ON tbl_subjects.sub_id = grd_sub
    where grd_std = '".$chk_std."' AND grd_sub = '".$chk_sub."' ";

    $numCount = $strExe->readAll($sql);
*/
    $row_count = $strExe->rowCount(" tbl_sub_std
    left join tbl_subjects
    ON tbl_subjects.sub_id = ss_sub
    where ss_std = '".$chk_std."' AND ss_sub = '".$chk_sub."' ");

    //echo $row_count;

    $tablename = " tbl_check ";
    $field = " chk_date,chk_sub,chk_std,chk_status ";
    $value = " '".$result."','".$chk_sub."','".$chk_std."','".$chk_status."' ";

    $sql = " SELECT * from tbl_student  
    LEFT JOIN tbl_tiname
    ON tbl_tiname.ti_id = std_tname
    where std_code = '".$chk_std."'  ";

    if($row_count>0){
    
    $stmt1 = $strExe->readAll($sql);
    $usersArray = array();
       
            foreach($stmt1 as $row){
                $usersArray[] = $row;
                $item = array(    
                    'std_code' => $row['std_code'],
                    'ti_name' => $row['ti_name'],
                    'std_fname' => $row['std_fname'],
                    'std_lname' => $row['std_lname']
                );
            }      
        

    $stmt = $strExe->insert($tablename,$field,$value);
    if($stmt){
        echo json_encode(['status' => 'ok',
                          'message' => 'เช็คชื่อเรียบร้อย'." ".
                                        $row['std_code']."<br>".
                                        $row['ti_name']." ".
                                        $row['std_fname']." ". 
                                        $row['std_lname'],
                          ]);
    }else{
        echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);
    }
}else{
    echo json_encode(['status' => 'error','message' => 'ไม่มีนักศึกษาในรายวิชานี้']);
}
    break;

    case 'countcheck' :

    $tablename = " SELECT chk_std,COUNT(chk_status) as countcheck
    FROM tbl_check
    where chk_sub = '".$chk_sub."'
    GROUP BY chk_std ";

  
    $stmt = $strExe->readAll($tablename);


    $usersArray = array();
  
        foreach($stmt as $row){
            $usersArray[] = $row;
        }
        //array_push($usersArray ,$item);
        echo json_encode($usersArray);
    
    break;

}
}
?>