<?php
    $total=$_GET['total'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
    <div class="form-box">
        <form action="http://localhost/loginverify.php" name="Formfill" onsubmit="return validation()" method="post">
            <h2>Login</h2>
            <p id="result"></p>
            <div class="input-box">
                
                <box-icon type='solid' name='envelope'></box-icon>
                <input type="email" placeholder="Email id" name="Email">
            </div>
            <div class="input-box">
                <box-icon type='solid' name='lock-alt'></box-icon>
                <input type="password" placeholder="password" name="Password">
            </div>
            <div class="input-box">
                <box-icon name='money-withdraw'></box-icon>
                    <input type="text"  name="total" value="<?php echo 'Total price $'.$total; ?>" readonly>
                </div>
            
            <div class="button">
                <input type="submit"  onclick="validation()" value="Login" class="btn">
            </div>
        </form>
    </div>
</div>
<script src="index.js"></script>
</body>
</html>