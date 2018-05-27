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
$tch_code = $user['tch_code'];
$tch_pass = $user['tch_pass'];


$std_code = $user['std_code'];
$ss_sub = $user['ss_sub'];
$ss_score = $user['ss_score'];
$ss_mid = $user['ss_mid'];
$ss_fn = $user['ss_fn'];

/*
$action = $_GET['cmd'];
$tch_code = $_GET['tch_code'];
$tch_pass = $_GET['tch_pass'];

$std_code = $_GET['std_code'];
$ss_sub = $_GET['ss_sub'];
$ss_score = $_GET['ss_score'];
$ss_mid = $_GET['ss_mid'];
$ss_fn = $_GET['ss_fn'];
*/
switch($action){
    case 'select' :

    $tablename = " SELECT *,concat(tbl_tiname.ti_name,' ',std_fname,' ',std_lname) as nameStd FROM tbl_student  
    LEFT JOIN tbl_tiname ON tbl_student.std_tname = tbl_tiname.ti_id ";
    if($std_code != null){
        $tablename.= " WHERE std_code = '".$std_code."' ";
    }

    $stmt = $strExe->readAll($tablename);


    $dataArr['rs'] = array();

    foreach( $stmt as $row ){
        $item = array(
            'std_code'=>$row['std_code'],
            'nameStd'=>$row['nameStd'],
            'std_tel'=>$row['std_tel'],
        );
        array_push($dataArr['rs'],$item);
    }
    echo json_encode($dataArr);
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


    case 'login' :

    if($tch_code!=null || $tch_pass!=null){
    $sql = " SELECT * FROM tbl_teacher WHERE tch_code = '".$tch_code."' AND tch_pass ='".$tch_pass."' ";
    $stmt = $strExe->readAll($sql);

    $sql1 = " SELECT * FROM tbl_subjects WHERE sub_teacher  = '".$tch_code."' ";
    $stmt1 = $strExe->readAll($sql1);


    $row_count = $strExe->rowCount(" tbl_teacher WHERE tch_code = '".$tch_code."' AND tch_pass ='".$tch_pass."' ");

    $usersArray = array();
    $usersArray1 = array();
    if($row_count >0) {
        foreach($stmt as $row){
            $usersArray[] = $row;
        }

        foreach($stmt1 as $row1){
            $usersArray1[] = $row1;
        }

        
        echo json_encode([$usersArray,$usersArray1,'status' => 'ok','message' => 'ล็อคอินสำเร็จ']);
    }else{
        echo json_encode(['status' => 'error','message' => 'ข้อมูลไม่ถูกต้อง']);
    }
}
    break;
    
    case 'subject' :

    $sql = " SELECT * FROM tbl_subjects 
    left join tbl_teacher
    on sub_teacher = tbl_teacher.tch_code
    left join tbl_tiname
    on tbl_tiname.ti_id = tbl_teacher.tch_tname
    WHERE sub_teacher  =  '".$tch_code."' ";
    $stmt = $strExe->readAll($sql);
    $row_count = $strExe->rowCount(" tbl_subjects 
    left join tbl_teacher
    on sub_teacher = tbl_teacher.tch_code
    left join tbl_tiname
    on tbl_tiname.ti_id = tbl_teacher.tch_tname
    WHERE sub_teacher  =   '".$tch_code."' ");

    $usersArray = array();
    
        if($row_count >0) {
            foreach($stmt as $row){
                $usersArray[] = $row;
                $item = array(    
                    'ti_name1' => $row['ti_name'],
                    'tch_fname1' => $row['tch_fname'],
                    'tch_lname1' => $row['tch_lname']
                );
            }
            //array_push($usersArray ,$item);
            echo json_encode($usersArray);
        }
        
    break;

    
    
    case 'scoreStd' :

    $sql = "UPDATE  tbl_sub_std SET  ss_score= '".$ss_score."', ss_mid ='".$ss_mid."' ,ss_fn =  '".$ss_fn."' 
            WHERE  tbl_sub_std.ss_sub ='".$ss_sub."' AND tbl_sub_std.ss_std = '".$std_code."' ";

/*
$sql = "UPDATE  tbl_sub_std SET  ss_score= '0', ss_mid ='0' ,ss_fn =  '0' 
            WHERE  tbl_sub_std.ss_sub ='1' AND tbl_sub_std.ss_std = '58123250101' ";
*/
    $stmt = $strExe->update($sql);

    if($stmt){
        echo json_encode(['status' => 'ok','message' => 'บันทึกสำเร็จ']);
    }else{
        echo json_encode(['status' => 'error','message' => 'ไม่สำเร็จ']);
    }
    
    break;

    

}
}
?>