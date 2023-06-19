<?php echo "Hello, World!";

$connection = mysqli_connect('localhost', 'user', 'PAFBAWUayq9U7oWz', 'nsa');

if (!$connection)
{
    echo 'Connection error: ' . mysqli_connect_error();
}
$username = mysqli_real_escape_string($connection, $_POST['username']);
$password = mysqli_real_escape_string($connection, $_POST['password']);

$hashedpassword = hash('sha256', $password);
echo $hashedpassword;

$sql = "SELECT password FROM login WHERE username = '$username'";
$result = mysqli_query($connection, $sql);
$logininfos = mysqli_fetch_assoc($result);

if(empty($logininfos))
{
    exit();
}

if (hash_equals($hashedpassword, $logininfos['password']))
{
    $token = hash('md5', random_int(-2147483648, 214783647));
    $insertquery = "UPDATE `login` SET `token` = '$token' WHERE `login`.`username` = '$username' ";
    mysqli_query($connection, $insertquery);
    //account.nsagroup14.com/landing.html?token=
    echo "account.nsagroup14.com/index.html?token=" . $token;
}
else
{
    echo '';
}

?>