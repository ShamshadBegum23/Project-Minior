<?php
    $conn=mysqli_connect("localhost","root","","Pharma");
    if($conn)
    {
        echo "";
    }
    else
    {
        echo "Connection fail";

    }

    $Uname = $_POST['Username'];
	$Email = $_POST['Email'];
    $Pass =$_POST['Password'];
    $Address=$_POST['address'];
    
    // $Toalprice = $_POST['total1'];

    $query = "CREATE TABLE registers(
        Uname VARCHAR(15) NOT NULL,
        Email VARCHAR(30) NOT NULL,
        Pass VARCHAR(20) NOT NULL,
        Address VARCHAR(30) NOT NULL
    );";

    // if (mysqli_query($conn,$query))
    // {
    //     echo " table created";
    // }
    // else
    // {
    //     echo "error".mysqli_error($conn);
    // }
	    	$query="INSERT INTO registers VALUES('$Uname', '$Email', '$Pass','$Address');";
			if(mysqli_query($conn, $query))
			{
                $htmlContent = '
                <!DOCTYPE html>
                <html>
                <head>
                <style>
                body{
                    background-color: #c2c3c7;
                
                }
                </style>
                </head>
                <body>
                <div class="backimg">
                    <h1 style="text-align:center; margin-top:14rem; font-size:3rem;">Registration completed!</h1>
                    <button class="styled-button" style="height:50px; width:190px; margin-left:35rem; background-color:rgb(44, 49, 49); color:white;"><a href="categories.html" style="color:white; font-size:1rem;">Now you can browse..</a></button>
                    </div>
                    <script src="index.js"></script>
                </body>
                </html>
                ';
                echo $htmlContent;
              }
			else
			{
			 	echo "error".mysqli_error($conn)."<br>";
		    }

?>
