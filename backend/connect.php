
<?php
/**
 * Create a function to connect to server with the provided dbname
 */

function connect()
{
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    //    create a new connection to MYSQL
    $conn = new mysqli($serverName, $userName, $password);
    //  Check connection is working
    if ($conn->connect_error) {
        die("Connection error: " . $conn->connect_error);
    }
    echo ("Connected Successfully");
    echo ("<br>");
    return $conn;
}
