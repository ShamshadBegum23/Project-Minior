
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
</head>
<body>
    <div class="container"> 
        <div class="form-box"> 

            <form action="http://localhost/verify(edit).php" name="Formfill" onsubmit="return validation()" method="POST">
                <h2>Register</h2>
                <p id="result"></p>
                <div class="input-box">
                    <box-icon type='solid' name='user'></box-icon>
                    <input type="text" placeholder="username" name="Username" required>
                </div>
                <div class="input-box">
                    
                    <box-icon type='solid' name='envelope'></box-icon>
                    <input type="email" placeholder="Email id" name="Email" required>
                </div>
                <div class="input-box">
                    <box-icon type='solid' name='lock-alt'></box-icon>
                    <input type="password" placeholder="password" name="Password" required>
                </div>
                <div class="input-box">
                <box-icon type='solid' name='home'></box-icon>
                    <input type="text" placeholder="Address" name="address" required>
                </div>
            
                <div class="button">
                    <input type="submit"  onclick="validation()" value="Register" class="btn">
                </div>
                <div class="group">
                    <span><a href=#>Forget password</a></span>
                    <span><a href=#>Login</a></span>
                </div>
            </form>
        <!-- </div>
            <div class="popup" id="popup">
                <img style="width: 60px;" src="onedrive-synced-downloaded-white-backgroundb_2 - Copy.webp" alt="" class="src">
               <h2 style="color: black;">Thank you!</h2>
                <p>your Registration successfully completed. thanks!</p>
                <a href=""><button onclick="closeslide()">ok</button></a>
            </div>
         </div> -->
         <!-- <a href="verify.php?id=click">hello</a> -->
    <script src="index.js"></script>
</body>
</html>