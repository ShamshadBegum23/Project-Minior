<?php
    $conn=mysqli_connect("localhost","root","","Pharma");
    if($conn)
    {
        echo "Connection is established successfully"."<br>";
    }
    else
    {
        echo "Connection fail";

    }

    $Uname = $_POST['Username'];
	$Email = $_POST['Email'];
    $Pass =$_POST['Password'];
    
    $Toalprice = $_POST['total'];

    $query = "CREATE TABLE Users (
        Uname VARCHAR(15) NOT NULL,
        Email VARCHAR(20) NOT NULL,
        Pass VARCHAR(20) NOT NULL,
        Totalprice VARCHAR(30) NOT NULL
    );";

    // if (mysqli_query($conn,$query))
    // {
    //     echo "table is created"."<br>";
    // }
    // else
    // {
    //     echo "error".mysqli_error($conn);
    // }
        echo $Uname;
    $query="INSERT INTO Users VALUES('$Uname', '$Email', '$Pass','$Toalprice');";
	if(mysqli_query($conn, $query))
	{
	 	echo "record inserted"."<br>";
	}
	else
	{
	 	echo "error".mysqli_error($conn)."<br>";
    }

    // $check=mysqli_query($connection, $query);
	// if(mysqli_num_rows($check))
	// {
	// 	while($row=mysqli_fetch_assoc($check))
	// 	{
	// 		echo $row['Uname']." ".$row['Email']." ".$row['PhoneNum']." ".$row['QuantityNum'];
	// 	}
	// }
	// else
	// {
	// 	echo "empty table";
	// }
// 
<a href=""></a>
?>