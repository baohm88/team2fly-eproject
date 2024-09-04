<?php
include "config.php";
function selectDatabase()
{
    global $conn, $dbName;
    $conn->query("USE $dbName");
}
