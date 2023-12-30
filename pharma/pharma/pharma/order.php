<?php
    $conn=mysqli_connect("localhost","root","","restaurantly");
    if($conn)
    {
        echo "Connection is established successfully"."<br>";
    }
    else
    {
        echo "Connection fail";

    }

    $Uname = $_POST['name'];
	$Email = $_POST['email'];
    $Pass =$_POST['pass'];
    $PhoneNum = $_POST['phoneno'];
    $QuantityNum = $_POST['quantityno'];
    $ItemName = $_POST['itemName'];

    // $query = "CREATE TABLE OrderItems (
    //     Uname VARCHAR(15) NOT NULL,
    //     Email VARCHAR(20) NOT NULL,
    //     Pass VARCHAR(20) NOT NULL,
    //     PhoneNum VARCHAR(15) NOT NULL,
    //     Quantity CHAR(10) NOT NULL,
    //     Itemname VARCHAR(30) NOT NULL
    // );";

    // if (mysqli_query($conn,$query))
    // {
    //     echo "table is created"."<br>";
    // }
    // else
    // {
    //     echo "error".mysqli_error($conn);
    // }

    $query="INSERT  OrderItems VALUES('$Uname', '$Email', '$Pass', '$PhoneNum', '$QuantityNum', '$ItemName');";
	if(mysqli_query($conn, $query))
	{
	 	echo "record inserted"."<br>";
	}
	else
	{
	 	echo "error".mysqli_error($conn)."<br>";
    }

    $check=mysqli_query($connection, $query);
	if(mysqli_num_rows($check))
	{
		while($row=mysqli_fetch_assoc($check))
		{
			echo $row['Uname']." ".$row['Email']." ".$row['PhoneNum']." ".$row['QuantityNum'];
		}
	}
	else
	{
		echo "empty table";
	}
// 
?>