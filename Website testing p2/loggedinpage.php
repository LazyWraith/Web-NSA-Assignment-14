<?php

//Establishing connection
$connection = mysqli_connect('localhost', 'khoo', '123', 'nsatest');

if (!$connection)
{
    echo 'Connection error: ' . mysqli_connect_error();
}

$url = mysqli_real_escape_string($connection, $_POST['url']);

$sql = "SELECT token FROM login"
$result = mysqli_query($connection, $sql);
$tokeninfos = mysqli_fetch_all($result, MYSQLI_ASSOC);
mysqli_free_result($result);

$check = 0;

for ($i = 0; $i < count($tokeninfos); $i++)
{
    if ($url == $tokeninfos[$i]["token"])
    {
        $check++;
        break;
    }
}

if ($check != 0)
{
    echo 'true';
}
else
{
    echo '';
}

?>