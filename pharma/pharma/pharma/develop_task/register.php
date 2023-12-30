<?php
$con = mysqli_connect("localhost","root","","develop_task");
if(!$con)
{
    echo "connection failed";
    
}

$uname = $_POST("uname");


?>