<?php

//Establishing connection
$connection = mysqli_connect('192.168.14.10', 'user', 'PAFBAWUayq9U7oWz', 'nsa');

if (!$connection)
{
    echo 'Connection error: ' . mysqli_connect_error();
}

$token = mysqli_real_escape_string($connection, $_POST['token']);

$sql = "SELECT token FROM login WHERE token = '$token'";
$result = mysqli_query($connection, $sql);
$tokeninfos = mysqli_fetch_assoc($result);

if(!empty($tokeninfos))
{
    echo "true";
}
else echo "";

// $check = 0;

// for ($i = 0; $i < count($tokeninfos); $i++)
// {
//     if ($token == $tokeninfos[$i]["token"])
//     {
//         $check++;
//         break;
//     }
// }

// if ($check != 0)
// {
//     echo 'true';
// }
// else
// {
//     echo '';
// }

?>