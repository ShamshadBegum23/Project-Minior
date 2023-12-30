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
	$Email = $_POST['Email'];
    $Pass =$_POST['Password'];
    $Toalprice=$_POST['total'];
    
    // $Toalprice = $_POST['total1'];

    // $query = "CREATE TABLE loginss(
    //     Email VARCHAR(30) NOT NULL,
    //     Pass VARCHAR(20) NOT NULL,
    //     Totalprice VARCHAR(30) NOT NULL
    // );";

    // if (mysqli_query($conn,$query))
    // {
    //     echo "";
    // }
    // else
    // {
    //     echo "error".mysqli_error($conn);
    // }
        // echo $Pass;
        $query="SELECT * FROM registers WHERE Pass='$Pass' AND Email='$Email';";
        $unamecheck=mysqli_num_rows(mysqli_query($conn,$query));
        if($unamecheck>0)
        {
            $query="INSERT INTO loginss VALUES( '$Email', '$Pass','$Toalprice');";
			if(mysqli_query($conn, $query))
			{
			 	$success='<!DOCTYPE html>
                 <html lang="en">
                 <head>
                     <meta charset="UTF-8">
                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
                     <title>Success payment</title>
                     <link rel="stylesheet" href="stylenc.css">
                 </head>
                 <body>
                     <div class="sc-container">
                         <h1>Order placed successfully</h1>
                         <p>Your order will arrive in 2 days.</p>
                         <img src="onedrive-synced-downloaded-white-backgroundb_2 - Copy.webp" alt="">
                         <a href="index.html" class="sc-btn">Back to HomePage</a>
                     </div>
                 </body>
                 </html>';
                 echo $success;
			}
			else
			{
			 	echo "error".mysqli_error($conn)."<br>";
		    }
	    }
	    else
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
            <h1 style="text-align:center; margin-top:14rem; font-size:3rem;">You dont have a account!</h1>
            <button class="styled-button" style="height:50px; width:100px; margin-left:39rem; background-color:rgb(44, 49, 49); color:white;"><a href="login(paynow).php" style="color:white;">create</a></button>
            </div>
            <script src="index.js"></script>
        </body>
        </html>
        ';
        echo $htmlContent;
	} 
?>
